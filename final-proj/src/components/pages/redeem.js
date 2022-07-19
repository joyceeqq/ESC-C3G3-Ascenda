import React, {useState } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";
import Header from "./../../components/Headers/Header.js";
import ModalContent from '../Modals/membershipDets.js';

const CardDetails = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const userName = "Gerard Tan";
  const numberPoints = 10000;
  const [chosenCompany, setChosenCompany] = useState("");


  const cardInfo = [
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
                                <Button variant="primary" onClick={() => {
                                  setChosenCompany(card.companyName);
                                  setShow(true)}}>Transfer</Button>
                                <br></br>
                            </Card.Body>
                            <br></br>
                        </Card>
                        <br></br>
                    </Col>
                    
                ))}
            </Row>
            <ModalContent show={show} close={handleClose} userName={userName} chosenCompany={chosenCompany} numberPoints={numberPoints}/>
        </div>
        
      </>
    )
}

export default CardDetails;