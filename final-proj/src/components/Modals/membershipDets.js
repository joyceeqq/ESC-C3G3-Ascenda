import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';
import PointsModalContent from "./pointsTransfer";



const ModalContent = (props) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [pointsshow, setPointsShow] = useState(false);
  const handlePointsClose = () => setPointsShow(false);
  const handlePointsShow = () => setPointsShow(true);
    
  const chosenCompany = props.chosenCompany;
  const userName = props.userName;
  

  function saveMembership(){
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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Primary Cardholder</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={userName}
                    readOnly
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Membership#</Form.Label>
                <Form.Control
                    type="text"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm Membership#</Form.Label>
                <Form.Control
                    type="text"
                    autoFocus
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveMembership}>
            Save Membership
          </Button>
        </Modal.Footer>
      </Modal>
      <PointsModalContent show={pointsshow} close={handlePointsClose} userName={userName} chosenCompany={chosenCompany} numberPoints={props.numberPoints}/>
    </div>
    )
  }

  export default ModalContent;