const express = require("express");
const router = express.Router();
const sha256 = require('sha256');
const mongoose = require('mongoose');
const connection = require('../mongoose/mongo');
const userSchema = require('../mongoose/schema');

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    //defensive checks
    if (!email || !password) {
        res.send('Bad request');
        return;
    }

    req.body.password = sha256(password + "FT3");

    //store in mongo
    const User = mongoose.model("User", userSchema);
    const user = new User({ ...req.body });

    try {
        const result = await User.find({ email });

        if (result.length > 0) {
            res.send('You are already a user!');
            return;
        }

        await user.save();
        res.send('It worked!');
    } catch (err) {
        res.send('It failed!');
    }
});

module.exports = router;