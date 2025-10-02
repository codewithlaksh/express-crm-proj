import express from "express";
import { connectDb } from "./src/db/index.js";
import { engine as exphbsEngine } from "express-handlebars";
import "dotenv/config";

connectDb()
  .then(() => {
    const app = express();
    const port = process.env.PORT || 8080;

    // Express handlebars configuration
    app.engine(
      "hbs",
      exphbsEngine({
        extname: "hbs",
        defaultLayout: "main.hbs",
      })
    );
    app.set("view engine", "hbs");

    app.get("/", (req, res) => {
      res.status(200).render("index", {title: "Dashboard"});
    });

    app.get("/auth/login", (req, res) => {
      res.status(200).render("auth/login", { layout: "auth", title: "Login"});
    });

    app.get("/auth/register", (req, res) => {
      res.status(200).render("auth/register", { layout: "auth", title: "Register"});
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
