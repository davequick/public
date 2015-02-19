var dgram = require("dgram");

var server = dgram.createSocket("udp4");
var PORT = 67;
var LOCALBROADCAST = '192.168.1.255 ';
var LOCALINTERFACEIP = '192.168.1.2';
var INADDR_ANY = '0.0.0.0';

server.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    server.close();
});

server.on("message", function (msg, rinfo) {
    console.log("server got: " + msg + " from " +
    rinfo.address + ":" + rinfo.port);
});

server.on("listening", '0.0.0.0', function () {
    var address = server.address();
    console.log('UDP listening on ' + address.address + ":" + address.port);
    server.setBroadcast(true)
    server.setMulticastTTL(128);
});

server.bind(PORT);

