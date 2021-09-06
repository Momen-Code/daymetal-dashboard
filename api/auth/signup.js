const express = require("express");
const User = require("../../models/User");
 const router = express.Router();


router.post("/", async (req, res) => {

    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already Exists");

    const userNameExist = await User.findOne({username: req.body.username});
    if(userNameExist) return res.status(400).send("userName already Exists");

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber

    });

    
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch(e){
        res.status(400).send(e);
    }

});

module.exports = router;