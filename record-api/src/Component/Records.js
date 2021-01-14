import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import ViewRecordModal from "./ViewRecordModal";

const Records = ({ records, loading }) => {
  const [currentRow, setCurrentRow] = useState({});
  const [show, setShow] = useState(false);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const toggleModal = () => setShow((show) => !show);

  return (
    <div className="mb-4">
      <div>
        <Table responsive bordered size="md" className="mb-4">
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
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.FirstName}</td>
                <td>{record.LastName}</td>
                <td>{record.Gender}</td>
                <td>{record.Latitude}</td>
                <td>{record.Longitude}</td>
                <td>
                  <Button
                    onClick={() => {
                      setCurrentRow(record);
                      toggleModal();
                    }}
                    variant="info"
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}

            {show ? (
              <ViewRecordModal show={show} toggleModal={toggleModal}  currentRow={currentRow} />
            ) : null}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Records;
