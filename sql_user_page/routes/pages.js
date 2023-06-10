const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res)=> {
    res.render("index");
})
router.get("/register", (req, res) => {
    // const filePath = path.join(__dirname, "public", "register.html");
    res.sendFile("register.html", {root: "./public"});
})
router.get("/login", (req, res) => {
    // const filePath = path.join(__dirname, "public", "register.html");
    res.sendFile("login.html", {root: "./public/"});
})

module.exports = router;