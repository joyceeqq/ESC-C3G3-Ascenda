import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';

import { numberPoints } from "views/pages/Redeem";

const PointsModalContent = (props) => {
    const chosenCompany = props.chosenCompany;
    const membershipID = props.membershipID;
    const [pointsToTransfer, setPointsToTransfer] = useState(0);

    const handleSubmit = event => {
      console.log('handleSubmit ran');
      event.preventDefault(); // prevent page refresh
  
      // access input values here
      
      // clear all input values in the form
      setPointsToTransfer(0);
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