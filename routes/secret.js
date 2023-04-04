const express = require("express");
const router = express.Router();
const connection = require("../mysql/connection")

//create a secret
router.post("/", (req, res) => {

    connection.query(`INSERT INTO secrets
                        (content, user_id)
                            VALUES
                                ("${req.body.secret}", "${req.user_id}");`)


    res.send('Your secret was added!');
});

//get a secret
router.get("/", (req, res) => {

    connection.query(`SELECT content FROM secrets 
                        WHERE user_id = "${req.user_id}";`,

        (error, results) => {
            res.send(results[0].content);
        })


});

module.exports = router;