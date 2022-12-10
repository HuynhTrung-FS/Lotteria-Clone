const express = require("express");
const router = express.Router();
const invoice = require("../controllers/InvoiceController");

//get all invoices
router.get("/get", invoice.getAllInvoices);

//get invoice has status false
// router.get("/getinvoicestatusfalse",invoice.getInvoiceStatusFalse);

//add food to invoice and create invoice after that add invoice to customer
router.post("/createinvoice",invoice.createInvoice);

//add many foods to invoice which was created
router.post("/addfoodstoinvoice",invoice.addFoodsToInvoice);

//Delete all foods by id from invoice
router.delete("/deletefoodsfrominvoice",invoice.deleteFoodsInInvoice);

//Set status invoice has been payed
router.put("/setstatusinvoice",invoice.setStatusInvoice);

//Get status invoice

//update sum price and sum amount
router.put("/updatesum",invoice.updateSumpriceAndSumAmount);

//Delete Invoice by id
router.delete("/deleteinvoicebyid",invoice.deleteInvoiceById);


module.exports = router;
