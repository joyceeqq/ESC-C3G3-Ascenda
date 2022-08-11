const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const myDB = mongoose.connection.useDb('loyaltyPrograms')
const Schema = mongoose.Schema;


let newProgramSchema = new Schema({
    LoyaltyProgramName: {type: String, required: true},
    LoyaltyProgramID: {type: String, required: true},
    currencyName: {type: String, required: true},
    processTime: {type: Number, required: true},
    minExAmount: {type: Number, required: true},
    exchangeRate: {type: Number, required: true},
    memberFormat: {type: String, required: true},
    enrollLink: {type: String, required: true},
    tcLink: {type: String, required: true},
    imageLink: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = myDB.model('program', newProgramSchema);