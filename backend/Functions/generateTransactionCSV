const jsonToCSV = async (transHeader, transDocs, fileName) => {
    
    const cw = require('csv-writer');

    let createCSVWriter = cw.createObjectCsvWriter;

    const csvWriter = createCSVWriter({
        path: fileName,
        header: transHeader
    });

    csvWriter.writeRecords(transDocs).then(() => {
        console.log("Data writtern to CSV");
    }); 
}

const createHeader = (docsArr) => {
    let header = new Array();
    console.log(docsArr);
    Object.keys(docsArr).forEach(element => {
        console.log(element);
        header.push({id: element, title: element.toUpperCase()})
    });
    return header;
}

const createFileName = () => {
    let fileName = "";
    let currentDate = new Date().toISOString().substring(0,10);

    fileName += "PARTNER_CODE_" + currentDate + ".csv";

    fileName = fileName.replaceAll('-', '_');

    return fileName;
}

module.exports = {jsonToCSV, createHeader, createFileName}