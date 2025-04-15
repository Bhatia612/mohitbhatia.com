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

    </>
  );
}

export default HowIBuild;
