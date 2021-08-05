const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');
dotenv.config({ path : './config.env' })
connectDB();


require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    `App is runing on ${PORT} hosted on Heroku`;
});




