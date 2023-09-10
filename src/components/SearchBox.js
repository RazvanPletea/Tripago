import React, { useState } from "react";
import "./searchBox.css";

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
      </form>
    </div>
  );
}
