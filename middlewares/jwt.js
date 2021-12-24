const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const AdminModel = require("../models/Admin");

module.exports = {
  createToken: async (payload) => {
    try {
      const token = jwt.sign(payload, process.env.ACCESS_TOKEN || "randomaccesstoken");
      return token;
    } catch (e) {
      console.log(`error in jwt create -> ${e}`);
    }
  },

  checkAdminToken: async (req, res, next) => {
    try {
      const token =
        (req.headers["authorization"] && req.headers["authorization"].split(" ")[1]) ||
        (req.cookies && req.cookies["accessToken"]);

      if (!token) {
        return res.json({ status: false, message: "you must login first" });
      }

      const user = jwt.verify(token, process.env.ACCESS_TOKEN || "randomaccesstoken");

      const searchUser = await AdminModel.findOne({ _id: user._id });

      if (searchUser) {
        req.user = searchUser;
        req.user.role = "admin";
        return next();
      } else {
        return res.json({ status: false, message: "You must login first !" });
      }
    } catch (e) {
      console.log(`error in jwt check -> ${e}`);
      return next();
    }
  },
  checkUserToken: async (req, res, next) => {
    try {
      const token =
        (req.headers["authorization"] && req.headers["authorization"].split(" ")[1]) ||
        (req.cookies && req.cookies["accessToken"]);

      if (!token) {
        return res.json({ status: false, message: "you must login first" });
      }

      const user = jwt.verify(token, process.env.ACCESS_TOKEN || "randomaccesstoken");

      const searchUser = await UserModel.findOne({ _id: user._id });
      if (searchUser) {
        req.user = searchUser;
        req.user.role = "user";
        return next();
      } else {
        return res.json({ status: false, message: "You must login first !" });
      }
    } catch (e) {
      console.log(`error in jwt check -> ${e}`);
      return next();
    }
  },
};