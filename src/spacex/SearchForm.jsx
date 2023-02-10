import React, { useState } from "react";
import "./SearchForm.css";
const SearchForm = ({ onSearch, setFilteredRockets, rockets }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  const handleClear = () => {
    setSearchTerm("");
    setFilteredRockets(rockets);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="search-form__input"
          placeholder="Search by type , status , original launch..."
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm !== "" && (
          <button className="search-form__clear-button" onClick={handleClear}>
            X
          </button>
        )}
      </div>
      <button className="search-form__button">Search</button>
    </form>
  );
};

export default SearchForm;
