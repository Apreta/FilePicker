var exec = require('cordova/exec');

var FilePicker = function () {};

FilePicker.deviceSupported = function (success) {
    exec(success, null, 'FilePicker', 'deviceSupported', []);
};

FilePicker.pickFile = function (success, error, types, withDetail, frame) {
    exec(success, error, 'FilePicker', 'pickFile', [types, withDetail, frame]);
};

module.exports = FilePicker;