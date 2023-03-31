const express = require("express"); //just like import express from 'express';
const app = express();
const simpsons = require('./data.json');

//fix the simpsons lack of unique id
simpsons.forEach((char, index) => {
    char.id = index + 1;
});

app.use(express.json()); //it provides access to the body of the request, turns body into an object

//read route
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

//create a quote
app.post("/quotes", (req, res) => {
    req.body.id = simpsons.length + 1;
    simpsons.push(req.body);
    res.send('That worked!')
});

//delete a quote
app.delete("/quotes/:id", (req, res) => {
    console.log(req.params.id, simpsons);
    const indexOf = simpsons.findIndex(character => character.id === Number(req.params.id));
    simpsons.splice(indexOf, 1);
    res.send("Item deleted");
});

//update a quote
app.put("/quotes/:id", (req, res) => {
    const indexOf = simpsons.findIndex(character => character.id === Number(req.params.id));
    simpsons[indexOf] = req.body;
    res.send('It worked!')
});

//start the server
const PORT = process.env.PORT || 6001; //use what the server says or if the server says nothing, use 6001
app.listen(PORT, () => {
    console.log(`The sever is alive on port ${PORT}`)
})