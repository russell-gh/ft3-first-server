const express = require("express");
const router = express.Router();
// const connection = require("../mysql/connection");
const mongoose = require('mongoose');
const connection = require('../mongoose/mongo');
const userSchema = require('../mongoose/schema');

//create a secret
router.post("/", async (req, res) => {
    const User = mongoose.model("User", userSchema);
    await User.findByIdAndUpdate(req.user_id, { secret: req.body.secret });
    res.send('Your secret was added!');
});

//get a secret
router.get("/", async (req, res) => {
    const User = mongoose.model("User", userSchema);
    const results = await User.findById(req.user_id);
    res.send(results.secret);
});

module.exports = router;