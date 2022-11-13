const express = require("express");
const app = express();
const router = express.Router();

router.get("/css/styles.css", (req,res)=>{
    res.sendFile(__dirname + "/css/styles.css");
});

router.get("/images/col1.jpeg", (req,res)=>{
    res.sendFile(__dirname + "/images/col1.jpeg");
});

router.get("/images/col2.jpeg", (req,res)=>{
    res.sendFile(__dirname + "/images/col2.jpeg");
});

router.get("/images/col3.jpeg", (req,res)=>{
    res.sendFile(__dirname + "/images/col3.jpeg");
});

router.get("/images/frontal_auto_x2_colored.png", (req,res)=>{
    res.sendFile(__dirname + "/images/frontal_auto_x2_colored.png");
});

router.get("/images/down_image.png.png", (req,res)=>{
    res.sendFile(__dirname + "/images/down_image.png.png");
});


router.get("/images/photo-1599599810769-bcde5a160d32.png", (req,res)=>{
    res.sendFile(__dirname + "/images/photo-1599599810769-bcde5a160d32.png");
});

module.exports = router;