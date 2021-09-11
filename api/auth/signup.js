const express = require("express");
const UserModel = require("../../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      username,
      password,
      confirmPassword,
      mobileNumber,
      role,
    } = req.body;

    //Validations
    if (!name) {
      return res.json({
        status: false,
        message: "Name is required",
      });
    }
    if (!username) {
      return res.json({
        status: false,
        message: "username is required",
      });
    }
    if (!password) {
      return res.json({
        status: false,
        message: "password is required",
      });
    }
    if (password != confirmPassword) {
      return res.json({
        status: false,
        message: "passwords don't match",
      });
    }
    if (!mobileNumber) {
      return res.json({
        status: false,
        message: "mobile number is required",
      });
    }
    if (!role) {
      return res.json({
        status: false,
        message: "role is required",
      });
    }

    //Search for other usernames , emails
    const userSearch = await UserModel.findOne({ username, email });

    if (userSearch)
      return res.json({ status: false, message: "username already exist" });

    //Save user to DB
    const savedUser = await UserModel.create({
      name,
      email,
      username,
      password,
      confirmPassword,
      mobileNumber,
      role,
    });

    //Send Success
    return res.json({ status: true, message: "User successfully created" ,data: savedUser});
  } catch (e) {
    console.log(`error in signing up -> ${e}`);
  }
});

module.exports = router;
