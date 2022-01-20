const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const cookieSession = require("cookie-session");
const connectDB = require("./config/db");
dotenv.config({ path: "./config.env" });
connectDB();

require("./models/User");
require("./services/passport");

const app = express();
 

//initializing a cookie to handle users session
app.use(
  cookieSession({
    // expiry date for cookie + encryption(cookie_keys)
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  `App is runing on ${PORT} hosted on Heroku`;
});
