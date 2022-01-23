const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  googleId: String,
});

mongoose.model("survey", SurveySchema);
