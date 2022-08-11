let {checkHandbackExists, getRecentHandbackFileName} = require('./../sftp.js');

let remotePath = "/accrual_handback_dropbox/" + getRecentHandbackFileName("PARTNER_CODE_", new Date());

let check = checkHandbackExists(remotePath);
check.then(function(result){
    console.log(result);
});


