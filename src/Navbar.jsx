import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import Cart from './Cart';

const Navbar = () => {
   const cart=useSelector((state)=>state.cart);
   const totalItems=cart.reduce((sum,Item)=>sum+Item.quantity,0)
  return (
    <nav className="navbar">
      <div className="navbar-title">Food Menu</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/veg">Veg</Link>
        <Link to="/nonveg">NonVeg</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart">Cart({totalItems})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
