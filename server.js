// State variable and required module 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connecting either through Heroku or localhost
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

//Requiring routes
require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, () => {
  console.log(
    "Listening on port 8080. Visit http://localhost:8080/ in your browser.",
    PORT,
    PORT
    );
});



