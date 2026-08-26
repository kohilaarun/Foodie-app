const jose = require("jose");
const User = require("../db/models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
    const tokenData = await jose.jwtVerify(token, secretKey);
    const user = await User.findById(tokenData.payload.id);
    if (user === null) {
      return res.status(401).send({ message: "Not authenticated" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Not authenticated" });
  }
};
module.exports = auth;
