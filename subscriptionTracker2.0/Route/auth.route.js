import { Router } from "express";
import { signIn, signOut, signUp } from "../controller/auth.controller.js";

const authRouter = Router()

/*
Under this we should have signUp.signIn and signOut 
 */

// Path:/auth/sub2'
authRouter.post("/sign-up", signUp)

authRouter.post("/sign-in", signIn)

authRouter.post("/sign-out", signOut)

export default authRouter;