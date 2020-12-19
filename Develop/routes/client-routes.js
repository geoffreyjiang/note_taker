const router = require("express").Router();
const path= require ("path");

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/assets/css/styles.css", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css")); 
 })

 router.get("/assets/js/index.js", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js")); 
 })


module.exports = router;