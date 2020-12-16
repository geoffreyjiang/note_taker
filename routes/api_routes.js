const router = require("express").Router();
const { json } = require("body-parser");
const fs = require('fs')
const path = require("path");
const db = path.join(__dirname, "../db/db.json");

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        
        const newNotes = JSON.parse(data);
        res.json(newNotes);
    })
})

router.post("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err
        const newNotes = JSON.parse(data)
    })
})