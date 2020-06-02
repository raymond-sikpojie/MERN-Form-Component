const mongoose = require("mongoose");
// const config = require("../config/defalut.json");
// const db = config.get("mongoURI");

const connnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ray:ray123@formdata-cyujs.mongodb.net/test?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connnectDB;
