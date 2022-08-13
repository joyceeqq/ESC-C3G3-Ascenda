const mongoose = require('mongoose');

const myDB = mongoose.connection.useDb('transactionDocs')
const Schema = mongoose.Schema;

let newTransactionSchema = new Schema({
    LoyaltyProgramID: String,
    MemberID: String,
    MemberName: String,
    TransferDate: Date,
    Amount: Number,
    ReferenceCode: String,
    PartnerCode: String,
    OutcomeCode: String 
});

module.exports = myDB.model('transfer', newTransactionSchema, 'transferReqs');