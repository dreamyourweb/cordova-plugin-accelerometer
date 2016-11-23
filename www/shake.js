module.exports = (function () {
    "use strict";
    var shake = {};
    var watchId = null;
    var options = {frequency: 100};
    var accelerations = [];
    var amount = 30;

    shake.startWatch = function (_amount, onError) {
        if (typeof (amount) === "number") {
            amount = _amount;
        }

        watchId = navigator.accelerometer.watchAcceleration(assessCurrentAcceleration, onError, options);
    };

    // Stop watching the accelerometer and return collected data
    shake.stopWatch = function () {
        if (watchId !== null) {
            navigator.accelerometer.clearWatch(watchId);
            watchId = null;

            return accelerations;
        }
    };

    // Assess the current acceleration parameters to determine a shake
    var assessCurrentAcceleration = function (acceleration) {
        accelerations.push(acceleration);

        if(accelerations.length === amount) {
            shake.stopWatch();
        }
    };

    return shake;
})();
