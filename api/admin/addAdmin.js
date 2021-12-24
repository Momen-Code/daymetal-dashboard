const express = require("express");
const AdminModel = require("../../models/Admin");
const router = express.Router();

const addAdmin = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    //Validations
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

    //Search for other usernames
    const adminSearch = await AdminModel.findOne({ username });

    if (adminSearch)
      return res.json({ status: false, message: "username already exist" });

    //Save user to DB
    const savedAdmin = await AdminModel.create({
      name,
      username,
      password,
    });

    //Send Success
    return res.json({
      status: true,
      message: "User successfully created",
      data: savedAdmin,
    });
  } catch (e) {
    console.log(`error in signing up a new admin -> ${e}`);
  }
};

module.exports = addAdmin;
