const express = require("express");
const router = express.Router();
const member = require("./../Model/membershipModel");
const program = require("./../Model/programModel");
const programDet = require("./../Model/programDetailModel");
const transactionDet = require("./../Model/transactionDetailModel");
const {jsonToCSV, createHeader, createFileName} = require("../Functions/generateTransactionCSV");
const {connectToSFTP, putDataToSFTP} = require("../sftp");
 
router.route("/createmember").post((req, res) => {
    const programID = req.body.programID;
    const memberID = req.body.memberID;
    const memberName = req.body.memberName;
    const transactionDate = req.body.transactionDate;
    const refNumber = req.body.refNumber;
    const amount = req.body.amount;
    const newMember = new member({
        LoyaltyProgramID: programID,
        membershipID: memberID,
        memberName: memberName,
        transactionDate: transactionDate,
        refNumber: refNumber,
        amount: amount,
    });
    newMember.save();
})

router.route("/createprogram").post((req, res) => {
    const programID = req.body.programID;
    const programName = req.body.programName;
    const currencyName = req.body.currencyName;
    const processTime = req.body.processTime;
    const enrollLink = req.body.enrollLink;
    const tcLink = req.body.tcLink;
    const description = req.body.description;
    const newProgram = new program({
        LoyaltyProgramID: programID,
        LoyaltyProgramName: programName,
        currencyName: currencyName,
        processTime: processTime,
        enrollLink: enrollLink,
        tcLink: tcLink,
        description: description
    });
    newProgram.save();
})

router.route("/admin/redeem").get((req, res) => {
    programDet.find().then(foundPrograms => res.json(foundPrograms))
})

router.route("/admin/sendsftp").get((req, res) => {
    transactionDet.find({}, '-_id').lean().then(transDocs => {
        let header = createHeader(transDocs[0]);
        let fileName = "./TransactionCSVs/";
        fileName += createFileName();
        jsonToCSV(header, transDocs, fileName);

        let remoteName = createFileName();
        putDataToSFTP(fileName, remoteName);
    });
});

module.exports = router;