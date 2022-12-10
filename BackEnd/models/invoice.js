const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoceSchema = new Schema({
    SumPrice : {type: Number, required: true},
    SumAmount: {type: Number, required: true},
    DateInvoice: {type: String, required: true},
    Address: {type: String, required: true},
    InvoiceStatus: {type: Boolean},
    InvoiceFood: []

})

const invoice = mongoose.model('invoices',invoceSchema);

module.exports = invoice;