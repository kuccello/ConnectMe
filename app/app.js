require.paths.unshift('./filters/');
require.paths.unshift('./endpoints/');

var connect = require('connect');
var stack1 = require('./stack1');
var stack2 = require('./stack2');

connect.createServer(stack1,stack2).listen(3333);