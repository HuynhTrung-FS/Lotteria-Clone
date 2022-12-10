const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  CustomerName : {type: String, required : true},
  PhoneNumber : {type: String, required : true},
  Account: { type: String, required: true },
  PassWord: { type: String, required: true },
  CustomerInvoice: []
});

const customer = mongoose.model('customers', customerSchema);

module.exports = customer;
