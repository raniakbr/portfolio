import { Badge, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, demoLink, repoLink }) => {
  return (
    <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
      <Flex gap={4} alignItems="flex-start" justifyContent="space-between">
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Badge colorScheme="blackAlpha">Coming soon</Badge>
      </Flex>
      <Text mb={2}>{description}</Text>
      <Button as="a" href={demoLink} colorScheme="blue" mr={2} isDisabled>
        Demo
      </Button>
      <Button as="a" href={repoLink} colorScheme="gray" isDisabled>
        Repo
      </Button>
    </Box>
  );
};

export default ProjectCard;
