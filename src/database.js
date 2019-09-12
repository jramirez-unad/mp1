const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jramirez:jramirez@noteapp-db-iaehc.mongodb.net/test?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is Conecting'))
    .catch(err => console.error(err));