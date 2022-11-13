const express = require("express");
const app = express();
const router = express.Router();

router.get("/css/styles.css", (req,res)=>{
    res.sendFile(__dirname + "/css/styles.css");
});

router.get("/images/fotolateral.png", (req,res)=>{
    res.sendFile(__dirname + "/images/fotolateral.png");
});

router.get("/images/photo-1599599810769-bcde5a160d32.png", (req,res)=>{
    res.sendFile(__dirname + "/images/photo-1599599810769-bcde5a160d32.png");
});

module.exports = router;