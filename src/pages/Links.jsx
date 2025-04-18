import React from 'react'
import "../styles/links.css"

function Links() {
    return (
        <div className="contact-section">
            <h2 className="contact-title">Let's Build Something</h2>
            <p className="contact-text">
                Whether you want to:
                <ul className="contact-options">
                    <li>Discuss that <span className="highlight">"million-dollar app idea"</span></li>
                    <li>Argue about tabs vs spaces</li>
                    <li>Complain about JavaScript frameworks</li>
                </ul>
                I'm always up for a good tech conversation.
                <span className="hidden-note">(Coffee invitations accepted with 98% success rate)</span>
            </p>
            <div className="contact-links">
                <a href="mailto:mohitbhatia612@gmail.com" className="contact-link">
                    ✉️ Drop a mail ↗ <span className="link-subtext">(Response time: faster than your CI/CD pipeline)</span>
                </a>
                <a href="https://www.linkedin.com/in/mohit-bhatia-777461289/" target="_blank" className="contact-link">
                    💼 LinkedIn ↗ <span className="link-subtext">(Let's pretend we're professional)</span>
                </a>
                <a href="https://github.com/Bhatia612" target="_blank" className="contact-link">
                    ⌨️ GitHub ↗ <span className="link-subtext">(Where the magic happens... and occasionally breaks)</span>
                </a>
            </div>
        </div>
    )
}

export default Links