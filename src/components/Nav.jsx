import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'

function Nav() {
  return (
    <nav>
      <div className="profile">
        <div className="img"></div>
        <big>Mohit Bhatia</big>
        <small>Web Developer</small>
      </div>
      <ul className="list-none">
        <li><Link to="/" className="no-underline">How I Build</Link></li>
        <li><Link to="/contact" className="no-underline">Contact</Link></li>
        <li><Link to="/stack" className="no-underline">Stacks</Link></li>
        <li><Link to="/links" className="no-underline">Links</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
