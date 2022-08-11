const fs = require('fs')
const transferReq = require("./../Model/transactionDetailModel");
const csvToJson = require('convert-csv-to-json');
const {getRecentHandbackFileName} = require('./../sftp.js')

const readHandbackFileAsJson = (requestedDate) => {
    handbackToReadPath = "./backend/HandbackFiles/" + getRecentHandbackFileName("PARTNER_CODE_", requestedDate);
    console.log(handbackToReadPath)
    let handbackJson = csvToJson.fieldDelimiter(',').getJsonFromCsv(handbackToReadPath);
    return handbackJson;
}   

const updateTransactions = (handbackFileJson) => {
    handbackFileJson.find(transaction => {
        console.log(transaction.ReferenceCode);
        transferReq.find({ReferenceCode: transaction.ReferenceCode}).then(foundTransfer => console.log(foundTransfer));
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
            renameOutcomeCode = "Transaction failed - Member not found";
            break;
        case '0002':
            renameOutcomeCode = "Transaction failed - Member name mismatch";
            break;
        case '0003':
            renameOutcomeCode = "Transaction failed - Member account closed";
            break;
        case '0004':
            renameOutcomeCode = "Transaction failed - Member account suspendeds";
            break;
        case '0005':
            renameOutcomeCode = "Transaction failed - Member ineligible for accural";
            break;
        case '0099':
            renameOutcomeCode = "Transaction failed - Please contact support for more info";
            break;
        default:
            renameOutcomeCode = "Transaction failed - Please contact support for more info";
            break;
    }
    return renamedOutcomeCode;

}

let testJson = readHandbackFileAsJson(new Date());  
updateTransactions(testJson); 