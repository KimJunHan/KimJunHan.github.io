import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faVideo,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsBEV = [
  "PyTorch",
  "MMDetection3D",
  "Gaussian Splatting",
  "BEV Segmentation",
  "3D Object Detection",
  "Multi-Object Tracking",
  "Mamba",
  "Transformer",
];

const labelsFusion = [
  "Camera",
  "Radar",
  "LiDAR",
  "Pseudo-LiDAR",
  "Depth Estimation",
  "Cross-Attention",
  "Sensor Calibration",
  "nuScenes",
];

const labelsEdge = [
  "ONNX",
  "TensorRT",
  "Jetson AGX Orin",
  "Jetson AGX Thor",
  "ROS",
  "Docker",
  "CUDA",
  "Python",
  "C++",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>BEV Perception & 3D Detection</h3>
            <p>
              Designing BEV representation learning architectures for autonomous
              driving. Researching Gaussian-based detection, Mamba
              cross-attention for segmentation, and multi-object tracking in
              bird's-eye view space.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsBEV.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faVideo} size="3x" />
            <h3>Multi-Sensor Fusion</h3>
            <p>
              Fusing camera, radar, and LiDAR data to build robust perception
              systems. Leveraging radar Doppler as velocity prior and
              pseudo-LiDAR from monocular depth for camera-only pipelines.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFusion.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faMicrochip} size="3x" />
            <h3>Edge Deployment & Systems</h3>
            <p>
              Deploying perception models to vehicle edge boards with strict
              latency constraints. Exporting to ONNX, quantizing to FP16,
              building TensorRT engines, and integrating with ROS for real-time
              operation.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsEdge.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
