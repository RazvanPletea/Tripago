import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Legend from "./components/Legend";
import EpisodeInfo from "./components/EpisodeInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Legend />
      <EpisodeInfo />
    </div>
  );
}

export default App;
