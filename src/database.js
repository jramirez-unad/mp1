const mongoose = require('mongoose');
const uri = 'mongodb+srv://jramirez:5I1EOkjPsl8aMzxf@noteapp-db-iaehc.mongodb.net/test?retryWrites=true&w=majority/notedb-js';

mongoose.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is Conecting'))
    .catch(err => console.error(err));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jramirez:5I1EOkjPsl8aMzxf@noteapp-db-iaehc.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });