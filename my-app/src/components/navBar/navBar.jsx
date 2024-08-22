// src/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../navBar/navBar.css';
import KalTireLogo from '../../Assets/KalTire-Logo.png';
import Cart from '../../Assets/fluent-cart.png';
// import login from '../login/login'


const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        };
return (
    <header className="header">
    <div className="logo">
        <a href='#home'><img src={KalTireLogo} alt="Kal Tire Logo" /></a>
    </div>
    <nav className="nav">
      <ul>
        <li>
          <a href="#products">Products</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#Services">Services</a>
          {showDropdown && (
            <ul className="dropdown-content">
              <li><a href="#Maintenance & Management">Maintenance & Management</a></li>
              <li><a href="#Technical Studies & Assessments">Technical Studies & Assessments</a></li>
              <li><a href="#Tire & Operations & Management System (TOMS™)">Tire & Operations & Management System (TOMS™)</a></li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#Sustainable Solutions">Sustainable Solutions</a>
          {showDropdown && (
            <ul className="dropdown-content">
              <li><a href="#Recycling">Recycling</a></li>
              <li><a href="#Retreads & Repairs">Retreads & Repairs</a></li>
              <li><a href="#Maple Program">Maple Program</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#promotions">Promotions</a>
        </li>
      </ul>
    </nav>
    <div className="icons">
        <a href="#cart" className='cart-icon'><img src={Cart} alt="Cart" /></a>
        <a href="#book-tire-change" className="book-btn">Book A Tire Change</a>
        {/* <a href="/" className='signIn-btn'>Sign In</a> */}
        <Link to='./signin' className='signIn-btn'>Sign In</Link>
    </div>
    </header>
);
};

export default NavBar;
