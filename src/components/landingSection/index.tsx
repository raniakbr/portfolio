import { Flex, Image, Text } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Avatar from "../../assets/avatar.png";
import React from "react";

const LandingSection: React.FC = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Image src={Avatar} alt="Avatar" borderRadius="full" boxSize={150} />
      <Text mt={4} textAlign="center">
        {"Hi, I'm Rania. I'm a passionate developer with experience in web development."}
      </Text>
    </Flex>
  );
};

export default LandingSection;
