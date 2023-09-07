import React, { useState } from "react";
import "./searchBox.css";
import { useSearchContext } from "../context/Context";

export default function SearchBox() {
  const { filterValue, setFilterValue } = useSearchContext();

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="search-box">
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="search episode"
          value={filterValue}
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  );
}
