import jwt from "jsonwebtoken";
import User from "../modules/user.modules.js";
import { JWT_TOKEN } from "../config/env.js";

export const authorization = async (req,res,next) => {
    let token;
    try {
        
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]
        }
        if(!token) return res.status(401).json({message:"Unauthrized invalid token"});

        const decoded = jwt.verify(token,JWT_TOKEN)

        const user = await User.findById(decoded.userId)

        if(!user) return res.status(401).json({message:'Unauthorized user not decoded'});

        req.user = user;
        next()
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Unauthorized access!"
        })
        
    }
}