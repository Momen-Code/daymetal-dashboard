const express = require("express");
const { createToken } = require("../../middlewares/jwt");
const AdminModel = require("../../models/Admin");

const router = express.Router();

const login =  async (req, res) => {
  try {
    const { username, password } = req.body;

    //Validation
    if (!username) {
      return res.json({ status: false, message: "username is required" });
    }
    if (!password) {
      return res.json({ status: false, message: "password is required" });
    }

    //Find by username
    let userSearch = await AdminModel.findOne({ username });

    if (!userSearch) {
      return res.json({ status: false, message: "invalid credentials" });
    }

    //Find by password
    if (!password == userSearch.password) {
      return res.json({ status: false, message: "invalid credentials" });
    }

    //Send the jwt token with the success response
    const accessToken = await createToken({ _id: userSearch._id });

    res.cookie("access_token", accessToken, { maxAge: 86400 * 1000 });
    res.cookie("user_data", JSON.stringify(userSearch), {
      maxAge: 86400 * 1000,
    });

    return res.json({
      status: true,
      message: "User logged in successfully",
      data: userSearch,
      accessToken,
    });
  } catch (e) {
    console.log(`Error in logging in ${e}`);
  }
};

module.exports = login;
