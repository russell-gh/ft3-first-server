const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Mongoose Connection Success");
});

module.exports = db;