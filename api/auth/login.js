const express = require("express");
const User = require("../../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  const emailExist = await User.findOne({email: req.body.email});
    if(!emailExist) return res.status(400).send("email or password is incorrect");

    const passExist = await User.findOne({password: req.body.password});
    if(!passExist) return res.status(400).send("incorrect password");

    res.send("logged in");



});

module.exports = router;
