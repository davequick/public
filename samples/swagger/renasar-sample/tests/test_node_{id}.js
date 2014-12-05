'use strict';

var test = require('tape'),
    path = require('path'),
    express = require('express'),
    enjoi = require('enjoi'),
    swaggerize = require('swaggerize-express'),
    request = require('supertest');

test('api', function (t) {
    var app = express();

    

    app.use(swaggerize({
        api: require('./../config/swagger.yaml'),
        handlers: path.join(__dirname, '../handlers')
    }));

    
    t.test('test get /node/{id}', function (t) {
        
        var responseSchema = enjoi({
            'type': "array", 
            'items': {"$ref":"Node"}
        }, {
            '#': require('../config/swagger.yaml')
        });
        

        request(app).get('/productrootmountpoint/v1/node/{id}')
        .expect(200)
        .end(function (err, res) {
            t.ok(!err, 'get /node/{id} no error.');
            t.strictEqual(res.statusCode, 200, 'get /node/{id} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
