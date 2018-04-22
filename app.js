var express = require("express");
var request = require("request");

var app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("search")
})

app.get("/results", (req, res) => {

    // Get  data from the query string
    var myQuery = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + myQuery + "&apikey=thewdb";

    // Get data
    request(url, (error, response, body) => {
        if( !error && res.statusCode == 200 ) {
            var data = JSON.parse(body)
            res.render("results", {data: data})
        }
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("movie API is running")
})