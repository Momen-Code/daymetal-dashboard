const express = require("express");
const UserModel = require("../../models/User");
const { v4: uuidv4 } = require("uuid");

const addUser = async (req, res) => {
  try {
    const { name, username, password, email, mobileNumber } = req.body;

    //Validations
    if (!name) {
      return res.json({
        status: false,
        message: "name is required",
      });
    }
    if (!username) {
      return res.json({
        status: false,
        message: "username is required",
      });
    }
    if (!email) {
      return res.json({
        status: false,
        message: "email is required",
      });
    }
    if (!mobileNumber) {
      return res.json({
        status: false,
        message: "mobile number is required",
      });
    }
    if (!password) {
      return res.json({
        status: false,
        message: "password is required",
      });
    }

    //Search for other usernames
    const userSearch = await UserModel.findOne({ username, email });

    if (userSearch)
      return res.json({ status: false, message: "username already exist" });

    const userId = uuidv4();

    //Save user to DB
    const savedUser = await UserModel.create({
      userId,
      name,
      username,
      password,
      email,
      mobileNumber,
    });

    //Send Success
    return res.json({
      status: true,
      message: "User successfully created",
      data: savedUser,
    });
  } catch (e) {
    console.log(`error in signing up new user-> ${e}`);
  }
};

module.exports = addUser;
