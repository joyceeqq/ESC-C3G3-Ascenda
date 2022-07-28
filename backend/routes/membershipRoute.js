const express = require("express");
const router = express.Router();
const member = require("./../Model/membershipModel");
 
router.route("/create").post((req, res) => {
    const programID = req.body.programID;
    const memberID = req.body.memberID;
    const memberName = req.body.memberName;
    const transactionDate = req.body.transactionDate;
    const refNumber = req.body.refNumber;
    const amount = req.body.amount;
    const newMember = new member({
        LoyaltyprogramID: programID,
        membershipID: memberID,
        memberName: memberName,
        transactionDate: transactionDate,
        refNumber: refNumber,
        amount: amount,
    });
    newMember.save();
})

module.exports = router;