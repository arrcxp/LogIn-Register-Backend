const mongoose = require('mongoose');

const InformationSchema = mongoose.Schema({
    fname:  { type: String, required: true },
    lname:  { type: String, required: true },
    bday:   { type: Number, required: true },
    bmonth: { type: String, required: true },
    byear: { type: Number, required: true },
    tel:   { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    reg_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Information', InformationSchema);