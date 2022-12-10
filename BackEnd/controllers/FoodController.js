const food = require("../models/food");

//Get All Foods
const getAllFoods = (req, res) => {
  food
    .find()
    .then((foodInfo) => res.json(foodInfo))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

//Create Food
const createFood = (req, res) => {
  const foodName = req.body.FoodName;
  const foodPriceOrg = req.body.FoodPriceOrg;
  const foodImage = req.body.FoodImage;
  const foodDesc = req.body.FoodDesc;
  const foodCategories = req.body.FoodCategories;
  const foodInvoices = req.body.FoodInvoices;

  const newFood = new food({
    FoodName: foodName,
    FoodPriceOrg: foodPriceOrg,
    FoodImage: foodImage,
    FoodDesc: foodDesc,
    FoodCategories: foodCategories,
    FoodInvoices: foodInvoices,
  });
  newFood
    .save()
    .then(() => res.json("Add new food success"))
    .catch((err) => res.status(400).json(`Error ${err}`));
};

//Get Foods By Category
const getFoodByCategory = (req, res) => {
  const categoryName = req.query.FoodCategories;
  food
    .find({ FoodCategories: categoryName })
    .then((element) => res.json(element))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};


module.exports = {
  getAllFoods,
  createFood,
  getFoodByCategory
};
