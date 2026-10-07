import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Industry Projects</h1>
      <div className="projects-grid">
        <div className="project project-featured">
          <a href={process.env.PUBLIC_URL + "/projects/keti-gridmap/"}>
            <div className="project-card zoom">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/keti-cover.jpg"}
                alt="Semantic Grid Map for Drivable Area Analysis"
                className="project-image"
              />
              <div className="project-card-body">
                <span className="project-tag">National R&amp;D</span>
                <span className="project-venue">KETI</span>
                <h2>Semantic Grid Map for Drivable Area Analysis</h2>
                <p className="project-subtitle">
                  Camera-based BEV segmentation with Cross-Mamba Attention &amp; Pseudo-LiDAR fusion, DS-theory probabilistic grid map, and ROS OccupancyGrid deployment
                </p>
                <ul className="project-metrics">
                  <li className="highlight">Drivable IoU 81.6%</li>
                  <li>DS Fusion +1% IoU</li>
                  <li>119 Scenes Labeled</li>
                  <li>OccupancyGrid @ 20 Hz</li>
                  <li>Jetson / Thor Deployment</li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="project project-featured">
          <a href={process.env.PUBLIC_URL + "/projects/mvision-hi/"}>
            <div className="project-card zoom">
              <div className="project-banner banner-mvision-hi">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 22l12 2 12-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="16" y="40" width="32" height="16" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="24" cy="48" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="40" cy="48" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span className="banner-label">CES Concept Vehicle</span>
              </div>
              <div className="project-card-body">
                <span className="project-tag">Hyundai Mobis</span>
                <span className="project-venue">CES Concept Vehicle</span>
                <h2>M.VISION HI</h2>
                <p className="project-subtitle">
                  Gaze tracking &amp; gesture recognition for autonomous robotaxi concept with 8-PC real-time system
                </p>
                <ul className="project-metrics">
                  <li>Gaze Tracking</li>
                  <li>Gesture Recognition</li>
                  <li className="highlight">8-PC Real-Time System</li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="project project-featured">
          <a href={process.env.PUBLIC_URL + "/projects/mvision-pop/"}>
            <div className="project-card zoom">
              <div className="project-banner banner-mvision-pop">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="14" y="20" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="24" cy="32" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="40" cy="32" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M24 32l4-3 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="banner-label">Personal Urban Mobility</span>
              </div>
              <div className="project-card-body">
                <span className="project-tag">Hyundai Mobis</span>
                <span className="project-venue">CES Concept Vehicle</span>
                <h2>M.VISION POP</h2>
                <p className="project-subtitle">
                  Stereo vision &amp; gesture-based interaction system for personal urban mobility concept
                </p>
                <ul className="project-metrics">
                  <li>Stereo Vision</li>
                  <li>Gesture Recognition</li>
                  <li className="highlight">Real-Time Processing</li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="project project-featured">
          <a href={process.env.PUBLIC_URL + "/projects/h2go/"}>
            <div className="project-card zoom">
              <div className="project-banner banner-h2go">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 40h40M16 40V28a4 4 0 014-4h24a4 4 0 014 4v12" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="22" cy="40" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="42" cy="40" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M28 30h8M32 26v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="banner-label">Hydrogen Mobility</span>
              </div>
              <div className="project-card-body">
                <span className="project-tag">Hyundai Mobis</span>
                <span className="project-venue">Advance Vehicle</span>
                <h2>H2GO</h2>
                <p className="project-subtitle">
                  LiDAR pedestrian detection &amp; stereo object detection for hydrogen-powered mobility safety system
                </p>
                <ul className="project-metrics">
                  <li>LiDAR Pedestrian Detection</li>
                  <li>Stereo Object Detection</li>
                  <li className="highlight">Safety System</li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="project project-featured">
          <a href={process.env.PUBLIC_URL + "/projects/humancentric/"}>
            <div className="project-card zoom">
              <div className="project-banner banner-humancentric">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 48c0-8 6-14 14-14s14 6 14 14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M26 30l-4 8M38 30l4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="29" cy="18" r="1.5" fill="currentColor"/>
                  <circle cx="35" cy="18" r="1.5" fill="currentColor"/>
                </svg>
                <span className="banner-label">Human-Centric AI</span>
              </div>
              <div className="project-card-body">
                <span className="project-tag">Hyundai Mobis</span>
                <span className="project-venue">Advance Vehicle</span>
                <h2>Humancentric</h2>
                <p className="project-subtitle">
                  Occupant monitoring &amp; human-centric AI interaction system with gaze, gesture, and behavior understanding
                </p>
                <ul className="project-metrics">
                  <li>Occupant Monitoring</li>
                  <li>Gaze &amp; Gesture AI</li>
                  <li className="highlight">Behavior Understanding</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
