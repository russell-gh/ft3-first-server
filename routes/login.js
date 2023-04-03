const express = require("express");
const router = express.Router();
const sha256 = require('sha256');
const { getRandomString } = require("../utils/maths");

router.post("/", (req, res) => {
    const { email, password } = req.body;

    //defensive checks
    if (!email || !password) {
        res.send('Bad request');
        return;
    }

    const indexOf = req.users.findIndex(user =>
        user.email === email &&
        sha256(password + "FT3") === user.password);

    //if no token
    if (indexOf === -1) {
        res.send('Bad creds');
        return;
    }

    const token = getRandomString(128);
    req.users[indexOf].token = token;
    res.send(token.toString());
});

module.exports = router;