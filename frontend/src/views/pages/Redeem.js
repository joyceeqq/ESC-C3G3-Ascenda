import React, {useState, useEffect } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";

// core components
import Header from "components/Headers/Header.js";
import ProgramModalContent from 'components/Modals/membershipDets';

export const userName = "Gerard Tan";
export let numberPoints = 500;
export function setNumberPoints(value){
  numberPoints -= value;
}

const CardDetails = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [programs, setPrograms] = useState(null)
  const [memberFormat, setMemberFormat] = useState("")

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch('/admin/redeem')
      const json  = await response.json()
      console.log(json)

      if (response.ok){
        setPrograms(json)
      }
    }
    fetchPrograms()
  }, [])

  const [chosenCompany, setChosenCompany] = useState("");
  
    return (
      <>
      
      <Header />
      <br></br>
        <div>
            <Row>
                {programs && programs.map((program, k) => (
                    <Col key={k} xs={10} md={3} lg={5}> 
                        <Card >
                            <Card.Img src={program.image} />
                            <Card.Body>
                                <Card.Title>{program.companyName}</Card.Title>
                                <Card.Text>Exchange Rate: <br></br>{program.exchangeRate}</Card.Text>
                                <Card.Text>Estimated Transfer Time: <br></br>{program.exchangeTime}</Card.Text>
                                <Card.Text>Minimum Exchange Amount: <br></br> {program.minAmount}</Card.Text>
                                <Button id={program.companyName.trim()} variant="primary" onClick={() => {
                                  setChosenCompany(program.companyName);
                                  setShow(true);
                                  setMemberFormat(program.format)
                                  }}>Transfer</Button>
                                <br></br>
                            </Card.Body>
                            <br></br>
                        </Card>
                        <br></br>
                    </Col>
                    
                ))}
            </Row>
            <ProgramModalContent show={show} close={handleClose} userName={userName} chosenCompany={chosenCompany} numberPoints={numberPoints} memberFormat={memberFormat}/>
        </div>
        
      </>
    )
}

export default CardDetails;