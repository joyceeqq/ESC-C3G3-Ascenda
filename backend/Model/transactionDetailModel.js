const mongoose = require('mongoose');

const myDB = mongoose.connection.useDb('transactionDocs')
const Schema = mongoose.Schema;

let newTransactionSchema = new Schema({
    LoyaltyProgramID: String,
    MemberID: String,
    MemberName: String,
    TransferDate: String,
    Amount: Number,
    ReferenceCode: Number,
    PartnerCode: String,
    OutcomeCode: String  

});

module.exports = myDB.model('docs', newTransactionSchema);