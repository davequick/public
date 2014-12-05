var mongoose = require('mongoose/');
var db = mongoose.connect('localhost');
var Schema = mongoose.Schema;
var SampleSchema = new Schema({
  identifier: [String],
  foo: String
});
// Use the schema to register a model with MongoDb
var SampleModel = mongoose.model('Sample', SampleSchema); 

var update = {$set:{}};
update.$set['foo'] = 'blahvalue2';

var find = SampleModel.findOneAndUpdate(
            {identifiers: {$all:['sampleidentifier']}},
            update,
            {upsert: true, new: true})
            .lean()
            .exec();
find.then(function(){console.log('done'); db.close();});

