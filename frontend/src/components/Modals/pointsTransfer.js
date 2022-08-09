import { Button, Modal, Form } from "react-bootstrap";
import React, {useState, useEffect } from 'react';
import axios from "axios";
import { numberPoints, setNumberPoints, partnerCode } from "views/pages/Redeem";
import PointsConfirm from "./Confirmation";

const PointsModalContent = (props) => {

  const userName = props.userName;
  const chosenCompany = props.chosenCompany;
  const minExAmount = props.minExAmount;
  const membershipID = props.membershipID;
  const [pointsToTransfer, setPointsToTransfer] = useState(0);

  //state of confirmation modal
  const [pointsConfirmShow, setPointsConfirmShow] = useState(false);
  const handlePointsClose = () => setPointsConfirmShow(false);
  const [confirmRefNumber, setConfirmRefNumber] = useState("");

  //number of transactions today
  const [numTransfers, setNumTransfers] = useState(0);

  useEffect(() => {
    const fetchTransfers = async () => {
      const response = await fetch('/admin/transfers')
      const json  = await response.json()
      console.log("programs today")
      console.log(json)
      
    }
    fetchTransfers()
  }, [])

  function HandleSubmit(event){
    event.preventDefault(); // prevent page refresh 

    

    for (let j = 0; j < pointsToTransfer.length; j++){
      if(isNaN(pointsToTransfer[j])){
        alert("Please only key in a whole number!")
        return;
      }
    }
    if (parseInt(pointsToTransfer)> numberPoints){
      alert("You have insufficient number of points!");
      return;
    }
    if (parseInt(pointsToTransfer) < minExAmount){
      alert("Please transfer more than the minimum exchange amount: " + minExAmount);
      return;
    }
    setNumberPoints(pointsToTransfer);

    

    const refNumber = new Date().toISOString()
    setConfirmRefNumber(refNumber)

    // access input values here
    const newTransferReq= {
      LoyaltyProgramID: chosenCompany,
      MemberID: membershipID,
      MemberName: userName,
      TransferDate: new Date(),
      ReferenceCode: refNumber,
      PartnerCode: partnerCode,
      OutcomeCode: "Pending",
      Amount: pointsToTransfer
    }

    axios.post('http://localhost:3001/createmember', newTransferReq);
    // clear all input values in the form
    setPointsToTransfer(0);
    props.clearMemIDFields();
    props.close();
    setPointsConfirmShow(true);
  };

    return (
      <div>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Your Miles</Modal.Title><br></br>
        </Modal.Header>
        <Modal.Body>
          <p>Transfer your miles to your <b>{chosenCompany}</b> account:<b>{membershipID}</b></p>
            <p>Available points: {numberPoints}</p>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Total Rewards to Transfer</Form.Label>
                <Form.Control
                    type="text"
                    autoFocus
                    value={pointsToTransfer}
                    onChange={event=> setPointsToTransfer(event.target.value)}
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={HandleSubmit}>
            Complete Transfer
          </Button>
        </Modal.Footer>
      </Modal>
      <PointsConfirm show={pointsConfirmShow} close={handlePointsClose}  confirmRefNumber={confirmRefNumber}/>
     </div>
    )
  }

  export default PointsModalContent;