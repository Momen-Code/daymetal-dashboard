const express = require("express");
const router = express.Router();
const {
  checkAdminToken,
  checkUserToken,
  checkGlobalToken,
} = require("../middlewares/jwt");

// Admin routes
router.put("/admin/signup", require("./admin/addAdmin")); // create new admin
router.post("/admin/login", require("./admin/login")); // Admin login
router.put("/admin/addProduct", checkAdminToken, require("./admin/addProduct")); // Admin add new product
router.get("/admin/getUsers", checkAdminToken, require("./admin/getUsers")); // Admin get all users in the system
router.delete(
  "/admin/deleteUser",
  checkAdminToken,
  require("./admin/deleteUser")
); // Admin add a user to the system
router.get("/admin/orders", checkAdminToken, require("./common/editUser")); // Admin add a user to the system
router.put("/user", checkAdminToken, require("./admin/getOrders")); // Admin get all orders

//Common routes
router.post("/editUser", checkGlobalToken, require("./common/editUser")); // edit user
router.get(
  "/products",
  checkGlobalToken,

  require("./common/getProducts")
); // Get all the products

//Mobile routes
router.put("/mobile/signup", require("./mobile/addUser")); // create new user
router.post("/mobile/login", require("./mobile/login")); // User login
router.put("/mobile/order", checkUserToken, require("./mobile/addOrder")); // User add new order
router.get("/mobile/order", checkUserToken, require("./mobile/getOrders")); // User get his orders

module.exports = router;
