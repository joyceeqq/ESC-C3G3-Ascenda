import React, {useState } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";

// core components
import Header from "components/Headers/Header.js";
import ProgramModalContent from 'components/Modals/membershipDets';

// // connect to MongoClient
// import cardValues from "./../../../../backend/server1"

export const userName = "Jessica Jones";
export let numberPoints = 1500;
export function setNumberPoints(value){
  numberPoints -= value;
}

// let cardValues = [];

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/?retryWrites=true&w=majority';

// async function retrieveDocuments(db_name, collection_name)
// {
//     let db = await MongoClient.connect(url);
//     let dbo = db.db(db_name);
//     // this will return all the documents in a collection as an array, if you want to retrieve just 1 document, you can specify it in the .find({}) section, you may also want to add it as a parameter to this function
//     return await dbo.collection("docs").find({}).toArray();
// }

// function retrieveValues(docsArr)
// {
//     Object.keys(docsArr).forEach(function(doc){
//         cardValues.push(doc)
//         Object.keys(docsArr[doc]).forEach(element => {
//             // element is the value you want to read/do things with
//             // you can put your code here to write the elements to another variable
//         });
//     });
// }
// // you can then call the 2 functions above together like so, this makes sure that the Promise returned in the first function is fulfilled before the data is read by the second function
// retrieveDocuments("loyaltyPrograms", "details").then(docsArr => {
//     retrieveValues(docsArr);
// });

export const cardInfo = [
  {
    image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
    companyName: "Barclays",
    exchangeRate: "1400  points to 400  miles",
    exchangeTime:"4  to  6  hours",
    minAmount:"1400 points",
  },
  {
    image: "https://images.prismic.io/ascendaloyaltycorp/66e6be5f-3b81-42ea-982d-808685e99fed_Ascenda_Clients_SingaporeAirlines.png?auto=compress,format",
    companyName: "Singapore Airlines KrisFlyer",
    exchangeRate: "1400  points to 400  miles",
    exchangeTime:"4  to  6  hours",
    minAmount:"1400 points",
  },
  {
    image: "https://images.prismic.io/ascendaloyaltycorp/8e6b6276-1c52-4834-a468-ee22e01980c8_Ascenda_Clients_Qantas.png?auto=compress,format",
    companyName: "Qantas",
    exchangeRate: "1400  points to 400  miles",
    exchangeTime:"4  to  6  hours",
    minAmount:"1400 points",
  },
  {
    image: "https://images.prismic.io/ascendaloyaltycorp/80adf324-2fac-4c63-bf75-7d848ddf6738_Ascenda_Clients_MarriottBonvoy.png?auto=compress,format",
    companyName: "Marriott Bonvoy",
    exchangeRate: "1400  points to 400  miles",
    exchangeTime:"4  to  6  hours",
    minAmount:"1400 points",
  },
  {
    image: "https://images.prismic.io/ascendaloyaltycorp/1a2ee1c1-be35-48e9-8c79-8bab7a89351f_2.png?auto=compress,format",
    companyName: "Finnair Plus",
    exchangeRate: "1400  points to 400  miles",
    exchangeTime:"4  to  6  hours",
    minAmount:"1400 points",
  },
  {
    image: "https://images.prismic.io/ascendaloyaltycorp/3a430f69-57ab-445c-bee1-3e1612ead7ec_Expedia-Logo.wine.png?auto=compress,format",
    companyName: "Expedia",
    exchangeRate: "1400  points to 400  miles",
    exchangeTime:"4  to  6  hours",
    minAmount:"1400 points",
  },
];

const CardDetails = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [chosenCompany, setChosenCompany] = useState("");
  
    return (
      <>
      
      <Header />
      <br></br>
        <div>
            <Row>
                {cardInfo.map((card, k) => (
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