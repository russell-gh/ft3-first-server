const express = require("express");
const router = express.Router();
const sha256 = require('sha256');
const connection = require('../mysql/connection');
const { addUsers, addPassword } = require("../mysql/queries");

router.post("/", (req, res) => {
    const { email, password } = req.body;

    //defensive checks
    if (!email || !password) {
        res.send('Bad request');
        return;
    }

    req.body.password = sha256(password + "FT3");
    // req.users.push(req.body);


    //store in database
    connection.query(addUsers(email), (error, result) => {
        console.log(error, result);

        connection.query(addPassword(req.body.password, result.insertId));

    })

    res.send('It worked!');
});

module.exports = router;