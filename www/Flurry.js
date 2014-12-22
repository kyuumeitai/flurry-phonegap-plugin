// Flurry Phonegap Plugin by JFP 12/2012

(function(window) {
  var cordova = window.cordova || window.Cordova || window.PhoneGap;

  function Flurry() {};

  // These functions must be called before you start the Flurry session

  Flurry.prototype.setAppVersion = function(version,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'Flurry', 'setAppVersion', [version]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setShowErrorInLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setShowErrorInLogEnabled', [enableValue]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setEventLoggingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setEventLoggingEnabled', [enableValue]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setDebugLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setDebugLogEnabled', [enableValue]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setSecureTransportEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setSecureTransportEnabled', [enableValue]);
  };

  // seconds must be an integer
  Flurry.prototype.setSessionContinueSeconds = function(seconds, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setSessionContinueSeconds', [seconds]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setCrashReportingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setCrashReportingEnabled', [enableValue]);
  };

  // End of functions that must be called before Flurry session starts

  // key is a string
  Flurry.prototype.startSession = function(key,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'Flurry', 'startSession', [key]);
  };

  Flurry.prototype.endSession = function(successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'Flurry', 'endSession', []);
  };

  // event must be a string
  Flurry.prototype.logEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'logEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  Flurry.prototype.logEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'logEventWithParameters', [event, parameters]);
  };

  Flurry.prototype.logPageView = function(successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'logPageView', []);
  };

  // timed must be Yes or No, because it's objective C
  Flurry.prototype.logTimedEvent = function(event, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'logTimedEvent', [event, timed]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // timed must be Yes or No, because it's objective C
  Flurry.prototype.logTimedEventWithParameters = function(event, parameters, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'logTimedEventWithParameters', [event, parameters, timed]);
  };

  Flurry.prototype.endTimedEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'endTimedEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // only used if you want to override the original parameters
  Flurry.prototype.endTimedEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'endTimedEventWithParameters', [event, parameters]);
  };

  // userID must be a string
  Flurry.prototype.setUserID = function(userID, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setUserID', [userID]);
  };

  // gender must be a string. male and female are acceptable values
  Flurry.prototype.setGender = function(gender, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setGender', [gender]);
  };

  // age must be an integer
  Flurry.prototype.setAge = function(age, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setAge', [age]);
  };

  // latitude and longitude must be doubles; horizontal and vertical accuracy must be float
  Flurry.prototype.setLatitude = function(latitude, longitude, horizontalAccuracy, verticalAccuracy, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'setLatitude', [latitude,longitude,horizontalAccuracy,verticalAccuracy]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setSessionReportsOnCloseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'Flurry', 'setSessionReportsOnCloseEnabled', [enabled]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setSessionReportsOnPauseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'Flurry', 'setSessionReportsOnPauseEnabled', [enabled]);
  };

  Flurry.prototype.logError = function(errorID, message, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'Flurry', 'logError', [errorID, message]);
  };

  Flurry.install = function() {
    if (!window.plugins) {
      window.plugins = {};
    }
    window.plugins.flurry = new Flurry();
  };

  cordova.addConstructor(Flurry.install);

})(typeof global === "object" ? global : window);
