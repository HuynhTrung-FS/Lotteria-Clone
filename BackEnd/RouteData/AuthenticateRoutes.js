const express = require("express");
const router = express.Router();
const authenticate = require("../controllers/Authenticate");

//Test get all users
router.get("/get", authenticate.getAllCustomers);

// Login
router.post("/login", authenticate.login);

//Register
router.post("/register", authenticate.register);

module.exports = router;
