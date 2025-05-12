import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./modules/Header/Header";
import Navbar from "./modules/Navbar/Navbar";
import ContactHeader from "./modules/ContactHeader/ContactHeader";
import LoanInfo from "./modules/LoanInfo/LoanInfo";
import Footer from "./modules/Footer/Footer";
import SocialMedia from "./modules/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <ContactHeader />
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-loan" element={<LoanInfo/>}/>
        <Route path="/social-media" element={<SocialMedia/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
