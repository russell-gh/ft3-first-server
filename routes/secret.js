const express = require("express");
const router = express.Router();
// const connection = require("../mysql/connection");
const mongoose = require('mongoose');
const connection = require('../mongoose/mongo');
const userSchema = require('../mongoose/schema');

//create a secret
router.post("/", async (req, res) => {

    const User = mongoose.model("User", userSchema);

    console.log(req.user_id, req.body.secret);

    const result = await User.findByIdAndUpdate(req.user_id, { secret: req.body.secret });

    console.log(result);

    res.send('Your secret was added!');
});

//get a secret
router.get("/", (req, res) => {


});

module.exports = router;