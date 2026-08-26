const argon2 = require("argon2");
const jose = require("jose");
const express = require("express");
const User = require("../db/models/User");
const auth = require("../middlewares/auth-middleware");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body.signupDetails;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "Email is already exists" });
    }
    const hashedPassword = await argon2.hash(password);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.send({ message: "signup successful" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body.loginDetails;
    const user = await User.findOne({ email });
    if (user === null) {
      return res.status(401).send({ message: "Invalid email or password" });
    }
    const isMatching = await argon2.verify(user.password, password);
    if (!isMatching) {
      return res.status(401).send({ message: "Invalid email or password" });
    }
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ id: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2d")
      .sign(secretKey);
    delete user._doc.password;
    res.send({ token, user });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

userRouter.get("/me", auth, async (req, res) => {
  try {
    delete req.user._doc.password;
    res.send({ user: req.user });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = userRouter;
