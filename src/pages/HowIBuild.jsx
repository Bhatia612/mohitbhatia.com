import React from "react";
import "../styles/howIBuild.css";

function HowIBuild() {
  return (
    <div className="approach-container">
      <h1 className="approach-title">
        How I Turn Coffee <span className="title-emoji">☕</span> Into Code <span className="title-emoji">💻</span>
      </h1>
      <p className="approach-subtitle">
        (Warning: May contain traces of dad jokes and actual development wisdom)
      </p>

      <div className="approach-content">
        <section className="process-step">
          <h2 className="section-heading">1. The Intervention</h2>
          <p className="section-text">
            Where I ask clients hard questions like "What problem are we actually solving?"
            and "Does this need blockchain?" <span className="hidden-joke">(Spoiler: It never does)</span>
          </p>
          <div className="step-tools">Tools: Whiteboard markers • Patience • More whiteboard markers</div>
        </section>

        <section className="process-step">
          <h2 className="section-heading">2. Architectural Daydreaming</h2>
          <p className="section-text">
            Creating beautiful system diagrams that will be immediately obsolete
            when we discover the API actually returns XML instead of JSON.
          </p>
          <div className="step-tools">Tools: Figma • Hope • console.log()</div>
        </section>

        <section className="process-step">
          <h2 className="section-heading">3. The "It Compiles!" Phase</h2>
          <p className="section-text">
            Writing code that somehow works on the first try <span className="hidden-joke">(This never happens)</span>.
            This phase sponsored by Stack Overflow and frantic Googling.
          </p>
          <div className="step-tools">Tools: React • TypeScript • 47 open tabs</div>
        </section>

        <section className="process-step">
          <h2 className="section-heading">4. Pixel Perfectionism</h2>
          <p className="section-text">
            Spending 3 hours aligning a div, then realizing it breaks everything
            on mobile. <span className="hidden-joke">Media queries are my sleep paralysis demons.</span>
          </p>
          <div className="step-tools">Tools: DevTools • !important flags • Regret</div>
        </section>

        <section className="process-step">
          <h2 className="section-heading">5. Strategic Launching</h2>
          <p className="section-text">
            Deploying on a Friday afternoon <span className="hidden-joke">(just kidding, I value my weekends)</span>
            and pretending we meant for that loading spinner to appear on the 404 page.
          </p>
          <div className="step-tools">Tools: CI/CD • Prayer • A stiff drink</div>
        </section>
      </div>

      <div className="footer-note">
        <p>Actual process may contain 37% more coffee and humour than shown.</p>
      </div>
    </div>
  );
}

export default HowIBuild;