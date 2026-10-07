import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SvgIcon from "@mui/material/SvgIcon";

function NaverIcon(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M16.27 3H7.73v18h2.77v-9.03L15.5 21h2.77V3h-2.77v9.03L10.5 3h-.77z" fill="currentColor"/>
    </SvgIcon>
  );
}
import { useLang } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";
import "../assets/styles/Main.scss";

function Main() {
  const { lang } = useLang();

  const socialLinks = (
    <>
      <a href="https://github.com/KimJunHan" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
      <a href="https://www.youtube.com/@andthensome9277" target="_blank" rel="noreferrer">
        <YouTubeIcon />
      </a>
      <a href="https://blog.naver.com/kim_jun_han" target="_blank" rel="noreferrer">
        <NaverIcon />
      </a>
      <a href="https://www.linkedin.com/in/junhan-kim-a82b09207/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </a>
    </>
  );

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + "/kimjunhan.jpg"} alt="Junhan Kim" />
        </div>
        <div className="content">
          <div className="social_icons">{socialLinks}</div>
          <h1>{t("hero.name", lang)}</h1>
          <p>{t("hero.role", lang)}</p>
          <div className="mobile_social_icons">{socialLinks}</div>
        </div>
      </div>

      <div className="about-content">
        <div className="items-container">
          <h2 className="section-title">{t("about.title", lang)}</h2>
          <p className="about-text">{t("about.p1", lang)}</p>
          <p className="about-text">{t("about.p2", lang)}</p>

          <h2 className="section-title" style={{ marginTop: "2.5rem" }}>
            {t("journey.title", lang)}
          </h2>
          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-marker" />
              <div className="journey-content">
                <span className="journey-date">2021</span>
                <h3>{t("journey.2021.title", lang)}</h3>
                <p>{t("journey.2021.p", lang)}</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker" />
              <div className="journey-content">
                <span className="journey-date">2024</span>
                <h3>{t("journey.2024.title", lang)}</h3>
                <p>{t("journey.2024.p", lang)}</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker" />
              <div className="journey-content">
                <span className="journey-date">2025</span>
                <h3>{t("journey.2025.title", lang)}</h3>
                <p>{t("journey.2025.p", lang)}</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker active" />
              <div className="journey-content">
                <span className="journey-date">2026</span>
                <h3>{t("journey.2026.title", lang)}</h3>
                <p>{t("journey.2026.p", lang)}</p>
              </div>
            </div>
          </div>

          <div className="facts-grid">
            <div className="fact-card">
              <span className="fact-value">5 yrs 7 mos</span>
              <span className="fact-label">{t("fact.exp", lang)}</span>
              <span className="fact-sub">{t("fact.exp.sub", lang)}</span>
            </div>
            <div className="fact-card">
              <span className="fact-value">5</span>
              <span className="fact-label">{t("fact.papers", lang)}</span>
              <span className="fact-sub">{t("fact.papers.sub", lang)}</span>
            </div>
            <div className="fact-card">
              <span className="fact-value">3</span>
              <span className="fact-label">{t("fact.patents", lang)}</span>
              <span className="fact-sub">{t("fact.patents.sub", lang)}</span>
            </div>
            <div className="fact-card">
              <span className="fact-value">AVEC 2026</span>
              <span className="fact-label">{t("fact.award", lang)}</span>
              <span className="fact-sub">GaussianDT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
