import React, { createContext, useContext, useState } from "react";

// Create the SearchContext
const SearchContext = createContext();

// Create a custom hook to access the context values
export function useSearchContext() {
  return useContext(SearchContext);
}

// Create a SearchProvider component
export function SearchProvider({ children }) {
  const [filterValue, setFilterValue] = useState("");

  return (
    <SearchContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </SearchContext.Provider>
  );
}
