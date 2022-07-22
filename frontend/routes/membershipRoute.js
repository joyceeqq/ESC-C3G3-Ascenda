const express = require("express");
const router = express.Router();
const member = require("./../src/Model/membershipModel");
 
router.route("/create").post((req, res) => {
    const programID = req.body.programID;
    const memberID = req.body.memberID;
    const memberName = req.body.memberName;
    const transactionDate = req.body.transactionDate;
    const refNumber = req.body.refNumber;
    const amount = req.body.amount;
    const newMember = new member({
        programID,
        memberID,
        memberName,
        transactionDate,
        refNumber,
        amount
    });
    newMember.save();
})

module.exports = router;