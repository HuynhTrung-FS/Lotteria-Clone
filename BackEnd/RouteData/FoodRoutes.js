const express = require('express');
const router = express.Router();
const food = require('../controllers/FoodController');

//get all foods
router.get('/getfood', food.getAllFoods);
//create new foods
router.post('/createfood');
//get food by categories
router.get('/getfoodbycategory',food.getFoodByCategory);

module.exports = router;