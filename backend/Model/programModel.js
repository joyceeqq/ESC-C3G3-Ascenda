const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const myDB = mongoose.connection.useDb('test_programs')
const Schema = mongoose.Schema;


let newProgramSchema = new Schema({
    LoyaltyProgramName: String,
    LoyaltyProgramID: String,
    currencyName: String,
    processTime: Number,
    enrollLink: String,
    tcLink: String,
    description: String,
});

module.exports = myDB.model('program', newProgramSchema);