import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';
import PointsModalContent from "./pointsTransfer";



const ModalContent = (props) => {

  const [pointsshow, setPointsShow] = useState(false);
  const handlePointsClose = () => setPointsShow(false);
  const handlePointsShow = () => setPointsShow(true);
    
  const chosenCompany = props.chosenCompany;
  const userName = props.userName;

  const [input, setInput] = useState({
    membershipID: "",
    confirmMemID: ""
  })
  
  function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function saveMembership(event){
    event.preventDefault();
    console.log(input);
    setPointsShow(true);
    props.close();
  }

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
                    onChange={handleChange}
                    name="membershipID"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm Membership#</Form.Label>
                <Form.Control
                    type="text"
                    autoFocus
                    onChange={handleChange}
                    name="confirmMemID"
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveMembership} type="submitv  ">
            Save Membership
          </Button>
        </Modal.Footer>
      </Modal>
      <PointsModalContent show={pointsshow} close={handlePointsClose} userName={userName} chosenCompany={chosenCompany} numberPoints={props.numberPoints}/>
    </div>
    )
  }

  export default ModalContent;