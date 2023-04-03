const express = require("express"); //just like import express from 'express';
const app = express();

const { logging, addChars, limiter } = require('./middleware');

// Apply the rate limiting middleware to all requests
app.use(limiter);

//server static files
app.use(express.static("public"));

//it provides access to the body of the request, turns body into an object
app.use(express.json());

//logging middleware
app.use(logging);

//add simpons to request middleware
app.use(addChars);

//routes middleware
app.use("/", require('./quotes'));

//start the server
const PORT = process.env.PORT || 6001; //use what the server says or if the server says nothing, use 6001
app.listen(PORT, () => {
    console.log(`The sever is alive on port ${PORT}`)
})