import React, { useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Publications,
  Community,
  PersonalProject,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./index.scss";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <LanguageProvider>
      <div className="main-container">
        <Navigation />
        <FadeIn transitionDuration={700}>
          <Main />
          <Expertise />
          <Timeline />
          <Project />
          <Publications />
          <Community />
          <PersonalProject />
          <Contact />
        </FadeIn>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
