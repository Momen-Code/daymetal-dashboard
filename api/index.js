const express = require("express");
const router = express.Router();
const { checkAdminToken, checkUserToken } = require("../middlewares/jwt");

// Admin routes
router.put("/admin/signup", require("./admin/addAdmin")); // create new admin
router.post("/admin/login", require("./admin/login")); // Admin login
router.put("/admin/addProduct", checkAdminToken, require("./admin/addProduct")); // Admin add new product
router.get("/admin/getUsers", checkAdminToken, require("./admin/getUsers")); // Admin get all users in the system
router.put("/admin/addUser", checkAdminToken, require("./admin/addUser")); // Admin add a user to the system
router.post("/admin/editUser", checkAdminToken, require("./admin/editUser")); // Admin add a user to the system
router.delete(
  "/admin/deleteUser",
  checkAdminToken,
  require("./admin/deleteUser")
); // Admin add a user to the system

module.exports = router;
