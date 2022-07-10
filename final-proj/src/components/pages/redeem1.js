import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Button } from "react-bootstrap";

const CardDetails = () => {
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
        <Container>
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
                                <Button variant="primary">Transfer</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardDetails;
