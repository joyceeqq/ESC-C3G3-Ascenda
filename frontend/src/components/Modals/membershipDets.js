import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';
import PointsModalContent from "./pointsTransfer";


const ProgramModalContent = (props) => {

  const memberFormat = props.memberFormat;

  const [pointsshow, setPointsShow] = useState(false);
  const handlePointsClose = () => setPointsShow(false);
    
  const chosenCompany = props.chosenCompany;
  const userName = props.userName;
  const numberPoints = props.numberPoints;

  const [membershipID, setMembershipID] = useState('');
  const [confirmID, setConfirmID] = useState('');

  const minExAmount = props.minExAmount;  

  function MembershipValidation(event){
    event.preventDefault(); // prevent page refresh
    var formatValid = true;
    if(membershipID === confirmID){
      if(memberFormat.length === membershipID.length){
        for (let j = 0; j < membershipID.length; j++){
          if(/^[a-zA-Z]+$/.test(memberFormat[j]) && /^[a-zA-Z]+$/.test(membershipID[j])){console.log("letter")}
          else if(!isNaN(memberFormat[j]) && !isNaN(membershipID[j])){console.log("number")}
          else{
            formatValid = false;
            break;
          }
        }
        if(formatValid){
          //show the points transfer modal
          setPointsShow(true);
          props.close();  
        }
        else{
          alert("Invalid member format, please check you are entering the correct membership ID, wrong order")
        }
      }
      else{
        alert("Invalid member format, please check you are entering the correct membership ID, wrong length")
      }
    }
    else{
      alert("Please check that both IDs are the same.")
    }
  };

  function clearMemIDFields(){
    setMembershipID('')
    setConfirmID('')
  };

    return (
    <div>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{chosenCompany}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Primary Cardholder</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={userName}
                    readOnly
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Membership#</Form.Label>
                <Form.Control
                    type="text"
                    autoFocus
                    onChange={event => setMembershipID(event.target.value)}
                    name="membershipID"
                    value={membershipID}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm Membership#</Form.Label>
                <Form.Control
                    type="text"
                    onChange={event => setConfirmID(event.target.value)}
                    name="confirmID"
                    value={confirmID}
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={MembershipValidation}>
            Save Membership
          </Button>
        </Modal.Footer>
      </Modal>
      <PointsModalContent show={pointsshow} close={handlePointsClose} chosenCompany={chosenCompany} membershipID={membershipID} 
      userName={userName} numberPoints={numberPoints} clearMemIDFields={clearMemIDFields} minExAmount={minExAmount}/>
    </div>
    )
  }

  export default ProgramModalContent;