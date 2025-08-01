import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './Nonveg';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import './App.css';



const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;