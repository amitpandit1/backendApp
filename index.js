const express = require("express");
const app = express();
// require("dotenv").config();
// const port = process.env.PORT;
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>HOME PAGE</h1>");
})

app.get("/login", (req, res)=>{
    res.send("<h1>LOGIN PAGE</h1>");
})

app.listen(port, (req, res)=>{
    console.log("Server is running");
})
