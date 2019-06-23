// var express = require("express");
// var path = require("path");

// var app = express();
// var PORT = process.env.PORT || 4000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/add.html", function (req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
// });

/////////////////////////////////////////API///////////////////////////////////////////////////////



let answers = require("../data/friends")


module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        var newAnswers = req.body;

        console.log(newAnswers);
        answers.push(newAnswers);

        res.json(newAnswers)
    });

    app.get("/api/friends", function (req, res) {

        res.json(answers)

    });
};

// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });



// app.get("/scores.html", function (req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
// });