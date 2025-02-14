const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jsonwebToken;
    if (!token) {
      return res.status(401).send("JWT must be provided");
    }
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const verifiedUser = await Users.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!verifiedUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.userId = verifiedUser._id;
    req.user = verifiedUser;
    next(); 
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).send("Token has expired");
    }
    res.status(401).send("Unauthorized access");
    console.log(err); 
  }
};

module.exports = authenticate ;