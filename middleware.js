const simpsons = require('./data.json');
const rateLimit = require('express-rate-limit');
const connection = require('./mysql/connection')

const auth = (req, res, next) => {
    if (!req.headers.token) {
        res.send('No token');
        return;
    }

    connection.query(`SELECT count(token) as count, tokens.user_id
                        FROM tokens
                            WHERE token = "${req.headers.token}";`,

        (error, results) => {
            if (results[0].count === 0) {
                res.send('Bad token!');
                return;
            }

            req.user_id = results[0].user_id;

            next();
        }
    )

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