const express = require("express");
const router = express.Router();
const transferReq = require("./../Model/transactionDetailModel");
const program = require("./../Model/programModel");
const programDet = require("./../Model/programDetailModel");
const transactionDet = require("./../Model/transactionDetailModel");
const {jsonToCSV, createHeader, createFileName} = require("../Functions/generateTransactionCSV");
const {connectToSFTP, putDataToSFTP, getDataFromSFTP, getRecentHandbackFileName} = require("../sftp");

var now = new Date();
var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
 
router.route("/createmember").post((req, res) => {
    const LoyaltyProgramID = req.body.LoyaltyProgramID;
    const MemberID = req.body.MemberID;
    const MemberName = req.body.MemberName;
    const TransferDate = req.body.TransferDate;
    const ReferenceCode = req.body.ReferenceCode;
    const PartnerCode = req.body.PartnerCode;
    const OutcomeCode = req.body.OutcomeCode;
    const Amount = req.body.Amount;
    const newTransferReq = new transferReq({
        LoyaltyProgramID: LoyaltyProgramID,
        MemberID: MemberID,
        MemberName: MemberName,
        TransferDate: TransferDate,
        ReferenceCode: ReferenceCode,
        PartnerCode: PartnerCode,
        OutcomeCode: OutcomeCode,
        Amount: Amount,
    });
    newTransferReq.save();
})

router.route("/createprogram").post((req, res) => {
    const programID = req.body.programID;
    const programName = req.body.programName;
    const currencyName = req.body.currencyName;
    const processTime = req.body.processTime;
    const minExAmount = req.body.minExAmount;
    const exchangeRate = req.body.exchangeRate;
    const memberFormat = req.body.memberFormat;
    const enrollLink = req.body.enrollLink;
    const tcLink = req.body.tcLink;
    const imageLink = req.body.imageLink;
    const description = req.body.description;
    const newProgram = new program({
        LoyaltyProgramID: programID,
        LoyaltyProgramName: programName,
        currencyName: currencyName,
        processTime: processTime,
        minExAmount: minExAmount,
        exchangeRate: exchangeRate,
        memberFormat: memberFormat,
        enrollLink: enrollLink,
        tcLink: tcLink,
        imageLink: imageLink,
        description: description
    });
    newProgram.save();
})

router.route("/admin/redeem").get((req, res) => {
    program.find().then(foundPrograms => res.json(foundPrograms))
})

router.route("/admin/transfers").get((req, res) => {
    transferReq.find().then(foundTransfers => res.json(foundTransfers))
})


router.route("/admin/sendsftp").get((req, res) => {
    transactionDet.find({}, '-_id').lean().then(transDocs => {
        let header = createHeader(transDocs[0]);
        let fileName = "./TransactionCSVs/" + createFileName();
        jsonToCSV(header, transDocs, fileName);

        let remoteName = "/accrual_handback_dropbox/" + createFileName();
        putDataToSFTP(fileName, remoteName);
    });
});

router.route("/admin/pullsftp").get((req, res) => {
    let currentDate = new Date();
    let handbackFileName = getRecentHandbackFileName("PARTNER_CODE_", currentDate);
    let remotePath = "/accrual_handback_dropbox/" + handbackFileName;
    console.log(remotePath);
    let localPath = "./HandbackFiles/" + handbackFileName;
    console.log(localPath);

    getDataFromSFTP(remotePath, localPath);

});

module.exports = router;