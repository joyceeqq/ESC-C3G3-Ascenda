const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const myDB = mongoose.connection.useDb('membershipIds')
const Schema = mongoose.Schema;

let newMemberSchema = new Schema({
    LoyaltyProgramID: String,
    membershipID: String,
    memberName: String,
    transactionDate: Date,
    refNumber: Number,
    amount: Number,
    
});

module.exports = myDB.model('member', newMemberSchema);