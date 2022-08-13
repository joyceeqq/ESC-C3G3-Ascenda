import { Button, Modal, Form } from "react-bootstrap";
import React, {useState } from 'react';
import PointsModalContent from "./pointsTransfer";

const ProgramDetailsModal = (props) => {

  const companyDets = props.companyDets
  return (
      <div>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Program Details</Modal.Title><br></br>
        </Modal.Header>
        <Modal.Body>
          <p>Loyalty Program ID: <b>{companyDets.LoyaltyProgramID}</b></p>
          <p>Loyalty Program Name: <b>{companyDets.LoyaltyProgramName}</b></p>
          <p>Loyalty Currency Name: <b>{companyDets.currencyName}</b></p>
          <p>Processing Time: <b>{companyDets.processTime}</b></p>
          <p>Description: <b>{companyDets.description}</b></p>
          <p>Enrollment Link: <b>{companyDets.enrollLink}</b></p>
          <p>Terms & conditions link: <b>{companyDets.tcLink}</b></p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      </div>
    )
}

export default ProgramDetailsModal;