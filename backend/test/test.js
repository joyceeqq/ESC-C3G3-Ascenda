const mongoose = require("mongoose");
const transModel = require("../Model/transactionDetailModel.js");
const progModel = require("../Model/programModel.js");

const transData = {
    LoyaltyProgramID: "Barclays",
    MemberID: "1234",
    MemberName: "Gerald Tan",
    TransferDate: new Date(),
    Amount: 700,
    ReferenceCode: "2022081183",
    PartnerCode: "DBSSG",
    OutcomeCode: "Pending" };

const progData = {
    LoyaltyProgramName: "TestProg",
    LoyaltyProgramID: "TestProg",
    currencyName: "TestProg",
    processTime: 23,
    minExAmount: 155,
    exchangeRate: 1,
    memberFormat: "1234",
    enrollLink: "testenrolllink.com",
    tcLink: "testtclink.com",
    imageLink: "testimglink.com",
    description: "This is a test description"
}

describe("transModel Test", () => {
    beforeAll(async() => {
        await mongoose.connect('mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/', { useNewUrlParser: true}, (err) => {
            if (err){
                console.error(err);
                process.exit(1);
            }
        });
    });

    // Test schema
    it("create and save transModel successfully", async() => {
        const validTransModel = new transModel(transData);
        const savedTrans = await validTransModel.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedTrans._id).toBeDefined();
        expect(savedTrans.Amount).toBe(transData.Amount);
        expect(savedTrans.LoyaltyProgramID).toBe(transData.LoyaltyProgramID);
        expect(savedTrans.MemberID).toBe(transData.MemberID);
        expect(savedTrans.TransferDate).toBe(transData.TransferDate);
        expect(savedTrans.ReferenceCode).toBe(transData.ReferenceCode);
        expect(savedTrans.PartnerCode).toBe(transData.PartnerCode);
        expect(savedTrans.OutcomeCode).toBe(transData.OutcomeCode);
    });

    
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert transModel successfully, but the field not defined in schema should be undefined', async () => {
        const transDataWithInvalid = new transModel({
            LoyaltyProgramID: "Barclays",
            MemberID: "1234",
            MemberName: "Gerald Tan",
            TransferDate: new Date(),
            Amount: 700,
            ReferenceCode: "2022081183",
            PartnerCode: "DBSSG",
            OutcomeCode: "Pending",
            IAMINVALID: "Pending"
        });
        const savedTransDataWithInvalid = await transDataWithInvalid.save();
        expect(savedTransDataWithInvalid._id).toBeDefined();
        expect(savedTransDataWithInvalid.IAMINVALID).toBeUndefined();
    });

    // Test Validation is working
    // tell us the errors in on the missing required field

    it('insert data without required field should fail', async () => {
        const transDataWithoutRequired = new transModel({
            LoyaltyProgramID: "Barclays",
            MemberID: "1234",
            MemberName: "Gerald Tan",
            Amount: 700,
            ReferenceCode: "2022081183",
            PartnerCode: "DBSSG",
            OutcomeCode: "Pending"
        });
        let err;
        try {
            const savedtransDataWithoutRequired = await transDataWithoutRequired.save();
            error = savedtransDataWithoutRequired;
        } catch (error){
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.TransferDate).toBeDefined();
    });
})

describe("progModel Test", () => {
    beforeAll(async() => {
        await mongoose.connect('mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/', { useNewUrlParser: true}, (err) => {
            if (err){
                console.error(err);
                process.exit(1);
            }
        });
    });

    // Test schema
    it("create and save progModel sucessfully", async() => {
        const validProgModel = new progModel(progData);
        const savedProg = await validProgModel.save();
        // Object ID should be defined when successfully saved to MongoDB
        expect(savedProg._id).toBeDefined();
        expect(savedProg.LoyaltyProgramID).toBe(progData.LoyaltyProgramID);
        expect(savedProg.LoyaltyProgramName).toBe(progData.LoyaltyProgramName);
        expect(savedProg.currencyName).toBe(progData.currencyName);
        expect(savedProg.processTime).toBe(progData.processTime);
        expect(savedProg.minExAmount).toBe(progData.minExAmount);
        expect(savedProg.exchangeRate).toBe(progData.exchangeRate);
        expect(savedProg.memberFormat).toBe(progData.memberFormat);
        expect(savedProg.enrollLink).toBe(progData.enrollLink);
        expect(savedProg.tcLink).toBe(progData.tcLink);
        expect(savedProg.imageLink).toBe(progData.imageLink);
        expect(savedProg.description).toBe(progData.description);
    });

    // Test for validation
    it("insert progData successfully, but the field not defined in schema should not be defined", async() => {
        const progDataWithInvalid = new progModel({
            LoyaltyProgramName: "TestProg",
            LoyaltyProgramID: "TestProg",
            currencyName: "TestProg",
            processTime: 23,
            minExAmount: 155,
            exchangeRate: 1,
            memberFormat: "1234",
            enrollLink: "testenrolllink.com",
            tcLink: "testtclink.com",
            imageLink: "testimglink.com",
            description: "This is a test description",
            IAMINVALID: "This is invalid"
        });
        const savedProgWithInvalid = await progDataWithInvalid.save();
        expect(savedProgWithInvalid._id).toBeDefined();
        expect(savedProgWithInvalid.IAMINVALID).toBeUndefined();
    });

    it("insert data without required field should fail", async () => {
        const progDataWithoutRequired = new progModel({
            LoyaltyProgramName: "TestProg",
            LoyaltyProgramID: "TestProg",
            currencyName: "TestProg",
            minExAmount: 155,
            exchangeRate: 1,
            memberFormat: "1234",
            enrollLink: "testenrolllink.com",
            tcLink: "testtclink.com",
            imageLink: "testimglink.com",
            description: "This is a test description"
        });
        let err;
        try {
            const savedProgDataWithoutRequired = await progDataWithoutRequired.save();
            error = savedProgDataWithoutRequired;
        } catch (error){
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.processTime).toBeDefined();
    })
})

