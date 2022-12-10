const express = require("express");
const router = express.Router();
const category = require("../controllers/CategoryController");

//get all categories
router.get("/get", category.getAllCategories);

module.exports = router;
