const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    FoodName : {type: String, required: true},
    FoodPriceOrg: {type: Number, required: true},
    FoodImage: {type: String, required: true},
    FoodDesc : {type: String, required: true},
    FoodCategories : []
});

const food = mongoose.model('foods', foodSchema);

module.exports = food;