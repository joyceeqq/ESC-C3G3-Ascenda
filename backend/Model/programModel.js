const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const myDB = mongoose.connection.useDb('loyaltyPrograms')
const Schema = mongoose.Schema;


let newProgramSchema = new Schema({
    LoyaltyProgramName: String,
    LoyaltyProgramID: String,
    currencyName: String,
    processTime: Number,
    minExAmount: Number,
    exchangeRate: Number,
    memberFormat: String,
    enrollLink: String,
    tcLink: String,
    imageLink: String,
    description: String,
});

module.exports = myDB.model('program', newProgramSchema);