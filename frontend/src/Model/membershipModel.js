const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newMemberSchema = new Schema({
    LoyaltyprogramID: {
        type: String
    },
    memberID: {
        type: String
    },
    membername: {
        type: String
    },
    transactionDate: {
        type: Date
    },
    refNumber:{
        type: Number
    },
    amount: {
        type: Number
    }
});

module.exports = mongoose.model('member', newMemberSchema);