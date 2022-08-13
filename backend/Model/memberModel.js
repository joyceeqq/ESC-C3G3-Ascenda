const mongoose = require('mongoose');

const myDB = mongoose.connection.useDb('MemberDb')
const Schema = mongoose.Schema;

let newMemberSchema = new Schema({
    firstName: String,
    lastName: String,
    numberPoints: Number,
    bankID: String,
});

module.exports = myDB.model('member', newMemberSchema, 'members');