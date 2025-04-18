import React from 'react'
import "../styles/stack.css"

function Stack() {
    return (
        <div id="stack" className="stack-section">
            <h2 className="stack-title">Tools of the Trade</h2>
            <p className="stack-text">
                The weapons I wield to turn coffee into clean code. <span className="hidden-joke">(And occasionally bugs)</span>
            </p>

            <div className="stack-grid">
                <div className="stack-group">
                    <h3>Frontend Arsenal</h3>
                    <p>React (hooks, not classes), JavaScript (ES6+), HTML5 (still alive), CSS3 (Tailwind when I'm feeling fancy)</p>
                </div>
                <div className="stack-group">
                    <h3>Backend Toolkit</h3>
                    <p>Node.js, Express.js, MongoDB (when SQL seems too mainstream), REST APIs (that sometimes REST)</p>
                </div>
                <div className="stack-group">
                    <h3>Daily Drivers</h3>
                    <p>Git (commit -m "fix"), VS Code (with too many extensions), Postman (for API adventures), npm (install --save-dev patience)</p>
                </div>
                <div className="stack-group">
                    <h3>Launch Pads</h3>
                    <p>Vercel (for Next.js magic), Netlify (when I miss the old days), MongoDB Atlas (cloud DBs that somehow work)</p>
                </div>
            </div>

            <p className="stack-footer">
                * All technologies used responsibly with proper error handling<span className="hidden-joke">... usually</span>
            </p>
        </div>
    )
}

export default Stack