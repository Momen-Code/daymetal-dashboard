const express = require("express");
const router = express.Router();

router.use("/", require("./addProduct"));

module.exports = router;