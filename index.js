const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongodbURI || 'mongodb://localhost:27017/emaily-dev', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology : true
}).then(() => {
    console.log(`Connection to database successful ${keys.mongodbURI}`)
}).catch((err) => {
    console.log(`Sorry issue would be resolved immediately`)
});

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    `App is runing on ${PORT} hosted on Heroku`;
});

