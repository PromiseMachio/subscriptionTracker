import { Router } from "express";

const subscriptionRouter = Router();

// endpoints
subscriptionRouter.get("/", (req,res) =>{
    res.send({title:"Get all subscriptions"})
})
subscriptionRouter.post("/", (req,res) =>{
    res.send({title:"Create a  subscription"})
})
subscriptionRouter.put("/:id", (req,res) =>{
    res.send({title:"Update a subscription"})
})
subscriptionRouter.get("/user/:id", (req,res) =>{
    res.send({title:"Get a user all  subscriptions"})
})
subscriptionRouter.put("/cancel/:id", (req,res) =>{
    res.send({title:"Cancel a user  subscription"})
})
subscriptionRouter.delete("/:id", (req,res) =>{
    res.send({title:"Delete a user  subscriptions"})
})

export default subscriptionRouter;