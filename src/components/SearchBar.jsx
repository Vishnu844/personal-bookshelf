import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ setBook }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setBook(searchValue);
  };

  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchValue}
            placeholder="Search book by name"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
