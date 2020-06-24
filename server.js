const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv/config');
const connectDB = require("./config/odm.js");

const db = require("./models");

let app = express();
// Parse application body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

let routes = require("./routes/index.js");
// const { connect } = require("mongoose");

app.use('/routes', routes);



let PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
module.exports = app; 