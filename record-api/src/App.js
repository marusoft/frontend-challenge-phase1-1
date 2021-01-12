import React, { useState, useEffect } from "react";
import Records from "./Component/Records";
import Pagination from "./Component/Pagination";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [records, setRecord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [recordsPerPage] = useState(20);

  const BASE_URL = "https://api.enye.tech/v1/challenge/records";

  useEffect(() => {
    const getRecord = async () => {
      setLoading(true);
      const dataResult = await axios.get(BASE_URL);
      setRecord(dataResult.data.records.profiles);
      setLoading(false);
    };
    getRecord();
  }, []);

  const indexOfLastRecord = page * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <Container className="my-4">
      <h1 className="mb-4">RECORD API</h1>
      <Pagination
        recordsPerPage={recordsPerPage}
        totalRecords={records.length}
        paginate={paginate}
      />
      <Records records={currentRecords} loading={loading} />
    </Container>
  );
}

export default App;
