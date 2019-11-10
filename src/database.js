const mongoose = require('mongoose');
const uri = 'mongodb+srv://jramirez:vPnAip1XeqXQgcLL@mp1-efvp8.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is Conecting'))
    .catch(err => console.error(err));