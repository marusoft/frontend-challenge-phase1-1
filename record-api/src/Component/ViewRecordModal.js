import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewRecordModal = ({ currentRow, show, toggleModal }) => {
  const {
    FirstName,
    LastName,
    Gender,
    Latitude,
    Longitude,
    CreditCardNumber,
    CreditCardType,
    Email,
    DomainName,
    PhoneNumber,
    MacAddress,
    URL,
    UserName,
    LastLogin,
    PaymentMethod,
  } = currentRow;

  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Patient Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <p>
            <strong>First Name:</strong>
            {FirstName}
          </p>

          <p>
            <strong>Last Name:</strong>
            {LastName}
          </p>

          <p>
            <strong>Gender:</strong>
            {Gender}
          </p>
          <p>
            <strong>Latitude:</strong>
            {Latitude}
          </p>
          <p>
            <strong>Longitude:</strong>
            {Longitude}
          </p>
          <p>
            <strong>Credit Card Number:</strong>
            {CreditCardNumber}
          </p>
          <p>
            <strong>Credit Card Type:</strong>
            {CreditCardType}
          </p>

          <p>
            <strong> Email:</strong>
            {Email}
          </p>

          <p>
            <strong> DomainName:</strong>
            {DomainName}
          </p>
          <p>
            <strong> PhoneNumber:</strong>
            {PhoneNumber}
          </p>

          <p>
            <strong> MacAddress:</strong>
            {MacAddress}
          </p>
          <p>
            <strong>URL:</strong>
            {URL}
          </p>

          <p>
            <strong>User Name:</strong>
            {UserName}
          </p>

          <p>
            <strong>Last Login:</strong>
            {LastLogin}
          </p>

          <p>
            <strong>Payment Method:</strong>
            {PaymentMethod}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ViewRecordModal;
