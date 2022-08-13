import React, {useState, useEffect } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";

// core components
import Header from "components/Headers/Header.js";
import ProgramModalContent from 'components/Modals/membershipDets';
import ProgramDetailsModal from 'components/Modals/programDetailsModal';

export const partnerCode = "DBSSG";

const CardDetails = () => {

  // constants for the transfer modal
  const [programShow, setProgramShow] = useState(false);
  const handleProgramClose = () => setProgramShow(false);

  //constants for the program details modal
  const [programDetsShow, setProgramDetsShow] = useState(false)
  const handleDetailsClose = () => setProgramDetsShow(false)
  const [companyDets, setCompanyDets] = useState({
    LoyaltyProgramName: String,
    LoyaltyProgramID: String,
    currencyName: String,
    processTime: Number,
    minExAmount: Number,
    exchangeRate: Number,
    memberFormat: String,
    enrollLink: String,
    tcLink: String,
    imageLink: String,
    description: String,
  })

  // getting cardinfo from backend 
  const [programs, setPrograms] = useState(null);
  const [memberFormat, setMemberFormat] = useState("");
  const [minExAmount, setMinExAmount] = useState(0);

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

  // getting user info from backend
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberPoints, setNumberPoints] = useState(0);

  useEffect(() => {
    const fetchMember = async () => {
      const response = await fetch('/admin/memberdetails');
      const json  = await response.json();
      console.log(json);
      if (response.ok){
        setFirstName(json[0].firstName);
        setLastName(json[0].lastName);
        setNumberPoints(json[0].numberPoints);
      }
    }
    fetchMember()
  }, [])
  let userName = firstName+" "+lastName;

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
                            <Card.Img src={program.imageLink} />
                            <Card.Body>
                                <Card.Title>{program.LoyaltyProgramName}</Card.Title>
                                <Card.Text>Exchange Rate: <br></br>{program.exchangeRate}</Card.Text>
                                <Card.Text>Estimated Transfer Time: <br></br>{program.processTime} hours</Card.Text>
                                <Card.Text>Minimum Exchange Amount: <br></br> {program.minExAmount}</Card.Text>
                                <Button id={program.LoyaltyProgramName.trim()} variant="primary" onClick={() => {
                                  setMinExAmount(program.minExAmount);
                                  setChosenCompany(program.LoyaltyProgramName);
                                  setProgramShow(true);
                                  setMemberFormat(program.memberFormat)
                                  }}>Transfer</Button>
                                <Button id="details" variant="primary" onClick={() => {
                                  setCompanyDets({LoyaltyProgramName:programs[k].LoyaltyProgramName, 
                                                  LoyaltyProgramID:programs[k].LoyaltyProgramID,
                                                  currencyName:programs[k].currencyName,
                                                  processTime:programs[k].processTime, 
                                                  minExAmount:programs[k].minExAmount,
                                                  enrollLink:programs[k].enrollLink,
                                                  tcLink:programs[k].tcLink,
                                                  description:programs[k].description,
                                                  })
                                  setProgramDetsShow(true);
                                }}>Details</Button>
                                <br></br>
                            </Card.Body>
                            <br></br>
                        </Card>
                        <br></br>
                    </Col>
                    
                ))}
            </Row>
            <ProgramModalContent show={programShow} close={handleProgramClose} userName={userName} chosenCompany={chosenCompany} numberPoints={numberPoints} memberFormat={memberFormat} minExAmount={minExAmount}/>
            <ProgramDetailsModal show={programDetsShow} close={handleDetailsClose} companyDets={companyDets}/>
        </div>
        
      </>
    )
}

export default CardDetails;