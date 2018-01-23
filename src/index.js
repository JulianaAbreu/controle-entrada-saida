var five = require("johnny-five");
var board = new five.Board({ port: "COM8" });
var handles = require('./funcoes');

//var s1 = new SensorPresenca(proximity1, 11);


board.on("ready", function () {
    var proximity = new five.Proximity({
        controller: "HC-SR04",
        pin: "10",
        freq: 400
    });

    var proximityOut = new five.Proximity({
        controller: "HC-SR04",
        pin: 11,
        freq: 400
    });

  /*  s1.on("passou", function() {

    })*/

  
    proximityOut.on("data", function () {
        data = this.cm;
    /*    console.log("Distance2: ");
       /* console.log("  cm  : ", this.cm);
        console.log("  in  : ", this.in);*/
    });

    proximity.on("data", function () {
        data = this.cm;
    /*    console.log("Distance: ");
        console.log("  cm  : ", this.cm);
        console.log("  in  : ", this.in);*/
    });

    proximity.on("change", function () {
        handles.handlePresence(this.cm);
    });
    proximityOut.on("change", function () {
        handles.handleOut(this.cm);
    })

});



