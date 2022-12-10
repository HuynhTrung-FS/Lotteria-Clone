const address = require("../models/address");

//get all addresses
const getAllAdresses = (req, res) => {
  address
    .find()
    .then((addressInfo) => res.json(addressInfo))
    .catch((err) => res.status(400).json(`Error${err}`));
};
module.exports = {
  getAllAdresses,
};
