import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
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
          href="https://www.linkedin.com/in/junhan-kim-a82b09207/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2026 Junhan Kim</p>
    </footer>
  );
}

export default Footer;
