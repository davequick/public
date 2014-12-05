// Assuming the variable schema exists
var swaggerNodeClient = require('swagger-node-client');
var api = swaggerNodeClient(require('../swagger.json'));

// for apiKey authorization use: api.auth('my-token')
// for basicAuth use: api.auth('username', 'password')
// authorization may be set for any level (api, api.resource, or api.operation)

api.node.getNodeById(id).then(function(node){
  console.log(node);
});

