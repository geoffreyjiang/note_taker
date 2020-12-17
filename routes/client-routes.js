const router = require("express").Router();
const path= require ("path");

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/assets/notes.html"))
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
});

router.get("/assets/css/styles.css", (req,res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/css/styles.css")); 
 })

 router.get("/js/index.js", (req,res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/js/index.js")); 
 })


module.exports = router;