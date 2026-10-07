import React from "react";
import "../assets/styles/Project.scss";

function Community() {
  return (
    <div className="projects-container" id="community">
      <h1>Community</h1>
      <div className="projects-grid">
        <div className="project">
          <div className="project-card zoom">
            <span className="project-tag">Open Source</span>
            <h2>vAI</h2>
            <p className="project-subtitle">
              Vulkan-based deep learning model development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
