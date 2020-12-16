const router = require("express").Router();
const fs = require('fs')
const path = require("path");
const db = path.join(__dirname, "../db/db.json");

router.get("/note", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        
        const newNotes = JSON.parse(data);
        res.json(newNotes);
    })
})