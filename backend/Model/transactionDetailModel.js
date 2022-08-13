const mongoose = require('mongoose');

const myDB = mongoose.connection.useDb('transactionDocs')
const Schema = mongoose.Schema;

let newTransactionSchema = new Schema({
    LoyaltyProgramID: {type: String, required: true},
    MemberID: {type: String, required: true},
    MemberName: {type: String, required: true},
    TransferDate: {type: Date, required: true},
    Amount: {type: Number, required: true},
    ReferenceCode: {type: String, required: true},
    PartnerCode: {type: String, required: true},
    OutcomeCode: {type: String, required: true}
});

module.exports = myDB.model('transfer', newTransactionSchema, 'transferReqs');