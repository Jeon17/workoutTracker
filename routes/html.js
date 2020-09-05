const path = require("path");

module.exports = function (app) {
  //Send to exercise
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  //Send to stats
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};