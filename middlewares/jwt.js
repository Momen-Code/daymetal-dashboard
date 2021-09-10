require("dotenv");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

module.exports = {
  createToken: async (payload) => {
    try {
      const token = await jwt.sign(
        payload,
        process.env.ACCESS_TOKEN || "randomAccessToken"
      );
      return token;
    } catch (e) {
      console.log(`Error in creating token -> ${e}`);
    }
  },
  checkToken: async (req, res, next) => {
    try {
      const token =
        (req.header["authorization"] &&
          req.header["authorization"].split(" ")[2]) ||
        (req.cookies && req.cookies["authorization"]);

      if (!token) {
        return res.json({ status: false, message: "you need to login first!" });
      }

      const user = await jwt.verify(
        token,
        process.env.ACCESS_TOKEN || "randomaccesstoken"
      );

      //check DB existence
      const searchUser = await UserModel.findOne({ _id: user._id });
      if (searchUser) {
        req.user = searchUser;
        return next();
      } else {
        return res.json({ status: false, message: "You must login first" });
      }
    } catch (e) {
      console.log(`error in checking token -> ${e}`);
    }
  },
};
