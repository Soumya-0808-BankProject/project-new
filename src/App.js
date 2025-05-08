import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./modules/Header/Header";
import Navbar from "./modules/Navbar/Navbar";
import ContactHeader from "./modules/ContactHeader/ContactHeader";

function App() {
  return (
    <div className="App">
      <ContactHeader />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
