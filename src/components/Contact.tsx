import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function NaverIcon(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M16.27 3H7.73v18h2.77v-9.03L15.5 21h2.77V3h-2.77v9.03L10.5 3h-.77z" fill="currentColor"/>
    </SvgIcon>
  );
}
import { useLang } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";
import "../assets/styles/Contact.scss";

function Contact() {
  const { lang } = useLang();
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(false);
  const [subjectError, setSubjectError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const hasEmailError = email === "";
    const hasSubjectError = subject === "";
    const hasMessageError = message === "";

    setEmailError(hasEmailError);
    setSubjectError(hasSubjectError);
    setMessageError(hasMessageError);

    if (!hasEmailError && !hasSubjectError && !hasMessageError) {
      const mailtoLink = `mailto:kimjunhan1605@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `From: ${email}\n\n${message}`
      )}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t("section.contact", lang)}</h1>
          <p>{t("contact.subtitle", lang)}</p>

          {/* Contact Form */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                label="Email Address"
                placeholder="email@domain.tld"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email address" : ""}
                fullWidth
              />
              <TextField
                required
                label="Subject"
                placeholder="What's the topic?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                error={subjectError}
                helperText={subjectError ? "Please enter a subject" : ""}
                fullWidth
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={8}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>

          {/* Contact Links */}
          <h2 className="contact-links-title">{t("contact.other", lang)}</h2>
          <div className="contact-grid">
            <a
              href="mailto:kimjunhan1605@gmail.com"
              className="contact-item"
            >
              <EmailIcon />
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  kimjunhan1605@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://github.com/KimJunHan"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <GitHubIcon />
              <div>
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/KimJunHan</span>
              </div>
            </a>

            <a
              href="https://blog.naver.com/kim_jun_han"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <NaverIcon />
              <div>
                <span className="contact-label">Blog</span>
                <span className="contact-value">
                  blog.naver.com/kim_jun_han
                </span>
              </div>
            </a>

            <a
              href="https://www.youtube.com/@andthensome9277"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <YouTubeIcon />
              <div>
                <span className="contact-label">YouTube</span>
                <span className="contact-value">
                  Autonomous Driving Research Log
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/junhan-kim-a82b09207/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <LinkedInIcon />
              <div>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Junhan Kim</span>
              </div>
            </a>

            <a
              href="https://vilab.kookmin.ac.kr/vilab/index.do"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <SchoolIcon />
              <div>
                <span className="contact-label">Affiliation</span>
                <span className="contact-value">
                  Vehicle Intelligence Laboratory (VILAB)
                  <br />
                  Graduate School of Automobile and Mobility
                  <br />
                  Kookmin University, Seoul
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
