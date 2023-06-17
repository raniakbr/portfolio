import { Box, Flex, HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import React from "react";

const Header: React.FC = () => {
  const socialLinks = [
    { id: 1, name: "GitHub", url: "https://github.com/raniakbr", icon: FaGithub },
    { id: 2, name: "LinkedIn", url: "https://www.linkedin.com/in/rania-kebour-764a1a222/", icon: FaLinkedin },
  ];
  return (
    <Flex as="header" justify="space-between" align="center" p={4}>
      <Flex direction="row" align="center" gap={3}>
        <Link href="#">Home</Link>
        <Link href="#">Projects</Link>
        <Link href="#">About</Link>
      </Flex>
      <Flex>
        {socialLinks.map((link) => (
          <Link key={link.id} href={link.url} isExternal={true} mr={4}>
            <HStack spacing={2} alignContent="center">
              <Icon as={link.icon} />
              <Box>{link.name}</Box>
            </HStack>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
