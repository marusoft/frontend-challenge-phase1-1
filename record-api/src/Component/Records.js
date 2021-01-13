import React, { useState } from "react";
import { Table, Button, ListGroup, Collapse } from "react-bootstrap";

const Records = ({ records, loading }) => {
  const [open, setOpen] = useState(false);
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="mb-4">
    {records.map(record => (
      <div key={record.id}>
        <Table striped bordered hover size="md" className="mb-4">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>Latitutde</th>
              <th>Longitude</th>
              <th>More Record</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{record.FirstName}</td>
              <td>{record.LastName}</td>
              <td>{record.Gender}</td>
              <td>{record.Latitude}</td>
              <td>{record.Longitude}</td>
              <td>
                <Button
                  onClick={() => setOpen((prevOpen) => !prevOpen)}
                  variant="info"
                >
                  {open ? "Hide Records" : "View Records"}
                </Button>
              </td>
            </tr>
            <tr>
              <Collapse in={open}>
                <div>
                  <h3 className="p-2">Other Records</h3>
                  <ListGroup>
                    <ListGroup.Item>
                      <b className="mr-1">CreditCardNumber:</b>{" "}
                      <span>{record.CreditCardNumber}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">CreditCardType:</b>
                      <span>{record.CreditCardType}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">Email:</b>
                      <span>{record.Email}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1"> DomainName:</b>{" "}
                      <span>{record.DomainName}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">PhoneNumber:</b>{" "}
                      <span>{record.PhoneNumber}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">MacAddress:</b>{" "}
                      <span>{record.MacAddress}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">URL:</b> <span>{record.URL}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">UserName:</b>
                      <span>{record.UserName}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">LastLogin:</b>{" "}
                      <span>{record.LastLogin}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b className="mr-1">PaymentMethod:</b>{" "}
                      <span>{record.PaymentMethod}</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Collapse>
            </tr>
          </tbody>
        </Table>
      </div>
    ))}
      
    </div>
  );
};

export default Records;
