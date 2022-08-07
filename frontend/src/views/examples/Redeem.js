import React, { useState } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";
// react component that copies the given text inside your clipboard

// core components
import Header from "components/Headers/Header.js";  
import ProgramModalContent from 'components/Modals/membershipDets';

export const userName = "Jessica Jones";
export const numberPoints = 500;
var docsArr=[];
var arr=[];


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/?retryWrites=true&w=majority';
async function retrieveDocuments(db_name, collection_name)
{
    let db = await MongoClient.connect(url);
    let dbo = db.db(db_name);
    return await dbo.collection("details").find({}).toArray();
}

function retrieveValues(docsArr)
{
    Object.keys(docsArr).forEach(function(doc){
        Object.keys(docsArr[doc]).forEach(element => {
            arr.push(element);

        });
    });
    return arr;
}
// you can then call the 2 functions above together like so, this makes sure that the Promise returned in the first function 
//is fulfilled before the data is read by the second function



const CardDetails = () => {

  retrieveDocuments("expenses", "details").then(docsArr => {
    retrieveValues(docsArr);
});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [chosenCompany, setChosenCompany] = useState("");
  
    return (
      <>
      
      <Header />
      <br></br>
        <div>
            <Row>
                {docsArr.map((card, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.companyName}</Card.Title>
                                <Card.Text>Exchange Rate: <br></br>{card.exchangeRate}</Card.Text>
                                <Card.Text>Estimated Transfer Time: <br></br>{card.exchangeTime}</Card.Text>
                                <Card.Text>Minimum Exchange Amount: <br></br> {card.minAmount}</Card.Text>
                                <Button id={card.companyName.trim()} variant="primary" onClick={() => {
                                  setChosenCompany(card.companyName);
                                  setShow(true)
                                }}>Transfer</Button>
                                <br></br>
                            </Card.Body>
                            <br></br>
                        </Card>
                        <br></br>
                    </Col>
                    
                ))}
            </Row>
            <ProgramModalContent show={show} close={handleClose} userName={userName} chosenCompany={chosenCompany} numberPoints={numberPoints}/>
        </div>
        
      </>
    )
}

export default CardDetails;