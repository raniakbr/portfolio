import ContactSection from "./components/contactSection";
import Header from "./components/header";
import LandingSection from "./components/landingSection";
import ProjectsSection from "./components/projectsSection";
import React from "react";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default App;
