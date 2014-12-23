FlurryPlugin
============

## Usage

    cordova plugin add https://github.com/kyuumeitai/flurry-phonegap-plugin.git


### Installation
Unfortunately the policy of Flurry doesn't allow to include the SDK in this repository, so:

- you'll have to go to flurry.com
- create an account
- create iPhone AND Android applications to download the SDK files
- Follow the installation steps that come with the SDK files.

### Integration
1. Call the window.plugins.flurry.startSession() method, with your app key, after the device is ready (from js).
    Also: you can just start the session in the native apps.
2. Call the other Flurry plugin methods as appropriate
3. In Android, call flurry.endSession when the app is paused and again call flurry.startSession when the app resumes, or it won't log the session.
4. In iOS, setSessionReportsOnCloseEnabled and setSessionReportsOnPauseEnabled to log the session.


## Contributors

- [kyuumeitai](https://github.com/kyuumeitai)
- [jfpsf](https://github.com/jfpsf)
- [Koray Balcı](https://github.com/koraybalci)
- [Patrick heneise (The Mobile Firm)](https://github.com/PatrickHeneise)
- [Ivan Karpan](https://github.com/IvanKarpan)

## License
Apache 2.0