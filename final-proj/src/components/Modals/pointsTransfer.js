import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';


const PointsModalContent = (props) => {
    const chosenCompany = props.chosenCompany;
    const userName = props.userName;
    const [pointsToTransfer, setPointsToTransfer] = useState(0);

    return (
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{pointsToTransfer}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Total Rewards to Transfer</Form.Label>
                <Form.Control
                    type="number"
                    autoFocus
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="Secondary" onClick={props.close}>
            Complete Transfer
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  export default PointsModalContent;