import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import ProjectCard from "../projectCard";
import React from "react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: "project-1",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      demoLink: "#",
      repoLink: "",
    },
    {
      id: "project-2",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      demoLink: "#",
      repoLink: "",
    },
    {
      id: "project-3",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      demoLink: "#",
      repoLink: "",
    },
    {
      id: "project-4",
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      demoLink: "#",
      repoLink: "",
    },
  ];

  return (
    <Box p={8}>
      <Heading as="h2" size="lg" mb={4}>
        See my humble work
      </Heading>
      <SimpleGrid minChildWidth={400} columns={2} spacing={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;
