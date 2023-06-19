import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import SingleCountry from "./components/SingleCountry";
import CardFlag from "./components/CardFlag";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/:name"
            element={<SingleCountry></SingleCountry>}
          ></Route>
          {/* <Route path="/:cca3" element={<SingleCountry></SingleCountry>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
