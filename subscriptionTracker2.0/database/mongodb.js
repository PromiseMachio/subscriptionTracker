import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error(`Check the .env<.development||production>.local`)

}

const connectToDatabase = async() =>{
    try {
        await mongoose.connect(DB_URI)
        console.log(` Mongodb is connected successfully in ${NODE_ENV} ...`)
    } catch (error) {
        console.error("Error connecting to mongodb:", error)
        process.exit(1)
        
    }
}

export default connectToDatabase;