const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI =
  "mongodb+srv://Mj13185:HOO7xGVAVluBAT9r@cluster0.tjw7i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
