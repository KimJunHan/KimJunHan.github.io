import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/kimjunhan.jpg"}
            alt="Junhan Kim"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/KimJunHan"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.youtube.com/@andthensome9277"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://blog.naver.com/kim_jun_han"
              target="_blank"
              rel="noreferrer"
            >
              <ArticleIcon />
            </a>
            <a href="mailto:kimjunhan1605@gmail.com">
              <EmailIcon />
            </a>
          </div>
          <h1>Junhan Kim</h1>
          <p>Autonomous Driving Perception Researcher</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/KimJunHan"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.youtube.com/@andthensome9277"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://blog.naver.com/kim_jun_han"
              target="_blank"
              rel="noreferrer"
            >
              <ArticleIcon />
            </a>
            <a href="mailto:kimjunhan1605@gmail.com">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      {/* About Me & Research Journey */}
      <div className="about-content">
        <div className="items-container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm Junhan, a Ph.D. candidate at the Vehicle Intelligence Laboratory
            (VILAB), Graduate School of Automobile and Mobility, Kookmin
            University. I completed the Ph.D. coursework in August 2026 and
            expect to receive the degree in August 2027.
          </p>
          <p className="about-text">
            I specialize in autonomous driving perception &mdash; BEV
            representation learning, camera&ndash;radar/LiDAR fusion, 3D
            detection and tracking, and real-time edge deployment.
          </p>

          <h2 className="section-title" style={{ marginTop: "2.5rem" }}>
            Research Journey
          </h2>
          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-marker" />
              <div className="journey-content">
                <span className="journey-date">2021</span>
                <h3>Starting Point &mdash; Industry Vision Developer</h3>
                <p>
                  Joined Anyractive as an AI/Vision developer working on Hyundai
                  Mobis advance vehicle projects (M.VISION HI, POP, H2GO).
                  Developed real-time camera and LiDAR algorithms for gaze
                  tracking, gesture recognition, and pedestrian detection across
                  a system spanning eight PCs. Building LiDAR-based pedestrian
                  detection there is what moved me into perception research.
                </p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker" />
              <div className="journey-content">
                <span className="journey-date">2024</span>
                <h3>Transition to Research &mdash; Ph.D. at VILAB</h3>
                <p>
                  After completing my M.S. and 2 years 10 months in industry, I
                  entered the Ph.D. program to fully dedicate myself to
                  autonomous driving perception. I began working on a national
                  R&amp;D project, building a data collection platform on a
                  Sonata with 6 cameras, 1 LiDAR, GPS, and IMU.
                </p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker" />
              <div className="journey-content">
                <span className="journey-date">2025</span>
                <h3>BEV Segmentation &mdash; SegMam</h3>
                <p>
                  Published my first SCIE paper in IEEE Access. I reformulated
                  Transformer cross-attention as Mamba's selective scan, using
                  pseudo-LiDAR from monocular depth as the value stream &mdash;
                  no real LiDAR or radar anywhere in the pipeline. The model
                  showed +13.6 IoU improvement in night conditions.
                </p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker active" />
              <div className="journey-content">
                <span className="journey-date">2026</span>
                <h3>Detection &amp; Tracking &mdash; GaussianDT</h3>
                <p>
                  Presented GaussianDT at AVEC 2026 in Tsukuba, Japan, where it
                  was selected as a Best Paper Award Finalist. The work defines
                  an augmented 3D Gaussian carrying a motion vector and identity
                  embedding, using radar Doppler as a velocity prior. Now
                  working towards my degree with continued research in
                  real-time BEV perception on edge devices.
                </p>
              </div>
            </div>
          </div>

          <div className="facts-grid">
            <div className="fact-card">
              <span className="fact-value">5 yrs 4 mos</span>
              <span className="fact-label">Relevant Experience</span>
              <span className="fact-sub">since 2021.05</span>
            </div>
            <div className="fact-card">
              <span className="fact-value">5</span>
              <span className="fact-label">First-author Papers</span>
              <span className="fact-sub">incl. 1 SCIE</span>
            </div>
            <div className="fact-card">
              <span className="fact-value">3</span>
              <span className="fact-label">Patents Filed</span>
              <span className="fact-sub">all under examination</span>
            </div>
            <div className="fact-card">
              <span className="fact-value">AVEC 2026</span>
              <span className="fact-label">Best Paper Finalist</span>
              <span className="fact-sub">GaussianDT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
