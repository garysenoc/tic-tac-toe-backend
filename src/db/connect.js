const mongoose = require("mongoose");

const connect = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/my-first-backend");
    await mongoose.connect(
      "mongodb+srv://takaad:asdf*123H@devconnector.hwyis.mongodb.net/?retryWrites=true&w=majority&appName=DevConnector"
    );
    console.log("database connected successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connect;
