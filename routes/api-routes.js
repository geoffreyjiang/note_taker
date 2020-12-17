const router = require("express").Router();
const { json } = require("body-parser");
const fs = require('fs')
const path = require("path");
const db = path.join(__dirname, "../assets/db/db.json");

router.get("/notes", (req, res) => {
    fs.readFile("../assets/db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        
        const newNotes = JSON.parse(data);
        res.json(newNotes);
    })
})

router.post("/notes", (req, res) => {
    fs.readFile("../assets/db/db.json", "utf8", (err, data) => {
        if(err) throw err
        const newNotes = JSON.parse(data)
        newNotes.push({
            title: req.body.title,
            text: req.body.text
        });

        fs.writeFile("../assets/db/db.json", JSON.stringify(newNotes), (err) => {
            if (err) res.JSON({ err: "Adding Unsuccessful"});
            res.json ({msg: "Added Successfully"})
        })
    })
})

module.exports = router