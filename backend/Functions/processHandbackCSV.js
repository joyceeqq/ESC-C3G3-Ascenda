const fs = require('fs')
const transferReq = require("./../Model/transactionDetailModel");
const csvToJson = require('convert-csv-to-json');
const {getRecentHandbackFileName} = require('./../sftp.js')

const readHandbackFileAsJson = (requestedDate) => {
    handbackToReadPath = "./HandbackFiles/" + getRecentHandbackFileName("PARTNER_CODE_", requestedDate);
    console.log(handbackToReadPath)
    let handbackJson = csvToJson.fieldDelimiter(',').getJsonFromCsv(handbackToReadPath);
    return handbackJson;
}   

const updateTransactions = (handbackFileJson) => {
    handbackFileJson.find(transaction => {
        transferReq.findOneAndUpdate({ReferenceCode: transaction.ReferenceCode}, 
            {OutcomeCode: renameOutcomeCode(transaction.OutcomeCode)})
            .then(foundTransfer => console.log(foundTransfer));
    });
}

const renameOutcomeCode = (outcomeCode) => {
    let renamedOutcomeCode = "";
    switch (outcomeCode) 
    {
        case '0000':
            renamedOutcomeCode = "Transaction Success";
            break;    
        case '0001':
            renamedOutcomeCode = "Transaction failed - Member not found";
            break;
        case '0002':
            renamedOutcomeCode = "Transaction failed - Member name mismatch";
            break;
        case '0003':
            renamedOutcomeCode = "Transaction failed - Member account closed";
            break;
        case '0004':
            renamedOutcomeCode = "Transaction failed - Member account suspendeds";
            break;
        case '0005':
            renamedOutcomeCode = "Transaction failed - Member ineligible for accural";
            break;
        case '0099':
            renamedOutcomeCode = "Transaction failed - Please contact support for more info";
            break;
        default:
            renamedOutcomeCode = "Transaction failed - Please contact support for more info";
            break;
    }
    return renamedOutcomeCode;

}

module.exports = {updateTransactions, readHandbackFileAsJson}