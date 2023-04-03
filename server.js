const express = require("express"); //just like import express from 'express';
const app = express();

//state
const users = [];

const { auth } = require('./middleware');
const { rateLimit } = require("express-rate-limit");

//it provides access to the body of the request, turns body into an object
app.use(express.json());

//attached the users to the request
app.use((req, res, next) => { req.users = users; next(); });

//routes middleware
app.use("/secret", auth, require('./routes/secret')); //route level middleware
app.use("/login", require('./routes/login'));
app.use("/signup", auth, require('./routes/signup'));

//start the server
const PORT = process.env.PORT || 6001; //use what the server says or if the server says nothing, use 6001
app.listen(PORT, () => {
    console.log(`The sever is alive on port ${PORT}`)
})