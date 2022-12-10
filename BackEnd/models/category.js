const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  CategoryName: { type: String, required: true },
  CategoryImage: {type:String, required: true},
  CategoryClass :{type:String, required: true}
});

const category = mongoose.model("categories", categorySchema);

module.exports = category;
