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
        newNotes.push({
            title: req.body.title,
            text: req.body.text
        });

        fs.writeFile("./db/db.json", JSON.stringift(newNotes), (err) => {
            if (err) res.JSON({ err: "adding unsuccessful"});
            res.json ({msg: "added successfully"})
        })
    })
})

module.export = router;