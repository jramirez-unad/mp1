const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jramirez:jramirez@noteapp-db-iaehc.mongodb.net/test?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is Conecting'))
    .catch(err => console.error(err));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jramirez:jramirez@noteapp-db-iaehc.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });