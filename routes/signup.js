const express = require("express");
const router = express.Router();
const sha256 = require('sha256')

router.post("/", (req, res) => {
    const { email, password } = req.body;

    //defensive checks
    if (!email || !password) {
        res.send('Bad request');
        return;
    }

    req.body.password = sha256(password + "FT3");
    req.users.push(req.body);
    res.send('It worked!');
});

module.exports = router;