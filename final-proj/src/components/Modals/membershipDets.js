import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';


const ModalContent = (props) => {
    const [cardCompanyName, setCardCompanyName] = useState("Barclays");

    return (
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{cardCompanyName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          <Button variant="primary" onClick={props.close}>
            Save Membership
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  export default ModalContent;