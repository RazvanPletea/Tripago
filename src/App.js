import "./App.css";
import FetchData from "./components/FetchData";
import Header from "./components/Header";
import Legend from "./components/Legend";

function App() {
  return (
    <div className="App">
      <Header />
      <Legend />
      <FetchData />
    </div>
  );
}

export default App;
