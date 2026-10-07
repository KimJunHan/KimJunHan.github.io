import React from "react";
import "../assets/styles/Project.scss";

function Community() {
  return (
    <div className="projects-container" id="community">
      <h1>Community</h1>
      <div className="projects-grid">
        <div className="project project-featured">
          <a href="https://github.com/VulkanML/vAI" target="_blank" rel="noreferrer">
            <div className="project-card zoom">
              <div className="project-banner banner-vai">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8L8 56h48L32 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M24 40l8-20 8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26 36h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="banner-label">Open Source</span>
              </div>
              <div className="project-card-body">
                <span className="project-tag">Open Source</span>
                <span className="project-venue">Vulkan Compute</span>
                <h2>vAI</h2>
                <p className="project-subtitle">
                  Vulkan-based deep learning inference engine leveraging GPU compute shaders for cross-platform model execution without CUDA dependency
                </p>
                <ul className="project-metrics">
                  <li>Vulkan Compute Shaders</li>
                  <li>Cross-Platform</li>
                  <li className="highlight">CUDA-Free Inference</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Community;
