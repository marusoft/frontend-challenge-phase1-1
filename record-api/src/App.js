import React, { useState, useEffect } from "react";
import Records from "./Component/Records";
import Pagination from "./Component/Pagination";
import SearchForm from "./Component/SearchForm";
import Filter from "./Component/Filter";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  let [records, setRecord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [recordsPerPage] = useState(20);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState({});
  
  

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

  function handleSearchChange(e) {
    setSearchValue(e.target.value);

  }

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      )
    );
  }

  function handleFilterChange(e) {
    const filterString = e.target.value;
    const name = e.target.name;

    setFilterValue({
      [name]: filterString,
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">PATIENT RECORD</h1>
     <SearchForm
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />

     <Filter
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
     />
      <Pagination
        recordsPerPage={recordsPerPage}
        totalRecords={records.length}
        paginate={paginate}
      />
      <Records records={search(currentRecords)}  loading={loading} />
    </Container>
  );
}
export default App;
