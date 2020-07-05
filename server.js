// State variable and required module 
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

const db = require("./models"); 

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Set up connection with mongoose on to run thru server
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Workout",
  { useNewUrlParser: true }
);

require("./routes/api")(app);
require("./routes/index")(app);

app.listen(PORT, () => {
  console.log(
    "Listening on port 8080. Visit http://localhost:8080/ in your browser.",
    PORT,
    );
});



