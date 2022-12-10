const express = require("express");
const router = express.Router();
const address = require("../controllers/AddressController");

//get all addresses
router.get("/get", address.getAllAdresses);

module.exports = router;
