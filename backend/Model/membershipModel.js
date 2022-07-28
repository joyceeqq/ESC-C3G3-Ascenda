const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newMemberSchema = new Schema({
    LoyaltyprogramID: String,
    membershipID: String,
    memberName: String,
    transactionDate: Date,
    refNumber: Number,
    amount: Number,
});

module.exports = mongoose.model('member', newMemberSchema);