var app = require('express')(),
    mongo = require('mongodb'),
    Db = mongo.Db,
    GridStore = mongo.GridStore;

//curl --upload-file index.js http://127.0.0.1:3000/upload?name=whateveriwant.js
//curl http://localhost:3000/file/whateveriwant.js

Db.connect("mongodb://localhost:27017/sampleFileDb", function(err, db) {
  if(err) return console.dir(err);

  app
      .get('/', function (req, res) {
             res.end('Hi there!');
           })
      .put('/upload', function(req, res, next) {
               req.on('end', function(){
                 console.log('request ended');
                 return res.end('file uploaded\n');
               });
               console.log('save file as (?name=__): ', req.query.name);
               var gridStoreWrite = new GridStore(db, req.query.name, "w", {chunkSize:1024});
               req.pipe(gridStoreWrite);
           })
      .get('/file/:name', function(req, res, next) {
            console.log('find and return file (?name=__): ', req.params.name);
            var gridStoreRead = new GridStore(db, req.params.name, "r", {chunkSize:1024});
            gridStoreRead.pipe(res);
          });

  app.listen(3000);
});

