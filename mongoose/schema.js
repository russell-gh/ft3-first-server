const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    token: String,
    secret: String
});

module.exports = userSchema;