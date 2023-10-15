require("dotenv").config();
let mongoose = require("mongoose");
let mongourl = process.env.mongoUrl;

// process.env.mongo;
mongoose.set("strictQuery", false);
mongoose.connect(mongourl).then(() => {
  console.log("DB connected");
});
