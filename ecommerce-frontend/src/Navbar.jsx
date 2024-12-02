import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loginandregister from './Components/Loginandregister'; // Assuming it's in components


import './NavBar.css'; // Import the CSS for styling

function NavBar() {
  const [isMobile, setIsMobile] = useState(false); // State to track if the navbar is in mobile view

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile); // Toggle mobile menu
  };
  
   
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>ShopMate</h2>
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><Link to='/login'>Login</Link>
        <a href='/login'></a>
        </li>
      </ul>
  

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default NavBar;
