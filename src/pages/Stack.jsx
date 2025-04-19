import React from 'react'
import "../styles/stack.css"

function Stack() {
    return (
        <div id="stack" className="stack-section">
            <h2 className="stack-title">With Great Stack Comes Great Responsibility</h2>
            <p className="stack-text">
                The weapons I wield to turn coffee into clean code. <span className="hidden-joke"><span>(And occasionally bugs)</span></span>
            </p>

            <div className="stack-grid">
                <div className="stack-group">
                    <h3>Frontend Arsenal</h3>
                    <p>React <span>(hooks, not classes)</span>, JavaScript <span>(ES6+)</span>, HTML5 <span>(still alive)</span>, CSS3 <span>(Tailwind when I'm feeling fancy)</span></p>
                </div>
                <div className="stack-group">
                    <h3>Backend Toolkit</h3>
                    <p>Node.js, Express.js, MongoDB <span>(when SQL seems too mainstream)</span>, REST APIs <span>(that sometimes REST)</span></p>
                </div>
                <div className="stack-group">
                    <h3>Daily Drivers</h3>
                    <p>Git <span>(commit -m "fix")</span>, VS Code <span>(with too many extensions)</span>, Postman <span>(for API adventures)</span>, npm <span>(install --save-dev patience)</span></p>
                </div>
                <div className="stack-group">
                    <h3>Launch Pads</h3>
                    <p>Vercel <span>(for Next.js magic)</span>, Netlify <span>(when I miss the old days)</span>, MongoDB Atlas <span>(cloud DBs that somehow work)</span></p>
                </div>
            </div>

            <p className="stack-footer">
                * All technologies used responsibly with proper error handling<span className="hidden-joke">... usually</span>
            </p>
        </div>
    )
}

export default Stack