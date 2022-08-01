const mongoose = require('mongoose');

const myDB = mongoose.connection.useDb('loyaltyPrograms')
const Schema = mongoose.Schema;


let newProgramDetSchema = new Schema({
    image: String,
    companyName: String,
    exchangeRate: String,
    exchangeTime: String,
    minAmount: Number,

});

module.exports = myDB.model('detail', newProgramDetSchema);