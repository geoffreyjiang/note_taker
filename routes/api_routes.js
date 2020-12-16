const router = require("express").Router();
const fs = require('fs')
const path = require("path");
const db = path.join(__dirname, "../db/db.json");