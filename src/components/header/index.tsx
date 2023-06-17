import { Box, Flex, Link } from "@chakra-ui/react";

import React from "react";

const Header: React.FC = () => {
  return (
    <Flex as="header" justify="space-between" align="center" p={4}>
      <Flex direction="row" align="center" gap={3}>
        <Link href="https://example.com">Home</Link>
        <Link href="https://example.com/projects">Projects</Link>
        <Link href="https://example.com/about">About</Link>
      </Flex>
      <Box>
        <Link href="https://github.com/example" mr={4}>
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/example">LinkedIn</Link>
      </Box>
    </Flex>
  );
};

export default Header;
