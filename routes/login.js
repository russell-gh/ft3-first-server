const express = require("express");
const router = express.Router();
const sha256 = require('sha256');
const { getRandomString } = require("../utils/maths");
// const connection = require('../mysql/connection')''
const mongoose = require('mongoose');
const userSchema = require('../mongoose/schema');

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    //defensive checks
    if (!email || !password) {
        res.send('Bad request');
        return;
    }

    const sha256Password = sha256(password + 'FT3');

    const User = mongoose.model("User", userSchema);

    try {
        const result = await User.find({ email, password: sha256Password });

        if (result.length === 0) {
            //you are not the person
            res.send('Wrong user or password');
            return;
        }

        //you must be the user
        const token = getRandomString(128);

        const response = await User.findOneAndUpdate({ email, password: sha256Password }, { token });

        if (response) {
            res.send(token);
        }
    } catch (error) {
        res.send('Something went wrong');
    }

});

module.exports = router;