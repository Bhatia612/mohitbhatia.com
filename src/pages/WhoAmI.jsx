import React from "react";
import "../styles/whoAmI.css";

const WhoAmI = () => {
  const projectHighlights = [
    "Built a weather app that shows forecasts in movie quotes",
    "Created a romantic novel recommendation engine (for 'research')",
    "Designed a mystery movie trivia game with spoiler alerts",
    "Developed a music mood classifier using terrible API documentation"
  ];

  return (
    <div className="approach-container">
      <h2 className="approach-title">
        Who Am I?
      </h2>
      <p className="approach-subtitle">
        Recent graduate with hands-on project experience
      </p>

      <div className="approach-content">
        <div className="process-step">
          <h3 className="section-heading">
            Professional Journey
          </h3>
          <p className="section-text">
            Freshly certified with a <span>Networking diploma</span> and extensive self-directed learning in full-stack development. My project portfolio demonstrates strong problem-solving abilities and rapid adaptation to new technologies.
            <span className="hidden-joke"> (Turns out Googling is a marketable skill)</span>
          </p>
          <div className="step-tools">
            Currently specializing in: MERN stack | Responsive Design | API Development
          </div>
        </div>

        <div className="process-step">
          <h3 className="section-heading">
            Project Highlights
          </h3>
          <ul className="project-highlights">
            {projectHighlights.map((item, index) => (
              <li key={index} className="section-text">
                {item}
              </li>
            ))}
          </ul>
          <div className="step-tools">
            Technologies used: React | Node.js | MongoDB | Express
          </div>
        </div>

        <div className="process-step">
          <h3 className="section-heading">
            Beyond Code
          </h3>
          <p className="section-text">
            When not developing, I analyze mystery films for plot structures and enjoy romantic novels for their narrative flow - both surprisingly relevant to writing clean, logical code.
          </p>
          <div className="footer-note">
            Open to opportunities where I can grow while contributing value
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;