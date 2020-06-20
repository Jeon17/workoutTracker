const express = require("express");
const compression = require("compression");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
    if (req.headers['x-no-compress']) {
        return false
    }

    return compression.filter(req, res)

}
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const routes = require("./routes/index.js");

app.use('/', routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});