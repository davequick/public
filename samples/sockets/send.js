var dgram = require('dgram');
var message = new Buffer("sample #");
var iterator = 0;
var sender = dgram.createSocket("udp4");
var PORT = 2222;
var LOCALBROADCAST = '192.168.2.255';
var LOCALINTERFACEIP = '192.168.2.1';
var INADDR_ANY = '0.0.0.0';

//client.bind(PORT, INADDR_ANY, function() {
//    client.addMembership(LOCALBROADCAST, LOCALINTERFACEIP);
    //client.addMembership(LOCALBROADCAST);
//    client.addMembership(INADDR_ANY);
//    client.send(message, 0, message.length, PORT, INADDR_ANY, function(err) {
//        console.log('error:'+err);
//        client.close();
//    });
//});


sender.bind(2222,INADDR_ANY,function() {
    sender.setBroadcast(true)
    sender.setMulticastTTL(128);
//    sender.addMembership(INADDR_ANY, LOCALINTERFACEIP);
    setInterval(broadcastNew, 3000);
});

function broadcastNew() {
    var newMessage = message + iterator;
    iterator += 1;
    sender.send(newMessage, 0, newMessage.length, PORT, LOCALBROADCAST, function(err) {
        console.log('error:'+err);
    });

    console.log("Sent " + newMessage + " to the wire...");
}


