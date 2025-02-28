import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

// authRouter.post("/sign-up", (req, res) => {
//   //req.body contains the parsed JSON payload sent by the client
//   // for example... {email: "..." , password}
// });

// -> /api/v1/auth/sign-up -> POST BODY -> {name, email, password} -> Create a new user

// Path: /api/v1/auth/sign-up (POST)
authRouter.post("/sign-up", signUp);

// Path: /api/v1/auth/sign-in (POST)
authRouter.post("/sign-in", signIn);

// Path: /api/v1/auth/sign-out (POST)
authRouter.post("/sign-out", signOut);

export default authRouter;
