console.log("workifnnn");
// console.log('weee')
require("dotenv").config();
let mongoose = require("mongoose");
const app = require("./app");
let port = 3002;
let mongourl =
  "mongodb+srv://admin:admin@cluster0.3vq7b6q.mongodb.net/newAssingFlatterr?retryWrites=true&w=majority";

// process.env.mongo;
mongoose.set("strictQuery", false);
mongoose.connect(mongourl).then(() => {
  console.log("DB connected");
});
app.listen(port, () => {
  console.log(`Server is up at ${port} `);
});
