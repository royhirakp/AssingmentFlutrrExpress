const express = require("express");
const router = express.Router();
const BlogModel = require("../models/bookModel");

router.get("/", async (req, res) => {
  try {
    // console.log(req.userID)
    let books = await BlogModel.find();
    res.json({
      status: "susecss",
      books,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      messege: error.messege,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // console.log(req.userID)
    let book = await BlogModel.find({ _id: req.params.id });
    res.json({
      status: "susecss",
      book,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      messege: error.messege,
    });
  }
});

module.exports = router;
