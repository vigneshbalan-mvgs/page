import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from "./Pages/Navbar";
import Home from "./Pages/Home"; 
import Contact from "./Pages/Contact"; 
import Signup from "./Pages/Signup"; 
import Services from "./Pages/Services"; 
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="app-container">
      
    <BrowserRouter>

      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
   
    </BrowserRouter>
    </div>
  );
}

export default App;

