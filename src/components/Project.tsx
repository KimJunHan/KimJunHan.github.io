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

      <h1 style={{ marginTop: "3rem" }}>Industry Projects</h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        Hyundai Mobis advance vehicle projects at Anyractive (2021 &mdash; 2024)
      </p>
      <div className="projects-grid">
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
