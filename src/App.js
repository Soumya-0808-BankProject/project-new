import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./modules/Header/Header";
import  Navbar  from "./modules/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
