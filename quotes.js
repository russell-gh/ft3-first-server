const express = require("express");
const router = express.Router();

router.get("/chars", (req, res) => {
    res.redirect("/quotes");
})

//read route
router.get("/quotes", (req, res) => {
    //make a copy
    let _simpsons = [...req.simpsons];

    //get an array of the keys in the object
    const keys = Object.keys(req.query);

    if (keys.includes("character")) {
        _simpsons = _simpsons.filter(character => {
            return character.character.toLowerCase().includes(req.query.character.toLowerCase());
        });
    }

    //if data should be chopped, chop it
    if (keys.includes("count")) {
        _simpsons.length = req.query.count;
    } else if (keys.length > 0) {
        _simpsons.length = 1;
    }

    //send result to the front
    res.send(_simpsons);
});

//create a quote
router.post("/quotes", (req, res) => {
    req.body.id = req.simpsons.length + 1;
    req.simpsons.push(req.body);
    res.send('That worked!')
});

//delete a quote
router.delete("/quotes/:id", (req, res) => {
    const indexOf = req.simpsons.findIndex(character => character.id === Number(req.params.id));

    if (indexOf >= 0) {
        req.simpsons.splice(indexOf, 1);
        res.send("Item deleted");
    } else {
        res.send('Item not found')
    }

});

//update a quote
router.put("/quotes/:id", (req, res) => {
    const indexOf = req.simpsons.findIndex(character => character.id === Number(req.params.id));

    if (indexOf >= 0) {
        req.simpsons[indexOf] = req.body;
        res.send('It worked!')
    } else {
        res.status(404).send("Quote not found");
    }

});

module.exports = router;