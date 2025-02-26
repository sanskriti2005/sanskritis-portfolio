import React from "react";
import profile from "../assets/profile.jpg";
import evershade from "../assets/evershade.png";
import anzone from "../assets/anzone.png";
import ollama from "../assets/ollama.png";
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
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import Projects from "./Projects";
import Skills from "./Skills";

const Content = () => {
  const experience = [
    {
      value: "devrhylme",
      title: "Tech Team @DevRhylme",
      timeline: "Jan 2025 - Feb 2025",
      text: "Engaged in community-driven initiatives to promote open-source software (OSS) awareness. Supported developer engagement through content creation, workshops, and advocacy.",
    },
    {
      value: "trainity",
      title: "Virtual Internship @Trainity",
      timeline: "Dec 2023 - Feb 2024",
      text: "Optimized manpower planning in Excel, reducing abandoned call rates from 30% to 10%. Ensured a consistent 10% abandon rate for night shifts with 19 agents. Utilized SQL to eliminate 13% bot accounts, enhancing platform integrity.",
    },
  ];
  return (
    <VStack width={"inherit"} height={'100%'} margin={"auto"} >
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
      <Box width={'100%'} align={'left'} padding={5}>
      <Heading fontSize={15}>Skills</Heading>
      <Skills/>
      </Box>
      

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

      {/* Project section */}
      <Box id="projects">
      <Projects />
      </Box>
      

      {/* Experience Section */}
      <Box width={"100%"} padding={5}>
        <Heading fontSize={30}>Experience</Heading>
        <AccordionRoot collapsible defaultValue={["devrhylme"]}>
          {experience.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <AccordionItemTrigger>
                {item.title}{" "}
                <Text color={"gray.500"} fontSize={10}>
                  {item.timeline}
                </Text>
              </AccordionItemTrigger>
              <AccordionItemContent>
                <Text>{item.text}</Text>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>

      {/* Contacts */}

      <Box width={"100%"} padding={5}>
        <VStack align={"left"}>
          <Heading fontSize={30}>Contacts</Heading>
          <Flex justifyContent={"space-between"} marginBottom={5}>
            <Box color={"gray.500"}>GitHub</Box>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005"
              _hover={{ textDecoration: "underline" }}
            >
              @sanskriti2005 &#8599;
            </Link>
          </Flex>
          <Flex justifyContent={"space-between"} marginBottom={5}>
            <Box color={"gray.500"}>Linkedin</Box>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://www.linkedin.com/in/sanskriti-s/"
              _hover={{ textDecoration: "underline" }}
            >
              Sanskriti S &#8599;
            </Link>
          </Flex>
          <Flex justifyContent={"space-between"} marginBottom={5}>
            <Box color={"gray.500"}>Email</Box>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="mailto:sanskritisri27@gmail.com"
              _hover={{ textDecoration: "underline" }}
            >
              sanskritisri27@gmail.com &#8599;
            </Link>
          </Flex>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Content;
