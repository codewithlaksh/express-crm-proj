import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World!"
    })
})

app.listen(port, () => {
    console.log(`CRM Project Listening on port ${port}`);
})
