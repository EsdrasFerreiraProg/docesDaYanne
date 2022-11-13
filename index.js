const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

const router = require("./routes.js");


app.use(router);

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html");

});

app.listen(port, (err)=>{
    console.log("Running on port " + port);
})