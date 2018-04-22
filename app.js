var express = require("express");
var request = require("request");

var app = express();

app.set("view engine", "ejs")

app.get("/results", (req, res) => {
    request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", (error, response, body) => {
        if( !error && res.statusCode == 200 ) {
            var data = JSON.parse(body)
            res.render("results", {data: data})
        }
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("movie API is running")
})