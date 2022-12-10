// import library
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// set up for app
const app = express();
const port = 8000;
require("dotenv").config();

//Them Route
const authenticate = require("./RouteData/AuthenticateRoutes");
const food = require("./RouteData/FoodRoutes");
const address = require("./RouteData/AddressRoutes");
const category = require("./RouteData/CategoryRoutes");
const invoice = require("./RouteData/InvoiceRoutes");

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoAtles connection successfully!!");
});

app.use("/authenticate", authenticate);
app.use("/food", food);
app.use("/address", address);
app.use("/category", category);
app.use("/invoice", invoice);
app.listen(port, () => {
  console.log(`App listening on port : ${port}`);
});
