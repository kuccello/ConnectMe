
module.exports = function helloWorld(req, res, params) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello world');
}
