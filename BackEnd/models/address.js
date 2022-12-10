const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    Address: {type:String, required: true} 
})

const address = mongoose.model('addresses', addressSchema);

module.exports = address;