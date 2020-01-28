const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongodbconnection");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      createIndexes: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected..");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
