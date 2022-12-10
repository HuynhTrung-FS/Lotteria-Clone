const invoice = require("../models/invoice");
const customer = require("../models/customer");
const food = require("../models/food");
const mongoose = require('mongoose');

//get all invoices
const getAllInvoices = (req, res) => {
  invoice
    .find()
    .then((invoiceInfo) => res.json(invoiceInfo))
    .catch((err) => res.status(400).json(`Error ${err}`));
};


//Add one Food to Invoice And Create An Invoice and Add Invoice To Customer
const createInvoice = (req, res) => {
  const sumPrice = req.body.SumPrice;
  const sumAmount = req.body.SumAmount;
  const dateInvoice = req.body.DateInvoice;
  const address = req.body.Address;

  const invoiceAdded = new invoice({
    SumPrice: sumPrice,
    SumAmount: sumAmount,
    DateInvoice: dateInvoice,
    Address: address,
    InvoiceStatus: false,
    InvoiceFood: [],
  });

  invoiceAdded.InvoiceFood.push(req.body.FoodElement);
  invoiceAdded
    .save()
    .then((data) => {
      customer.findById(req.body.CustomerId).then((user) => {
        user.CustomerInvoice.push(data);
        user
          .save()
          .then(() =>
            res.send({
              Message: "Invoice was added by Customer",
              invoiceId: data._id,
            })
          )
          .catch((err) => res.status(400).json(`Errror: ${err}`));
      });
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
//Add many Foods To Invoice
const addFoodsToInvoice = (req, res) => {
  // const foodName = req.body.FoodName;
  // const foodPriceOrg = req.body.FoodPriceOrg;
  // const foodImage = req.body.FoodImage;
  // const foodDesc = req.body.FoodDesc;
  // const foodCategories = req.body.FoodCategories;
  // const invoiceFood = new food({
  //   FoodName: foodName,
  //   FoodPriceOrg: foodPriceOrg,
  //   FoodImage: foodImage,
  //   FoodDesc: foodDesc,
  //   FoodCategories: foodCategories,
  // });
  const foodAdd = req.body.FoodElement;
  const idInvoiceAdded = req.body.InvoiceId;
  invoice.findById(idInvoiceAdded).then((data) => {
    data.InvoiceFood.push(foodAdd);
    data
      .save()
      .then(() => res.json("Thêm Thức Ăn Vào Hoá Đơn Đã Có Thành Công"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
};

//Delete Food from Invoice
const deleteFoodsInInvoice = (req, res) => {
  const idFoodDelete = req.body.FoodId;
  const idInvoiceDelete = req.body.InvoiceId;
  invoice
    .updateMany(
      { _id: idInvoiceDelete },
      { $pull: { InvoiceFood: idFoodDelete } }
    )
    .then(() => res.json("Deleted Successfully!!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

//Delete Invoice From Object Invoice
const deleteInvoiceById = (req, res) => {
  const idInvoiceDeleteInCustomer = req.body.InvoiceId;
  invoice
    .deleteOne({ _id: idInvoiceDeleteInCustomer })
    .then(() => {
      res.json("Đã Xoá Hoá Đơn Theo Id");
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

// //Delete Invoice From Object Customer
// const deleteInvoiceInCustomer = (req, res) => {
//   const idInvoiceDeleteInCustomer = req.body.InvoiceId;
//   const idCustomerDeleteInvoice = req.body.CustomerId;
//   // customer
//   //   .updateMany(
//   //     { _id: idCustomerDeleteInvoice },
//   //     { $pull: { CustomerInvoice: idInvoiceDeleteInCustomer } }
//   //   )
//   //   .then(() => res.json("Đã Xoá Hoá Đơn"))
//   //   .catch((err) => res.status(400).json(`Error: ${err}`));
//   customer
//     .findOneAndUpdate(
//       { _id: mongoose.Types.ObjectId(idCustomerDeleteInvoice) },
//       {
//         $pull: {
//           CustomerInvoice: {
//             _id: mongoose.Types.ObjectId(idInvoiceDeleteInCustomer),
//           },
//         },
//       }
//     )
//     .then(() => res.json("Deleted Successfully!!"))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// };

//Get Invoice Status
// const getStatusInvoice = (req, res) => {
//   const idInvoiceStatus = req.query.InvoiceId;
//   invoice
//     .find({ _id: idInvoiceStatus })
//     .then((data) => {
//       res.send({
//         Message: "Status Invoice get done",
//         data: data,
//       });
//     })
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// };

//Update Invoice Status
const setStatusInvoice = (req, res) => {
  const idInvoiceUpdate = req.body.InvoiceId;
  invoice
    .updateOne({ _id: idInvoiceUpdate }, { $set: { InvoiceStatus: true } })
    .then(() => res.json("Đơn Hàng Đã Thanh Toán Thành Công"))
    .catch((err) => res.status(400).json(`${err}`));
};

//Update sumPrice and sumAmount
const updateSumpriceAndSumAmount = (req, res) => {
  const idInvoiceUpdateSum = req.body.InvoiceId;
  const sumPrice = req.body.SumPrice;
  const sumAmount = req.body.SumAmount;
  invoice
    .updateOne(
      { _id: idInvoiceUpdateSum },
      { $set: { SumPrice: sumPrice, SumAmount: sumAmount } }
    )
    .then(() => res.json("đã update sum price and sum amonut"));
};

//Get Status Invoice with customer

//Get Invoice has status false by userId
// const getInvoiceStatusFalse = (req, res) => {
//   customer.find({_id : req.query.CustomerId}, {CustomerInvoice : { $elemMatch : { "InvoiceStatus": false } }}).then((data) => {
//     if (!data) {
//       res.json("Bạn là người mới tạo. Cần thêm hoá đơn mới");
//     } else {
//       // data.findOne({CustomerInvoice : { $elemMatch : { "InvoiceStatus": false } }}).then((element) => {
//       //   if (!element) {
//       //     res.json("hoá đơn chưa có, cần tạo");
//       //   } else {
//       //     res.send({
//       //       Message: "Invoice hasn't been payed by customer",
//       //       invoice: element,
//       //     });
//       res.send({
//               Message: "Invoice hasn't been payed by customer",
//               invoice: data,
//       })
//     }
//   });
// };

// Add Invoices To Customer Database
// const addFoodToInvoice = (req, res) => {
//   const foodName = req.body.FoodName;
//   const foodPriceOrg = req.body.FoodPriceOrg;
//   const foodImage = req.body.FoodImage;
//   const foodDesc = req.body.FoodDesc;
//   const foodCategories = req.body.FoodCategories;
//   const invoiceFood = new food({
//     FoodName: foodName,
//     FoodPriceOrg: foodPriceOrg,
//     FoodImage: foodImage,
//     FoodDesc: foodDesc,
//     FoodCategories: foodCategories,
//   });

//   invoice.findById();
// };
// () => {
//   customer.findById(req.query.idCustomer).then((user) => {
//     user.CustomerInvoice.push(customerInvoice._id);
//     user
//       .save()
//       .then(() => res.json("Cart Added To User!!!"))
//       .catch((err) => res.status(400).json(`Errror: ${err}`));
//   });
// }
module.exports = {
  getAllInvoices,
  createInvoice,
  addFoodsToInvoice,
  deleteFoodsInInvoice,
  setStatusInvoice,
  updateSumpriceAndSumAmount,
  deleteInvoiceById,
  // getInvoiceStatusFalse,
};
