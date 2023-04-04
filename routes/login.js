const express = require("express");
const router = express.Router();
const sha256 = require('sha256');
const { getRandomString } = require("../utils/maths");
const connection = require('../mysql/connection')

router.post("/", (req, res) => {
    const { email, password } = req.body;

    //defensive checks
    if (!email || !password) {
        res.send('Bad request');
        return;
    }

    const sha256Password = sha256(password + 'FT3');

    connection.query(`SELECT count(email) AS count, users.id FROM users
                        JOIN logins
                        ON users.id = logins.user_id
                        WHERE email = "${email}" 
                        AND password = "${sha256Password}"`,
        (error, results) => {

            console.log(error)

            if (results[0].count === 0) {
                res.send('Wrong email or password or both!');
                return;
            }

            const token = getRandomString(128);
            res.send(token.toString());

            connection.query(`INSERT INTO tokens
                                (token, user_id)
                                    VALUES
                                        ("${token}", "${results[0].id}")`)
        })

});

module.exports = router;