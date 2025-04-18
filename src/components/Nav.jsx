import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
        <li><Link to="/" className="no-underline" onClick={() => isMobile && setMenuOpen(false)}>How I Build</Link></li>
        <li><Link to="/stack" className="no-underline" onClick={() => isMobile && setMenuOpen(false)}>Stacks</Link></li>
        <li><Link to="/links" className="no-underline" onClick={() => isMobile && setMenuOpen(false)}>Links</Link></li>
        <li><Link to="/contact" className="no-underline" onClick={() => isMobile && setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;