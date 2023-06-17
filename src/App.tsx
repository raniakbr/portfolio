import ContactSection from "./components/contactSection";
import { Container } from "@chakra-ui/react";
import Header from "./components/header";
import LandingSection from "./components/landingSection";
import ProjectsSection from "./components/projectsSection";
import React from "react";

const App: React.FC = () => {
  return (
    <Container p={4} maxW="container.lg" mx="auto">
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
};

export default App;
