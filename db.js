const mongoose = require("mongoose");

const connected = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connected;
