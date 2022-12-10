const customer = require("../models/customer");

//get all customers
const getAllCustomers = (req, res) => {
  customer
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`ERROR: ${err}`));
};

//login
const login = (req, res) => {
  const account = req.body.Account;
  const passWord = req.body.PassWord;
  customer
    .findOne({ Account: account })
    .then((user) => {
      if (user) {
        if (passWord === user.PassWord) {
          res.send({ Message: "Login Succesfully", user: user._id });
        } else {
          res.json("Login Failed");
        }
      } else {
        res.json("Account Not Register");
      }
    })
    .catch((err) => res.status(500).json(`Loi Ben Server: ${err}`));
};

//register
const register = (req, res) => {
  const customerName = req.body.CustomerName;
  const phoneNumber = req.body.PhoneNumber;
  const address = req.body.Address;
  const account = req.body.Account;
  const passWord = req.body.PassWord;
  customer
    .findOne({ $or: [{ Account: account }, { CustomerName: customerName }] })
    .then((user) => {
      if (user) {
        res.json("Customer is already existed");
      } else {
        const user = new customer({
          CustomerName: customerName,
          PhoneNumber: phoneNumber,
          Address: address,
          Account: account,
          PassWord: passWord,
        });
        user
          .save()
          .then(() => res.send({Message: "Customer Registered Successfully!!"}))
          .catch((err) => res.status(400).json(`Error: ${err}`));
      }
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
module.exports = {
  login,
  register,
  getAllCustomers,
};
