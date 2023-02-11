import React, { useEffect, useState } from "react";
import Banner from "./spacex/Banner";
import DataGrid from "./spacex/DataGrid";
import SearchForm from "./spacex/SearchForm";
import "./App.css";
const App = () => {
  const [rockets, setRockets] = useState([]);
  const [filteredRockets, setFilteredRockets] = React.useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.spacexdata.com/v3/capsules?limit=10&offset=${offset}`
    );
    const data = await res.json();
    setRockets(data);
    setFilteredRockets(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [offset]);

  const handleSearch = (searchTerm) => {
    setFilteredRockets(
      rockets.filter(
        (rocket) =>
          rocket.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rocket.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (rocket.original_launch &&
            new Date(rocket.original_launch)
              .toLocaleDateString()
              .includes(searchTerm))
      )
    );
  };
  const handleNext = () => {
    setOffset(offset + 10);
  };
  const handlePrev = () => {
    setOffset(offset - 10);
  };
  return (
    <div className="app">
      <Banner />
      <SearchForm
        onSearch={handleSearch}
        setFilteredRockets={setFilteredRockets}
        rockets={rockets}
      />
      <div>
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <DataGrid items={filteredRockets} />
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={handlePrev}
                disabled={offset === 0}
              >
                &#8810; Previous
              </button>
              <span className="page_number">{offset / 10 + 1}</span>
              <button
                className="pagination-btn"
                onClick={handleNext}
                disabled={rockets.length < 10}
              >
                Next &#8811;
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
