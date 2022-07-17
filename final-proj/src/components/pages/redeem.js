import React, {useState } from 'react'
import { Card, Row, Col, Container, Button, Modal, Form, ModalDialog } from "react-bootstrap";
import Header from "./../../components/Headers/Header.js";
const CardDetails = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cardCompanyName, setCardCompanyName] = useState("Barclays");

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cardCompanyName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Membership#</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Membership#</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Membership
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

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
                                <Card.Text>Exchange Rate: {card.exchangeRate}</Card.Text>
                                <Card.Text>Estimated Transfer Time: {card.exchangeTime}</Card.Text>
                                <Card.Text>Minimum Exchange Amount: {card.minAmount}</Card.Text>
                                <Button variant="primary" onClick={handleShow}>Transfer</Button>
                                <br></br>
                            </Card.Body>
                            <br></br>
                        </Card>
                        <br></br>
                    </Col>
                    
                ))}
            </Row>
            {show ? <ModalContent/> : null}
        </div>
        
      </>
    )
}

export default CardDetails;