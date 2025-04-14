import React from 'react';
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
        <li><a href="#" className="no-underline">How I Build</a></li>
        <li><a href="#" className="no-underline">Contact</a></li>
        <li><a href="#" className="no-underline">Stacks</a></li>
        <li><a href="#" className="no-underline">Links</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
