const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notasApp', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is Conecting'))
    .catch(err => console.error(err));