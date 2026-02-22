const mongoose = require("mongoose");

const connectDB = async () => {
  // console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect('mongodb+srv://erantidinesh32:Dinnu789@cluster0.rauua.mongodb.net/devtinder');
};

module.exports = connectDB;
