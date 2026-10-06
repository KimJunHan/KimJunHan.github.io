import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Research Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/gaussiandt/"}>
            <div className="project-card zoom">
              <span className="project-tag first-author">First Author</span>
              <span className="project-venue">AVEC 2026</span>
              <h2>GaussianDT</h2>
              <p className="project-subtitle">
                Camera-radar Gaussian BEV detection and tracking
              </p>
              <ul className="project-metrics">
                <li>nuScenes mAP 33.6</li>
                <li>AMOTA 0.372</li>
                <li className="highlight">ID-Switch 1432 &rarr; 1050</li>
                <li>Best Paper Finalist</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/segmam/"}>
            <div className="project-card zoom">
              <span className="project-tag first-author">First Author</span>
              <span className="project-venue">IEEE Access (SCIE)</span>
              <h2>SegMam</h2>
              <p className="project-subtitle">
                Pseudo-LiDAR with Cross-Mamba attention for BEV segmentation
              </p>
              <ul className="project-metrics">
                <li>Drivable Area IoU 81.6</li>
                <li>Vehicle IoU 50.0</li>
                <li className="highlight">Night +13.6</li>
                <li className="highlight">Rain +6.0</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/edge-bev/"}>
            <div className="project-card zoom">
              <span className="project-tag">Co-author</span>
              <span className="project-venue">KSAE</span>
              <h2>Real-time BEV on Edge</h2>
              <p className="project-subtitle">
                ONNX, TensorRT, Jetson deployment
              </p>
              <ul className="project-metrics">
                <li>IoU ~72%</li>
                <li className="highlight">AGX Orin 44 ms</li>
                <li className="highlight">AGX Thor 22 ms</li>
                <li>vs. 352 ms baseline</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project">
          <a href={process.env.PUBLIC_URL + "/projects/vehicle-pipeline/"}>
            <div className="project-card zoom">
              <span className="project-tag">National Project</span>
              <span className="project-venue">KEIT</span>
              <h2>Vehicle Data Pipeline</h2>
              <p className="project-subtitle">
                ROS perception module &amp; data collection platform
              </p>
              <ul className="project-metrics">
                <li>0.3 m / 200x120 grid</li>
                <li>OccupancyGrid @ 10 Hz</li>
                <li>119 scenes labeled</li>
                <li>KIAPI certification</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
