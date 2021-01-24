import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({ filterValue, handleFiterChange }) => {
  return (
    <Form>
      Filter By:
      <div className="mb-3">
        <Form.Check
          inline
          name="Gender"
          value={filterValue}
          label="Gender"
          type="checkbox"
          onChange={handleFiterChange}
        />
        <Form.Check
          inline
          name="CreditCardNumber"
          value="CreditCardNumber"
          label="Credit Card Number"
          type="checkbox"
          onChange={handleFiterChange}
        />
      </div>
    </Form>
  );
};

export default Filter;
