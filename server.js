const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dishRouter = require("./routes/dish-router");
const path = require("node:path");
const userRouter = require("./routes/user-router");
const orderRouter = require("./routes/order-router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database not connected");
  });

app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
app.use("/api/dish", dishRouter);

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.get("{*splat}", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("server is runing", process.env.PORT);
});
