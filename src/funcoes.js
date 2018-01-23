var initialDistance = 2;
var maxDistance = 10;
var counter = 0;
var presence = false;
var counterOut = 0;
var presenceOut = false;

function handlePresence(data) {
    if (data >= initialDistance && data <= maxDistance) {
        presence = true;

    } else if (presence == true) {
        counter++;
        presence = false;
        console.log("Entrada", counter);

    }

    return counter;
}

function handleOut() {
    if (data >= initialDistance && data <= maxDistance) {
        presenceOut = true;

    } else if (presenceOut == true) {
        counterOut++;
        presenceOut = false;
        console.log("saida", counterOut);

    }

    return counterOut;
}


module.exports = {
    handleOut,
    handlePresence
}