const http = require('http');
const options = {
    hostname: 'localhost',
    port: 8000,
    path: '/',
    method: 'GET'
};

module.exports = function (callback) {
    const req = http.request(options, function (res) {
        res.on('data', function (chunk) {
            callback(chunk.toString());
        });
    });

    req.on('error', function (e) {
        console.log('problem with request:' + e.message);
    });
    req.end();
}