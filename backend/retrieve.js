const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/?retryWrites=true&w=majority';
async function retrieveDocuments(db_name, collection_name)
{
    let db = await MongoClient.connect(url);
    let dbo = db.db(db_name);
    // this will return all the documents in a collection as an array, if you want to retrieve just 1 document, you can specify it in the .find({}) section, you may also want to add it as a parameter to this function
    return await dbo.collection("docs").find({}).toArray();
}

function retrieveValues(docsArr)
{
    Object.keys(docsArr).forEach(function(doc){
        Object.keys(docsArr[doc]).forEach(element => {
            // element is the value you want to read/do things with
            // you can put your code here to write the elements to another variable
        });
    });
    return something;
}
// you can then call the 2 functions above together like so, this makes sure that the Promise returned in the first function is fulfilled before the data is read by the second function
retrieveDocuments("db_name", "collection_name").then(docsArr => {
    retrieveValues(docsArr);
});