const fs = require('fs');
const {getDataFromSFTP, checkHandbackExists, getRecentHandbackFileName} = require('./../sftp.js')

const pollForHandbackUpdate = (pollInterval) => {
    let remotePath = "/accrual_handback_dropbox/" + getRecentHandbackFileName("PARTNER_CODE_", new Date());
    let handbackExists = checkHandbackExists(remotePath);
    handbackExists.then(function(result) {
        if (result)
        {
            console.log("handback exists");
            let remotePath = "/accrual_handback_dropbox/" + getRecentHandbackFileName("PARTNER_CODE_", new Date());
            let localDstPath = fs.createWriteStream("./HandbackFiles/" + getRecentHandbackFileName("PARTNER_CODE_", new Date()));
            getDataFromSFTP(remotePath, localDstPath);
            clearInterval(pollInterval);
        }
        else
        {
            console.log("handback does not exist");
        }
    })

}


module.exports = {pollForHandbackUpdate}