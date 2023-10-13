const express = require("express");
const cros = require("cors");

const jsw = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cros());

//route
const userR = require("./src/routes/userRoute");
const BookRoutsAutintcation = require("./src/routes/bookRouteAuthnticate");
const Book = require("./src/routes/bookRouteV");

const tokenVarification = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    jsw.verify(token, "hirak", (err, decode) => {
      if (err) {
        return res.status(403).json({
          status: "filed/ login againn",
        });
      }
      req.userID = decode.data;
      next();
    });
  } else {
    res.json({
      status: "failed",
      messege: "token missing ",
    });
  }
};

app.use(userR);
app.use("/bookAuth", tokenVarification, BookRoutsAutintcation);
app.use("/book", Book);

module.exports = app;
