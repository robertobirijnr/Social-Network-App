const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/social-network";

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
