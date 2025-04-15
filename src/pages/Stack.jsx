import React from 'react'
import "../styles/stack.css"

function Stack() {
    return (
        <div id="stack" className="stack-section">
  <h2 className="stack-title">Tech Stack</h2>
  <p className="stack-text">
    I work across the full stack to build responsive, scalable, and intuitive web applications.
  </p>

  <div className="stack-grid">
    <div className="stack-group">
      <h3>Frontend</h3>
      <p>React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</p>
    </div>
    <div className="stack-group">
      <h3>Backend</h3>
      <p>Node.js, Express.js, MongoDB, REST APIs</p>
    </div>
    <div className="stack-group">
      <h3>Tools & Other</h3>
      <p>Git, GitHub, VS Code, Postman, npm, JSON</p>
    </div>
    <div className="stack-group">
      <h3>Deployment</h3>
      <p>Vercel, Netlify, MongoDB Atlas</p>
    </div>
  </div>
</div>

    )
}

export default Stack
