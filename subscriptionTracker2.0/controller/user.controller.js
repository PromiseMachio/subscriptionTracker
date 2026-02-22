import User from "../modules/user.modules.js";

/*
Here we will fetch all users and a single user.
*/

export const getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        if(!users){
            const error = new Error("No users in the database!")
            error.statusCode = 404;
            throw error;
        }
        res.status(201).json({
            success:true,
            message:"All users...",
            data:{
                users
            }

        })
    } catch (error) {
        console.error("Error occured when fetching users:", error.message)
        next()
        
    }
}

export const getAUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id).select("-password");
        if(!user){
            const error = new Error("No user in the database!")
            error.statusCode = 404;
            throw error;
        }
        res.status(201).json({
            success:true,
            message:"User...",
            data:{
                user
            }

        })
    } catch (error) {
        console.error("Error occured when fetching users:", error.message)
        next()
        
    }
}