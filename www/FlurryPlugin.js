// FlurryPlugin Phonegap Plugin by JFP 12/2012

(function(window) {
  var cordova = window.cordova || window.Cordova || window.PhoneGap;

  function FlurryPlugin() {};

  // These functions must be called before you start the FlurryPlugin session

  FlurryPlugin.prototype.setAppVersion = function(version,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'setAppVersion', [version]);
  };

  // argument must be Yes or No, because it's objective C
  FlurryPlugin.prototype.setShowErrorInLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setShowErrorInLogEnabled', [enableValue]);
  };

  // argument must be Yes or No, because it's objective C
  FlurryPlugin.prototype.setEventLoggingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setEventLoggingEnabled', [enableValue]);
  };

  // argument must be Yes or No, because it's objective C
  FlurryPlugin.prototype.setDebugLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setDebugLogEnabled', [enableValue]);
  };

  // argument must be Yes or No, because it's objective C
  FlurryPlugin.prototype.setSecureTransportEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setSecureTransportEnabled', [enableValue]);
  };

  // seconds must be an integer
  FlurryPlugin.prototype.setSessionContinueSeconds = function(seconds, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setSessionContinueSeconds', [seconds]);
  };

  // argument must be Yes or No, because it's objective C
  FlurryPlugin.prototype.setCrashReportingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setCrashReportingEnabled', [enableValue]);
  };

  // End of functions that must be called before FlurryPlugin session starts

  // key is a string
  FlurryPlugin.prototype.startSession = function(key,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'startSession', [key]);
  };

  FlurryPlugin.prototype.endSession = function(successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'endSession', []);
  };

  // event must be a string
  FlurryPlugin.prototype.logEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  FlurryPlugin.prototype.logEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logEventWithParameters', [event, parameters]);
  };

  FlurryPlugin.prototype.logPageView = function(successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logPageView', []);
  };

  // timed must be Yes or No, because it's objective C
  FlurryPlugin.prototype.logTimedEvent = function(event, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logTimedEvent', [event, timed]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // timed must be Yes or No, because it's objective C
  FlurryPlugin.prototype.logTimedEventWithParameters = function(event, parameters, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logTimedEventWithParameters', [event, parameters, timed]);
  };

  FlurryPlugin.prototype.endTimedEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'endTimedEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // only used if you want to override the original parameters
  FlurryPlugin.prototype.endTimedEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'endTimedEventWithParameters', [event, parameters]);
  };

  // userID must be a string
  FlurryPlugin.prototype.setUserID = function(userID, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setUserID', [userID]);
  };

  // gender must be a string. male and female are acceptable values
  FlurryPlugin.prototype.setGender = function(gender, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setGender', [gender]);
  };

  // age must be an integer
  FlurryPlugin.prototype.setAge = function(age, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setAge', [age]);
  };

  // latitude and longitude must be doubles; horizontal and vertical accuracy must be float
  FlurryPlugin.prototype.setLatitude = function(latitude, longitude, horizontalAccuracy, verticalAccuracy, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setLatitude', [latitude,longitude,horizontalAccuracy,verticalAccuracy]);
  };

  // argument must be Yes or No, because it's objective C
  FlurryPlugin.prototype.setSessionReportsOnCloseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'setSessionReportsOnCloseEnabled', [enabled]);
  };

  // argument must be Yes or No, because it's objective C
  FlurryPlugin.prototype.setSessionReportsOnPauseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'setSessionReportsOnPauseEnabled', [enabled]);
  };

  FlurryPlugin.prototype.logError = function(errorID, message, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logError', [errorID, message]);
  };

  FlurryPlugin.install = function() {
    if (!window.plugins) {
      window.plugins = {};
    }
    window.plugins.flurry = new FlurryPlugin();
  };

  cordova.addConstructor(FlurryPlugin.install);

})(typeof global === "object" ? global : window);
