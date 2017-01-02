//Register babel to transpile beore tests run.
require('babel-register')();

//Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};
