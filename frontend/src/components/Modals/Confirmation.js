import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';


const PointsConfirm= (props) => {
    const confirmRefNumber = props.confirmRefNumber
    const handlePointsClose = () => {
      props.close(); 
    }

    return (
      <div>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title><h1>Success!</h1></Modal.Title><br></br>
        </Modal.Header>
        <Modal.Body>
            <p>Confirmation Code: <b>{confirmRefNumber}</b></p>
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