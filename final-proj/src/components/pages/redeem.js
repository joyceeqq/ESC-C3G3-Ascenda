import React, {useState } from 'react'
import { Card, Row, Col, Container, Button, Modal, Form, ModalDialog } from "react-bootstrap";
import Header from "./../../components/Headers/Header.js";
import ModalContent from '../Modals/membershipDets.js';
const CardDetails = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cardInfo = [
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
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
                                <Button variant="primary" onClick={handleShow}>Transfer</Button>
                                <br></br>
                            </Card.Body>
                            <br></br>
                        </Card>
                        <br></br>
                    </Col>
                    
                ))}
            </Row>
            {/* {show ? <ModalContent/> : null} */}
            <ModalContent show={show} close={handleClose} />
        </div>
        
      </>
    )
}

export default CardDetails;