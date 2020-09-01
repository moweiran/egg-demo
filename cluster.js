const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log("[master] " + "start master......");
    // Fork workes
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on("listening", function (worker, address) {
        console.log("[master] " + "listening: worker " + worker.id + ", pid:" + worker.process.pid + ",Address:" + address.address + ":" + address.port);
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker' + worker.process.pid + ' died');
    })
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer(function (req, res) {
        // console.log("worker" + cluster.worker.id);
        res.end("worker" + cluster.worker.id);
    }).listen(8000);
}