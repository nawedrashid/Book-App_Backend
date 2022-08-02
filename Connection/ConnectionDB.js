const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://BookApp:Aspirine7@cluster0.foldy.mongodb.net/test";

const ConnectionDB = async () => {
  try {
    const Connection = await mongoose.connect(mongoURL);
    if (Connection) console.log("Connected to DB");
    else console.log("Not Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ConnectionDB };