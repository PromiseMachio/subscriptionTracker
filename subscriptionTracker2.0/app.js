
import express from "express";
import { port } from "./config/env.js";
import authRouter from "./Route/auth.route.js";
import userRouter from "./Route/user.route.js";
import subscriptionRouter from "./Route/subscription.route.js";
import connectToDatabase from "./database/mongodb.js";
import subscriptionErrorHandler from "./middleware/error.handler.js";
import cookieParser from "cookie-parser";
// App
const app = express()

// There also built in middleware 
app.use(express.json()); //
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

// creating endpoints
app.use('/user/sub1', userRouter)
app.use('/auth/sub2', authRouter)
app.use("/subscr/sub3", subscriptionRouter)

// middleware
app.use(subscriptionErrorHandler)

// const port = 5000
// listsening in a port for display
app.listen(port, async () => {
    console.log(`Server is up and running in http://localhost:${port}`)

    await connectToDatabase()
})

export default app;