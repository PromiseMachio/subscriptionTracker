import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter name'],
        minLength:2,
        maxLength:100,
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Please enter email' ] ,
        unique:true,
        
    },
    password:{
        type:String,
        minLength:[8, "Password should be atleast 8 charcters"],
        required:[true, 'Please enter password']
    }
}, {timestamps:true})

const User = mongoose.model('User', userSchema)

export default User;