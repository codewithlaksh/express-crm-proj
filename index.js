import express from "express";
import { connectDb } from "./src/db/index.js";
import "dotenv/config";

connectDb()
  .then(() => {
    const app = express();
    const port = process.env.PORT || 8080;

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Hello World!",
      });
    });

    app.listen(port, () => {
      console.log(`CRM Project Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB\n");
    console.log(err);
    process.exit(1);
  });
