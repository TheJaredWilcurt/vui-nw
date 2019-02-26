# vui-nw
Vue-CLI's UI feature as a desktop app with NW.js. This runs on Windows 7+, OSX 10.9+, and most Debian based forms of Linux (like Ubuntu).

<p align="center"><img src="https://user-images.githubusercontent.com/4629794/41982616-e585bf36-79f9-11e8-828a-1b7fea587b55.png" alt="screenshot"></p>

## Running locally

1. Download and install [Node.js](https://nodejs.org)
1. `npm -s install`
1. `npm start`

## Benefits of this approach

1. Besides Node/npm, nothing is globally installed
1. Updating to the latest version is as simple as deleting the `node_modules` and doing `npm install` again

## Running on legacy OS's

In the `package.json` change the `nw` version from `sdk` to `0.14.7-sdk`. Delete `node_modules` and do a new `npm install`. This should support Windows XP+, OSX 10.6+, and some older Linux versions. If you are not running on a legacy OS, then you should use the latest version of NW.js as it includes security updates.
