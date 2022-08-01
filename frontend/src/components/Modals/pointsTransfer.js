import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';
import axios from "axios";
import { numberPoints, setNumberPoints } from "views/pages/Redeem";

const PointsModalContent = (props) => {
    const userName = props.userName;
    const chosenCompany = props.chosenCompany;
    const membershipID = props.membershipID;
    const [pointsToTransfer, setPointsToTransfer] = useState(0);

    const handleSubmit = event => {
      setNumberPoints(pointsToTransfer);
      
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
  
      axios.post('http://localhost:3001/createmember', newMember);
      // clear all input values in the form
      setPointsToTransfer(0);
      props.clearMemIDFields();
      props.close();
    };

    return (
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Your Miles</Modal.Title><br></br>
          <p>Transfer your miles to your <b>{chosenCompany}</b> account:</p>
          <p><em>{membershipID}</em></p>
        </Modal.Header>
        <Modal.Body>
            <p>Available points: {numberPoints}</p>
            <p>Membership ID: {membershipID}</p>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Total Rewards to Transfer</Form.Label>
                <Form.Control
                    type="number"
                    autoFocus
                    value={pointsToTransfer}
                    onChange={event=> setPointsToTransfer(event.target.value)}
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Complete Transfer
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  export default PointsModalContent;