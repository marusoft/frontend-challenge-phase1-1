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
    filterData(e.target.value);
  }

  function handleFilterChange(e) {
    const filterString = e.target.value;
    const name = e.target.name;

    setFilterValue({
      [name]: filterString,
    });
  }

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      return setRecord(records);
    }
    else {
      const filteredData = records.filter((record) => {
        return Object.keys(record).some((key) =>
          record[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setRecord(filteredData);
    }
  };

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
      <Records records={currentRecords} loading={loading} />
    </Container>
  );
}
export default App;
