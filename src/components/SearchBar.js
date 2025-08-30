import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)} // real-time filtering
      />
    </div>
  );
}
export default SearchBar;
