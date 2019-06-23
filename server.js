const express = require("express");
const path = require("path");
const apiRoutes = require("./routing/apiRoutes")(app);
const htmlRoutes = require("./routing/htmlRoutes")(app);

var app = express();
var PORT = process.env.PORT || 4440;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});