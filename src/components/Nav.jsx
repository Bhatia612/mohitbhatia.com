import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="profile">
        <div className="img"></div>
        <big>Mohit Bhatia</big>
        <small>Web Developer</small>
      </div>
      
      {isMobile && (
        <button className="hamburger" onClick={toggleMenu}>
          <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        </button>
      )}
      
      <ul className={`list-none ${isMobile ? 'mobile-menu' : ''} ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className="no-underline">How I Build</Link></li>
        <li><Link to="/stack" className="no-underline">Stacks</Link></li>
        <li><Link to="/links" className="no-underline">Links</Link></li>
        <li><Link to="/contact" className="no-underline">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;