import React from "react";
import "../assets/styles/Project.scss";

function PersonalProject() {
  return (
    <div className="projects-container" id="personal-projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project project-featured">
          <div className="project-card zoom">
            <div className="project-banner banner-agv">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="24" width="40" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="20" cy="48" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="44" cy="48" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 44h32" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="20" y="28" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="34" y="28" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M25 16v8M39 16v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
              </svg>
              <span className="banner-label">Factory Automation</span>
            </div>
            <div className="project-card-body">
              <span className="project-tag">Personal</span>
              <span className="project-venue">Logistics Automation</span>
              <h2>Factory Logistics AGV Automation</h2>
              <p className="project-subtitle">Coming soon</p>
            </div>
          </div>
        </div>

        <div className="project project-featured">
          <div className="project-card zoom">
            <div className="project-banner banner-carla">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 44h44" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 44V30a2 2 0 012-2h28a2 2 0 012 2v14" stroke="currentColor" strokeWidth="2"/>
                <circle cx="22" cy="44" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="42" cy="44" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M22 28l-6-8M42 28l6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M28 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M30 18h4M32 16v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <span className="banner-label">Reinforcement Learning</span>
            </div>
            <div className="project-card-body">
              <span className="project-tag">Personal</span>
              <span className="project-venue">Simulation</span>
              <h2>CARLA Simulation Reinforcement Learning</h2>
              <p className="project-subtitle">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalProject;
