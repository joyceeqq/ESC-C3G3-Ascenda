const fs = require('fs');
const {putDataToSFTP, getDataFromSFTP, checkHandbackExists, getRecentHandbackFileName} = require('./../sftp.js')
const transactionDet = require("./../Model/transactionDetailModel");
const {jsonToCSV, createHeader, createFileName} = require("../Functions/generateTransactionCSV");
const handbackPollingInterval = 5000; // Polling interval for checking handback updates in ms
const accrualPollingInterval = 5000; // Polling interval for checking if push timing is met in ms

const pushSchedule = (pushHours, pushMinutes, pushSeconds, pushMiliseconds) => 
{
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDate = new Date().getDate();
    let desiredPushSchedule = new Date(currentYear, currentMonth, currentDate, pushHours, pushMinutes, pushSeconds, pushMiliseconds);

    return desiredPushSchedule;
}

const pollForHandbackUpdate = () =>
{
        let remotePath = "/accrual_handback_dropbox/" + getRecentHandbackFileName("PARTNER_CODE_", new Date());
        let handbackExists = checkHandbackExists(remotePath);
        handbackExists.then(function(result) {
            if (result)
            {
                console.log("handback exists");
                let remotePath = "/accrual_handback_dropbox/" + getRecentHandbackFileName("PARTNER_CODE_", new Date());
                let localDstPath = fs.createWriteStream("./HandbackFiles/" + getRecentHandbackFileName("PARTNER_CODE_", new Date()));
                getDataFromSFTP(remotePath, localDstPath);
            }
            else
            {
                console.log("handback does not exist");
            }
        });
}

const pollCompilePushAccrual = (pushSchedule) =>
{ 
        let currentDateTime = new Date();
        if (currentDateTime.getTime() >= pushSchedule.getTime())
        {
            console.log("Time to push");
            transactionDet.find({}, '-_id').lean().then(transDocs => {
                let header = createHeader(transDocs[0]);
                let fileName = "./TransactionCSVs/" + createFileName();
                jsonToCSV(header, transDocs, fileName);
    
                let remoteName = "/accrual_handback_dropbox/" + createFileName();
                putDataToSFTP(fileName, remoteName);
            });
        }
        else
        {
            console.log("Not ready to push");
        }

}

const handbackRetrieved = () =>
{
    let localHandbackPath = "./HandbackFiles/" + getRecentHandbackFileName("PARTNER_CODE_", new Date());
    let result = fs.existsSync(localHandbackPath);
    console.log(result);
    return result;
}


module.exports = {pushSchedule, pollCompilePushAccrual, pollForHandbackUpdate, handbackRetrieved}