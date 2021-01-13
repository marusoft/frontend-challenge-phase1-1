import React from "react";
import { Col, Form } from "react-bootstrap";

const SearchForm = ({ params, onParamChange }) => {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.Gender}
            name="Gender"
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Credit Card Type</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.CreditCardType}
            name="CreditCardType"
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={onParamChange}
            value={params.PaymentMethod}
            name="PaymentMethod"
            id="PaymentMethod"
            label="Payment Method"
            type="checkbox"
            className="mb-2"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};
export default SearchForm;
