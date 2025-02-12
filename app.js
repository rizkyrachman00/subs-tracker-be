// console.log("server running ...")

import express from "express";
import { PORT } from "./config/env.js";

const app = express();

// const port = 3000;

app.listen(PORT, () => {
  console.log(`Subscription running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to Subs Tracker API");
});

export default app;
