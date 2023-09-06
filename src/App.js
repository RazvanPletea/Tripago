import { react } from "react";

import "./App.css";
import FetchData from "./components/FetchData";
import Header from "./components/Header";
import Legend from "./components/Legend";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <Header />
      <Legend />
      <FetchData />
      <SearchBox />
    </div>
  );
}

export default App;
