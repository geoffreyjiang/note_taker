const router = require("express").Router();
const fs = require('fs')

router.get("/notes", (req, res) => {
    fs.readFile("Develop/db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    })
})

router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("Develop/db/db.json", "utf8", (err, data) => {
        if (err) throw err
        const newNotes = JSON.parse(data)
        
        newNotes.push({
            title: req.body.title,
            text: req.body.text
        });

        fs.writeFile("Develop/db/db.json", JSON.stringify(newNotes), (err) => {
            if (err) return res.JSON({ err: "Adding Unsuccessful"});
            res.json ({msg: "Added Successfully"})
        })
    })
})

module.exports = router