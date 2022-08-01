const express = require("express");
const router = express.Router();
const program = require("./../Model/programModel");
 
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

module.exports = router;