import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';
import axios from "axios";
import { numberPoints, setNumberPoints } from "views/pages/Redeem";

const PointsConfirm= (props) => {
    const userName = props.userName;
    const chosenCompany = props.chosenCompany;
    const membershipID = props.membershipID;
    const [pointsToTransfer, setPointsToTransfer] = useState(0);
    //const confirmationCode = "FTU73754";
    var phoneToken = require('generate-sms-verification-code');
 
    var generatedToken = phoneToken(8, {type: 'number'});
    const [pointsshow, setPointsShow] = useState(false);
    const handlePointsClose = () => {
      setPointsShow(false);
      props.close(); 
    }
    const handleSubmit = event => {
      
      event.preventDefault(); // prevent page refresh
  
      // access input values here
      const newMember= {
        programID: chosenCompany,
        memberID: membershipID,
        memberName: userName,
        transactionDate: new Date(),
        refNumber: 1,
        amount: pointsToTransfer
      }
     
  
      axios.post('http://localhost:3001/create', newMember);
      // clear all input values in the form
      setPointsToTransfer(0);
      props.clearMemIDFields();
      props.close();
    };

    return (
      <div>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title><h1>Success!</h1></Modal.Title><br></br>
          

        </Modal.Header>
        <Modal.Body>
            <p>Confirmation Code: <b>{generatedToken}</b></p>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handlePointsClose}>
            Done
          </Button>
        </Modal.Footer>
        
      </Modal>
     

      </div>
    )
  }

  export default PointsConfirm;