## cordova-plugin-accelerometer

Apache Cordova / PhoneGap Plugin to collect accelerometer from your android and ios phone.

## Install

Requires Cordova v5.0.0 or above.

#### Latest published version on npm

```
cordova plugin add cordova-plugin-accelerometer
```

#### Latest version from GitHub

```
cordova plugin add https://github.com/dreamyourweb/cordova-plugin-accelerometer.git
```

### Usage

You do not need to reference any JavaScript, the Cordova plugin architecture will add a shake object to your root automatically when you build.

**NB:** There is no native component to this plugin but it depends on the device motion plugin (added when this plugin is added).

### Example

```js
// Start collecting accelerometer data
shake.startWatch(/* onError */);

// Stopcollecting accelerometer data
// Return de collected data
shake.stopWatch();
```

## License

[MIT License](http://ilee.mit-license.org)
