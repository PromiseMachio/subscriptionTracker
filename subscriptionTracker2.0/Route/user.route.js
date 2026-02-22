import { Router } from "express";
import { getAUser, getAllUsers } from "../controller/user.controller.js";
import { authorization } from "../middleware/authN.js";
import subscriptionErrorHandler from "../middleware/error.handler.js";

const userRouter = Router()
// Path : /user/sub1

userRouter.get('/all',getAllUsers )

userRouter.get("/specific/:id",subscriptionErrorHandler,authorization, getAUser)

userRouter.post('/',(req,res) =>{
    res.send({title:"Create user..."})
})

userRouter.put('/:id', (req,res) =>{
    res.send({title:"Update a user..."})
}) 

userRouter.delete('/:id',(req,res) =>{
    res.send({title:"Delete a user..."})
})

export default userRouter;