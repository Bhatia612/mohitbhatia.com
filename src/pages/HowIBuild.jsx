import React from "react";
import "../styles/howIBuild.css";
import "../styles/contacts.css";

function HowIBuild() {
  return (
    <>
      <div className="approach-container">
        <h1 className="approach-title">Crafting the Process</h1>

        <div className="approach-content">
          <section>
            <h2 className="section-heading">The Purpose</h2>
            <p className="section-text">
              Every project begins with intention. Understanding the underlying goals and the audience it’s meant for lays the foundation for meaningful outcomes.
            </p>
          </section>

          <section>
            <h2 className="section-heading">The Blueprint</h2>
            <p className="section-text">
              Before diving in, I like to map things out—defining the structure, flow, and tools. It’s about setting a strong direction before bringing ideas to life.
            </p>
          </section>

          <section>
            <h2 className="section-heading">The Build</h2>
            <p className="section-text">
              With planning in place, the building phase takes shape. Components come together thoughtfully, with clean code and attention to UI detail.
            </p>
          </section>

          <section>
            <h2 className="section-heading">The Polish</h2>
            <p className="section-text">
              Refinement matters. I carefully tweak layouts, interactions, and visuals to ensure everything feels just right—consistent, intuitive, and elegant.
            </p>
          </section>

          <section>
            <h2 className="section-heading">The Release</h2>
            <p className="section-text">
              Launching isn’t the finish line—it’s part of the cycle. I value feedback and see each release as a chance to evolve and improve further.
            </p>
          </section>
        </div>
      </div>
      <div id="contacts" className="contact-section">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-text">
          Whether you have a project in mind, want to collaborate, or just want to say hello — I’m always open to meaningful conversations.
        </p>
        <div className="contact-links">
          <a href="mailto:mohitbhatia612.com" className="contact-link">📧 mohitbhatia612@gmail.com ↗</a>
          <a href="https://www.linkedin.com/in/mohit-bhatia-777461289/" target="_blank" className="contact-link">🔗 LinkedIn ↗</a>
          <a href="https://github.com/Bhatia612" target="_blank" className="contact-link">💻 GitHub ↗</a>
        </div>
      </div>

    </>
  );
}

export default HowIBuild;
