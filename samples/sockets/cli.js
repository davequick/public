  var PORT = 67 ;
  var dgram = require('dgram');
  var client = dgram.createSocket('udp4');
  
  client.on('listening', function () {
      var address = client.address();
      console.log('UDP Client listening on ' + address.address + ":" + address.port);
  });
  
  client.on('message', function (message, remote) {   
      console.log('A: Epic Command Received. Preparing Relay.');
      console.log('B: From: ' + remote.address + ':' + remote.port +' - ' + message);
  });

  client.bind(PORT, function(){
      client.setBroadcast(true);
      client.setMulticastTTL(1);
      client.addMembership('230.0.0.0','192.168.1.2')
//      client.addMembership('0.0.0.0','192.168.1.2')
  });
