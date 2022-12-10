const category = require("../models/category");

//get all categories
const getAllCategories = (req, res) => {
  category
    .find()
    .then((categoryInfo) => res.json(categoryInfo))
    .catch((err) => res.status(400).json(`Error ${err}`));
};
module.exports = {
  getAllCategories,
};
