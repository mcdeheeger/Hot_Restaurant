// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Link to the Reserve page
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:reservations?", function(req, res) {
  console.log("ssss")
  var made = req.params.reservations;

  if (made) {
    console.log(mdae);

    for (var i = 0; i < reservations.length; i++) {
      if (made === reservations[i].routeName) {
       return res.json(reservations[i]);
      }
    }
    return res.json(false);
  }
  return res.json(reservations);
});


// Create New Characters - takes in JSON input
// app.post("/reserve", function(req, res) {

//   console.log("ssss" + res)

//   // var newReservation = req.body;
//   // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   // console.log(newcharacter);

//   // characters.push(newcharacter);

//   // res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
