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
        }
        console.log("accelerations " + accelerations);
        return acceleration;
    };

    // Assess the current acceleration parameters and push it in the return data
    var assessCurrentAcceleration = function (acceleration) {
        accelerations.push(acceleration); 

        console.log("here " + accelerations.length);
        // if(accelerations.length === amount) {
        //     navigator.accelerometer.clearWatch(watchId);
        //     watchId = null;
        //     // shake.stopWatch();
        //     console.log(accelerations);

        //     return accelerations;
        // }       
    };

    return shake;
})();
