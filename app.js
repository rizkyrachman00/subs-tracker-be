// console.log("server running ...")

import express from "express";
import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

const app = express();

// other middleware express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware)


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

// custom middleware
app.use(errorMiddleware);

// const port = 3000;

app.listen(PORT, async () => {
  console.log(`Subscription running on port http://localhost:${PORT}`);

  await connectToDatabase();
});

app.get("/", (req, res) => {
  res.send("Welcome to Subs Tracker API");
});

export default app;
