import { Box, SimpleGrid } from "@chakra-ui/react";

import ProjectCard from "../projectCard";
import React from "react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: "project-1",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      demoLink: "https://example.com/project1",
      repoLink: "https://github.com/example/project1",
    },
    {
      id: "project-2",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      demoLink: "https://example.com/project1",
      repoLink: "https://github.com/example/project1",
    },
  ];

  return (
    <Box p={8}>
      <SimpleGrid columns={2} spacing={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;
