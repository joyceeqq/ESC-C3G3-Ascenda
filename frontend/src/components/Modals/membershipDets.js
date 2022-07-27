import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';
import PointsModalContent from "./pointsTransfer";


const ProgramModalContent = (props) => {

  const [pointsshow, setPointsShow] = useState(false);
  const handlePointsClose = () => setPointsShow(false);
    
  const chosenCompany = props.chosenCompany;
  const userName = props.userName;

  const [membershipID, setMembershipID] = useState('');
  const [confirmID, setConfirmID] = useState('');
  
  function handleSubmit(event){
    event.preventDefault(); // prevent page refresh
    
    if(membershipID === confirmID){
      //show the points transfer modal
      setPointsShow(true);
      props.close();  
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
                    autoFocus
                    onChange={event => setConfirmID(event.target.value)}
                    name="confirmID"
                    value={confirmID}
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Membership
          </Button>
        </Modal.Footer>
      </Modal>
      <PointsModalContent show={pointsshow} close={handlePointsClose} chosenCompany={chosenCompany} membershipID={membershipID} userName={userName} clearMemIDFields={clearMemIDFields}/>
    </div>
    )
  }

  export default ProgramModalContent;