require.paths.unshift('./filters/');
require.paths.unshift('./endpoints/');

var parse = require('url').parse;
var connect = require('connect');
var hello = require('./endpoints/ep1');

module.exports = connect.router(function(app) {
    app.get('/hello', function(req, res, params) {
        console.log("Here I am!");
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello world');
    });
    app.get('/hi', hello);
})