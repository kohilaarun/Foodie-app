const express = require("express");

const dishRouter = express.Router();

dishRouter.get("/hi", (req, res) => {
  res.send("Dishes");
});

module.exports = dishRouter;
