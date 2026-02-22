/*
Here we will have three:
                        signUp
                        signIn
                        signOut 
                                 handlers
*/

import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from "../modules/user.modules.js";
import { JWT_TOKEN, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession()
    session.startTransaction();

    try {
        // We start the code 
        const { name, email, password } = req.body

        // Check if the user already exist
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error('User already exist');
            error.statusCode = 409;
            throw error;
        }
        // If no user 
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Creating a new user 
        const newUsers = await User.create([{ name, email, password: hashedPassword }], { session })
        const token = jwt.sign({ userId: newUsers[0]._id }, JWT_TOKEN, { expiresIn: JWT_EXPIRES_IN })
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success:true,
            message:"User Created successfully",
            data:{
                token,
                user: newUsers[0]
            }
        })

        
    } catch (error) {
        await session.abortTransaction()
        session.endSession()
        next(error)

    }

    // res.status(201).json({
    //     success: true,
    //     message: "User created successfully",
    //     data: {
    //         token,
    //         user: newUsers[0]
    //     }
    // })
}

export const signIn = async (req, res, next) => { 
    try {
        const {email, password} = req.body
        // check if user's email exist 
        const user = await User.findOne({email})

        // throw error if doesn't exist for login in ask them to log in 
        if(!user){
            const error = new Error("Email don't exist please signUp...")
            error.statusCode = 404;
            throw error;

        }
        // password comparison if they match 
        const isPasswordMatching = await bcrypt.compare(password, user.password);
        if(!isPasswordMatching){
            const error = new Error("Password don't match")
            error.statusCode = 401;
            throw error;

        }
        // Then the token should also be called for validation
        const token = jwt.sign({userId:user._id}, JWT_TOKEN, {expiresIn:JWT_EXPIRES_IN})

        // Success message 
        res.status(201).json({
            success:true,
            message:"User loged in successfully",
            data:{
                token,
                user
            }
        })
    } catch (error) {
        console.log("Error occured loging in user", error.message)
        // error.statusCode(500).json({
        //     success:false,
        //     message:"internal server error"
        // })

        next()
        
    }
    
}

export const signOut = async (req, res, next) => { }
