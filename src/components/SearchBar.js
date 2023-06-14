import React from 'react';

const SearchBar = ({ searchQuery, handleInputChange, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter a city"
      />
      <button onClick={handleSearch}>Add City</button>
    </div>
  );
};

export default SearchBar;
