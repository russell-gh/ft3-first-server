const express = require("express"); //just like import express from 'express';
const app = express();
const simpsons = require('./data.json');

//fix the simpsons lack of unique id
simpsons.forEach((char, index) => {
    char.id = index + 1;
})

app.get("/quotes", (req, res) => {
    //make a copy
    let _simpsons = [...simpsons];

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

const PORT = process.env.PORT || 6001; //use what the server says or if the server says nothing, use 6001
app.listen(PORT, () => {
    console.log(`The sever is alive on port ${PORT}`)
})