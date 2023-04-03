const express = require("express");
const router = express.Router();

//create a secret
router.post("/", (req, res) => {
    req.users[req.indexOf].secret = req.body.secret;
    res.send('Your secret was added!');
});

//get a secret
router.get("/", (req, res) => {
    res.send(req.users[req.indexOf].secret);
});

module.exports = router;