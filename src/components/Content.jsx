import React from "react";
import profile from "../assets/profile.jpg";
import evershade from "../assets/evershade.png";
import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";

const Content = () => {
  return (
    <VStack width={"inherit"} margin={"100px auto"}>
      {/* Home and About Me Section*/}
      <Box width={"100%"}>
        <Flex
          padding={5}
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src={profile}
            height={"120px"}
            width={"120px"}
            borderRadius={"50%"}
          />
          <VStack align={"left"}>
            <Heading fontWeight={"bold"} fontSize={40}>
              Sanskriti
            </Heading>
            <Text fontSize={25}>Frontend Developer</Text>
          </VStack>
        </Flex>
      </Box>
      {/* Skills infinite slider */}
      <Heading>Skills</Heading>

      {/* About me section */}
      <Box width={"100%"} padding={5}>
        <VStack align={"left"}>
          <Heading fontSize={30}>About Me</Heading>
          <Text fontSize={13}>
            Eager to learn and adapt to new frameworks, I thrive in
            collaborative environments and am committed to community engagement.
            My experience spans building responsive web applications,
            open-source contributions, and developing user-centric solutions,
            reflecting a dedication to continuous growth and impactful teamwork.
          </Text>
        </VStack>
      </Box>
      <Box align={"left"} width={"100%"} padding={5}>
        <Heading fontSize={30} marginBottom={5}>
          Projects
        </Heading>
        <Flex className="project1" justifyContent={"space-between"}>
          <Box color={"gray.500"} fontWeight={"bold"}>
            Dec 2024
          </Box>
          <VStack width={"70%"} fontSize={13} gap={2} align={"left"}>
            <Image src={evershade} height={100} width={200} borderRadius={"5px"}/>
            <Text>
              EverShade is a digital platform revolutionizing the beauty
              industry by combining sustainability and inclusivity. This project
              integrates Firebase for user authentication, cart and wishlist
              management.
            </Text>
            <Link
              color={"gray.400"}
              href="https://github.com/sanskriti2005/ever-shade"
              _hover={{ textDecoration: "underline" }}
            >
              Deployed Link &#8599;
            </Link>
            <Link
              color={"gray.400"}
              href="https://sanskriti2005.github.io/ever-shade/"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={'bolder'} color={"gray.500"}>&#x2022; HTML &#x2022; CSS &#x2022; JavaScript &#x2022; Firebase</Text>
          </VStack>
        </Flex>
        {/* Anzone */}
        {/* OllamaBot */}
        {/* Asteroid tracker */}
      </Box>
      <Heading>Experience</Heading>
      <Heading>Reach out to me section</Heading>
    </VStack>
  );
};

export default Content;
