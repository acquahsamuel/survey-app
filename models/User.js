const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: String,
});

mongoose.model("users", UserSchema);
