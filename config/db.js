const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI_PROD, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline);
};

module.exports = connectDB;
