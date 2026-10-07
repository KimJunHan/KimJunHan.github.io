import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
