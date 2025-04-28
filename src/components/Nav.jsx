import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/nav.css';
import "../index.css"

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverTitle, setHoverTitle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="profile" 
           onMouseEnter={() => setHoverTitle(true)}
           onMouseLeave={() => setHoverTitle(false)}>
        <div className="img"></div>
        <big>Mohit Bhatia</big>
        <small>
          {hoverTitle ? "Professional Console.log() User" : "Web Developer"}
        </small>
      </div>

      {isMobile && (
        <button className="hamburger" onClick={toggleMenu}>
          <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        </button>
      )}

      <ul className={`list-none ${isMobile ? 'mobile-menu' : ''} ${menuOpen ? 'open' : ''}`}>
        <li className="hidden-joke">Menu? I barely know you!</li>
        <li>
          <Link to="/" className="no-underline">
            Who Am I?
            <br />
            <span className="hidden-joke"> - Not Spider-Man</span>
          </Link>
        </li>
        <li>
          <Link to="/howIBuild" className="no-underline">
            How I Build
            <br />
            <span className="hidden-joke"> - 90% Googling</span>
          </Link>
        </li>
        <li>
          <Link to="/stack" className="no-underline">
            Stacks
            <br />
            <span className="hidden-joke"> !== [].push(pancakes)</span>
          </Link>
        </li>
        <li>
          <Link to="/links" className="no-underline">
            Links
            <br />
            <span className="hidden-joke"> (The non-circular dependency kind)</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="no-underline">
            Contact
            <br />
            <span className="hidden-joke">: !recruiters && humansOnly</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;