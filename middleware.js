const simpsons = require('./data.json');
const rateLimit = require('express-rate-limit');

const auth = (req, res, next) => {

    console.log(req.headers.token.trim());

    if (!req.headers.token) {
        res.send('No token');
        return;
    }

    //check if the toke is valid
    const indexOf = req.users.findIndex(user => user.token === req.headers.token.trim());

    if (indexOf === -1) {
        res.send('Bad token');
        return;
    }

    //attach the index of the current user who had the token to the request
    req.indexOf = indexOf;

    next();
}

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

//fix the simpsons lack of unique id
simpsons.forEach((char, index) => {
    char.id = index + 1;
});

const logging = (req, res, next) => {
    console.log('New request inbound!');
    next();
}

const addChars = (req, res, next) => {
    //attach the simpsons data to the request
    req.simpsons = simpsons;
    next();
}


module.exports = { logging, addChars, limiter, auth };