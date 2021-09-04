const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  print("Login Route");
});

module.exports = router;
