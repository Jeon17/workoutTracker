let mongoose = require("mongoose");

//Set up default mongoose connection
let mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
let db = mongoose.connection;
// const dbConfig = process.env.MONGODB_URI;

async function connectDB() {
  await mongoose.connect(
    dbConfig,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("Connected to DB")
  );
}

module.exports = connectDB;
