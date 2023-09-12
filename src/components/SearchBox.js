import React, { useState } from "react";
import "./searchBox.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ userSearch, setUserSearch }) {
  const handleInputChange = (e) => {
    const numeric = e.target.value.replace(/\D/g, "");
    setUserSearch(numeric);
  };

  return (
    <div className="search-box">
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="search episode"
          value={userSearch}
          onChange={handleInputChange}
        ></input>
        <div className="icon">
          {" "}
          <FaSearch />
        </div>
      </form>
    </div>
  );
}
