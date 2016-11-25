module.exports = (function () {
    "use strict";
    var shake = {};
    var watchId = null;
    var options = {frequency: 100};
    var accelerations = [];

    shake.startWatch = function (onError) {
        if(watchId === null) {
            accelerations = [];
            watchId = navigator.accelerometer.watchAcceleration(assessCurrentAcceleration, onError, options);     
        }
    };

    // Stop watching the accelerometer and return collected data
    shake.stopWatch = function () {
        if (watchId !== null) {
            navigator.accelerometer.clearWatch(watchId);
            watchId = null;
        }
        return accelerations;
    };

    // Assess the current acceleration parameters and push it in the return data
    var assessCurrentAcceleration = function (acceleration) {
        accelerations.push(acceleration); 
    };

    return shake;
})();
