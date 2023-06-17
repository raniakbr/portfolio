import { Box, Flex, Link } from "@chakra-ui/react";

import React from "react";

const Header: React.FC = () => {
  return (
    <Flex as="header" justify="space-between" align="center" p={4}>
      <Flex direction="row" align="center" gap={3}>
        <Link href="#">Home</Link>
        <Link href="#">Projects</Link>
        <Link href="#">About</Link>
      </Flex>
      <Box>
        <Link href="https://github.com/raniakbr" mr={4}>
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/rania-kebour-764a1a222/">LinkedIn</Link>
      </Box>
    </Flex>
  );
};

export default Header;
