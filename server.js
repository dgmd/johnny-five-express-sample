var five = require("johnny-five"); // Load the node library that lets us talk JS to the Arduino
var board = new five.Board(); // Connect to the Arduino using that library

board.on("ready", function() { // Once the computer is connected to the Arduino
    // Save convenient references to the LED pin and an analog pin
    var LEDpin = new five.Pin(13);
    var analogPin = new five.Pin('A0');

    var express = require('express'); // Load the library we'll use to set up a basic webserver
    var app = express(); // And start up that server

    app.get('/', function(req, res) { // what happens when we go to `/`
        res.send("Hello from `server.js`!"); // Just send some text
    });

    app.get('/hello', function(req, res) { // what happens when we go to `/hello`
        res.sendFile('hello.html', { root: '.' }); // Send back the file `hello.html` located in the current directory (`root`)
    });

    app.get('/:pin/state', function(req, res) { // what happens when someone goes to `/#/state`, where # is any number
        console.log("Someone asked for the state of pin", req.params.pin + "…");
        var pins = {
            'analog': analogPin,
            'led': LEDpin
        };
        if (pins.hasOwnProperty(req.params.pin)) {
            pins[req.params.pin].query(function(state) {
                res.send(state);
            });
        }
        else {
            var errorMessage = "Sorry, you asked for the state of pin " + req.params.pin + ',' + "but I haven't been told about that pin yet.";
            res.send(errorMessage);
        }
    });

    app.get('/led/off', function(req, res) { // what happens when someone goes to `/led/off`
        console.log("Someone told me to turn the led off…");
        LEDpin.low(); // Set the pin referred to by the `LEDpin` variable 'low' (off)
        res.send("Now the LED for pin 13 should be off."); // And tell the user that it should be off in the webpage
    });

    app.get('/led/on', function(req, res) { // what happens when someone goes to `/led/off`
        console.log("Someone told me to turn the led on…");
        LEDpin.high(); // Set the pin referred to by the `LEDpin` variable 'high' (on)
        res.send("Now the LED for pin 13 should be on.") // And tell the user that it should be off in the webpage
    });

    app.listen(3000, function() { // Actually turn the server on
        console.log("Server's up at http://localhost:3000!");
    });
});
