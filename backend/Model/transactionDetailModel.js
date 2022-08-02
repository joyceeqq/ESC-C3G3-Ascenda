const mongoose = require('mongoose');

const myDB = mongoose.connection.useDb('transactionDocs')
const Schema = mongoose.Schema;

let newTransactionSchema = new Schema({
    test: String
});

module.exports = myDB.model('docs', newTransactionSchema);