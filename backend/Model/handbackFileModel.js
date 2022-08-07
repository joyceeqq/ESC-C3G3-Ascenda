class handbackObj{
    constructor(transferDate, amount, referenceNumber, outcomeCode)
    {
        this.transferDate = transferDate,
        this.amount = amount,
        this.referenceNumber = referenceNumber,
        this.outcomeCode = outcomeCode
    }

    returnObject()
    {
        return {
            TransferDate: this.transferDate,
            Amount: this.amount,
            ReferenceNumber: this.referenceNumber,
            OutcomeCode: this.outcomeCode
        }
    }
}

module.exports = {handbackObj}