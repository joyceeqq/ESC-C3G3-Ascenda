const mongoose = require("mongoose");
const transModel = require("../Model/transactionDetailModel.js");


const transData = {
    LoyaltyProgramID: "Barclays",
    MemberID: "1234",
    MemberName: "Gerald Tan",
    TransferDate: new Date(),
    Amount: 700,
    ReferenceCode: "2022081183",
    PartnerCode: "DBSSG",
    OutcomeCode: "Pending" };

describe("transModel Test", () => {
    beforeAll(async() => {
        await mongoose.connect('mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/', { useNewUrlParser: true}, (err) => {
            if (err){
                console.error(err);
                process.exit(1);
            }
        });
    });

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

    // Test Schema is working
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

