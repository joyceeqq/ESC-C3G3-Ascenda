const { MongoClient } = require("mongodb");

const memberSchema = {
    user: String,
    membershipID: String,
    confirmedMemID: String
}
const member = MongoClient.model