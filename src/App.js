import { react, useState } from "react";

import "./App.css";
import FetchData from "./components/FetchData";
import Header from "./components/Header";
import Legend from "./components/Legend";
import SearchBox from "./components/SearchBox";
import { SearchProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <Header />
      <Legend />
      <SearchProvider>
        <SearchBox />
        <FetchData />
      </SearchProvider>
    </div>
  );
}

export default App;
