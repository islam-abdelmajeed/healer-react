import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu'; // تأكد من تثبيت @mui/icons-material
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo" >
        <img className="navbar-imgLogo" src="/logo3.jpeg" alt="" width={55} height={45} style={{borderRadius:"5px",margin:"2px"}} /> 
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu} >
        <MenuIcon/>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="search">Search</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="/doctorsInfo">DoctorsInfo</a></li>
        <li><a href="aboutUs">AboutUs</a></li>
        <li><a href="contact">Contact</a></li>
        {menuOpen && (
          <li className="navbar-close-icon" onClick={closeMenu}>
            <CloseIcon />
          </li>
        )}
      </ul>
     
      <div className="navbar-buttons">
        <Button size='small' variant="contained" className='btn-log' >Login</Button>
        <Button size='small' variant="contained" className='btn-reg'>Register</Button>
      </div>
    </nav>
  );
}
