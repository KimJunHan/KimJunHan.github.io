import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Industry Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <div className="project-card zoom">
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
        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/mvision-hi/"}>
            <div className="project-card zoom">
              <span className="project-tag">Hyundai Mobis</span>
              <span className="project-venue">CES Concept Vehicle</span>
              <h2>M.VISION HI</h2>
              <p className="project-subtitle">
                Gaze tracking &amp; gesture recognition for autonomous robotaxi concept
              </p>
              <ul className="project-metrics">
                <li>Gaze Tracking</li>
                <li>Gesture Recognition</li>
                <li className="highlight">8-PC Real-Time System</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/mvision-pop/"}>
            <div className="project-card zoom">
              <span className="project-tag">Hyundai Mobis</span>
              <span className="project-venue">CES Concept Vehicle</span>
              <h2>M.VISION POP</h2>
              <p className="project-subtitle">
                Stereo vision &amp; interaction system for personal urban mobility
              </p>
              <ul className="project-metrics">
                <li>Stereo Vision</li>
                <li>Gesture Recognition</li>
                <li className="highlight">Real-Time Processing</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/h2go/"}>
            <div className="project-card zoom">
              <span className="project-tag">Hyundai Mobis</span>
              <span className="project-venue">Advance Vehicle</span>
              <h2>H2GO</h2>
              <p className="project-subtitle">
                LiDAR pedestrian detection &amp; stereo object detection for hydrogen mobility
              </p>
              <ul className="project-metrics">
                <li>LiDAR Pedestrian Detection</li>
                <li>Stereo Object Detection</li>
                <li className="highlight">Safety System</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/humancentric/"}>
            <div className="project-card zoom">
              <span className="project-tag">Hyundai Mobis</span>
              <span className="project-venue">Advance Vehicle</span>
              <h2>Humancentric</h2>
              <p className="project-subtitle">
                Occupant monitoring &amp; human-centric AI interaction system
              </p>
              <ul className="project-metrics">
                <li>Occupant Monitoring</li>
                <li>Gaze &amp; Gesture AI</li>
                <li className="highlight">Behavior Understanding</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
