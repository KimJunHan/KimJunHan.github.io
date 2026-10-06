import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "../assets/styles/Publications.scss";

const publications = [
  {
    title: "SegMam: Multi-Scale Deformable Cross-Mamba Attention with Pseudo-LiDAR from Multi-Camera Depth for BEV Segmentation",
    venue: "IEEE Access (SCIE)",
    role: "First author",
    year: "2026",
    pdf: "papers/segmam-ieee-access-2026.pdf",
  },
  {
    title: "GaussianDT: Gaussian Splatting Optimization for Object Detection and Tracking with Camera-Radar Fusion",
    venue: "AVEC 2026, Tsukuba, Japan",
    role: "First author",
    year: "2026",
    pdf: "papers/gaussiandt-avec-2026.pdf",
  },
  {
    title: "Vehicle Trajectory Correction in ORB Visual SLAM Using Extended Kalman Filter",
    venue: "Transactions of KSAE 34(3)",
    role: "First author",
    year: "2026",
    pdf: "papers/vslam-ekf-ksae-2026.pdf",
  },
  {
    title: "Map-view Prior Based Radar Multi-Object Tracking",
    venue: "Transactions of KSAE (under review)",
    role: "First author",
    year: "2026",
    pdf: "papers/radar-mot-ksae-2026.pdf",
  },
  {
    title: "3D Multi-Camera Depth BEV Semantic Segmentation Using Multi-Scale Deformable Cross-Attention Mamba",
    venue: "KSAE Fall Conference",
    role: "First author",
    year: "2025",
    pdf: "papers/segmam-ksae-fall-2025.pdf",
  },
  {
    title: "Analysis and Comparison of BEV-Based Deep Learning Semantic Segmentation for Urban Driving Area Perception",
    venue: "KSAE Conference",
    role: "First author",
    year: "2025",
    pdf: "papers/bev-comparison-ksae-2025.pdf",
  },
  {
    title: "Development of a Lightweight BEV Drivable Area Model for Real-Time Inference on Edge Devices",
    venue: "KSAE Spring Conference",
    role: "Co-author",
    year: "2026",
    pdf: "papers/edge-bev-ksae-spring-2026.pdf",
  },
  {
    title: "BEV Semantic Segmentation Using Deep Learning-Based Camera-Pseudo LiDAR Sensor Fusion",
    venue: "KSAE Spring Conference",
    role: "Co-author",
    year: "2025",
    pdf: "papers/pseudo-lidar-ksae-spring-2025.pdf",
  },
  {
    title: "Target-Based Automated Camera-LiDAR Calibration for Low-Channel LiDAR Sensors",
    venue: "KSAE Fall Conference",
    role: "Co-author",
    year: "2025",
    pdf: "papers/calibration-ksae-fall-2025.pdf",
  },
];

const patents = [
  {
    title: "Virtual simulator for evaluating perception modules via Gaussian Splatting reconstruction",
    number: "10-2026-0108887",
    date: "2026.06.15",
    inventor: "2nd inventor",
  },
  {
    title: "Vision-language model based pedestrian risk assessment and vehicle communication",
    number: "10-2026-0107208",
    date: "2026.06.12",
    inventor: "2nd inventor",
  },
  {
    title: "Pedestrian risk assessment method and intelligent pedestrian safety management device",
    number: "10-2025-0185188",
    date: "2025.11.28",
    inventor: "4th inventor",
  },
];

function Publications() {
  return (
    <div id="publications">
      <div className="items-container">
        <h1>Publications & Patents</h1>

        <h2 className="pub-section-title">
          Publications <span className="pub-count">5 first author, 4 co-author</span>
        </h2>
        <div className="pub-table-wrap">
          <table className="pub-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Venue</th>
                <th>Role</th>
                <th>Year</th>
                <th>PDF</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((pub, index) => (
                <tr key={index}>
                  <td>{pub.title}</td>
                  <td>{pub.venue}</td>
                  <td className={pub.role === "First author" ? "first-author" : ""}>
                    {pub.role}
                  </td>
                  <td className="year">{pub.year}</td>
                  <td className="pdf-cell">
                    {pub.pdf && (
                      <a
                        href={process.env.PUBLIC_URL + "/" + pub.pdf}
                        target="_blank"
                        rel="noreferrer"
                        title="Download PDF"
                      >
                        <PictureAsPdfIcon />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="pub-section-title" style={{ marginTop: "3rem" }}>
          Patents <span className="pub-count">3 filed, all under examination</span>
        </h2>
        <div className="patents-grid">
          {patents.map((patent, index) => (
            <div className="patent-card" key={index}>
              <div className="patent-meta">
                <span>{patent.date}</span>
                <span>{patent.inventor}</span>
              </div>
              <h3>{patent.title}</h3>
              <span className="patent-number">{patent.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
