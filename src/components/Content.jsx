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
        <Flex
          className="project2"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box color={"gray.500"} fontWeight={"bold"}>
            Dec 2024
          </Box>
          <VStack width={"70%"} fontSize={13} gap={2} align={"left"}>
            <Image
              src={evershade}
              height={100}
              width={200}
              borderRadius={"5px"}
            />
            <Heading>EverShade</Heading>
            <Text>
              EverShade is a digital platform revolutionizing the beauty
              industry by combining sustainability and inclusivity. This project
              integrates Firebase for user authentication, cart and wishlist
              management.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/ever-shade"
              _hover={{ textDecoration: "underline" }}
            >
              Deployed Link &#8599;
            </Link>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://sanskriti2005.github.io/ever-shade/"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; HTML &#x2022; CSS &#x2022; JavaScript &#x2022; Firebase
            </Text>
          </VStack>
        </Flex>

        {/* Anzone */}
        <Flex
          className="project2"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box color={"gray.500"} fontWeight={"bold"}>
            Sep 2024
          </Box>
          <VStack width={"70%"} fontSize={13} gap={2} align={"left"}>
            <Image
              src={anzone}
              height={"50px"}
              width={"50px"}
              borderRadius={"2px"}
            />
            <Heading>Anzone</Heading>
            <Text>
              An AI/ML-driven women's safety app providing real-time alerts, SOS
              support, and safety advice in high-risk situations. I developed
              the AI-powered chatbot for this project.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://youtu.be/tS8Ls8-YFEA"
              _hover={{ textDecoration: "underline" }}
            >
              Demo &#8599;
            </Link>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/Codess-Hackathon"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; OpenAI &#x2022; Gradio
            </Text>
          </VStack>
        </Flex>

        {/* Bank Loan Case Study */}
        <Flex
          className="project3"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box color={"gray.500"} fontWeight={"bold"}>
            Jan 2024
          </Box>
          <VStack width={"70%"} fontSize={13} gap={2} align={"left"}>
            <Heading>Bank Loan Case Study</Heading>
            <Text>
              This project aims understand a cohort of people who have
              difficulties paying back loans to make better business decisions
              as well as ensure that capable loan applicants are not rejected.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/bank-loan-case-study/blob/main/Project%20Report/Bank%20Loan%20Case%20Study.pdf"
              _hover={{ textDecoration: "underline" }}
            >
              Project Report &#8599;
            </Link>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/bank-loan-case-study"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; Pandas &#x2022; Numpy &#x2022; Matplotlib
            </Text>
          </VStack>
        </Flex>

        {/* OllamaBot */}
        <Flex
          className="project2"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box color={"gray.500"} fontWeight={"bold"}>
            Ongoing
          </Box>
          <VStack width={"70%"} fontSize={13} gap={2} align={"left"}>
            <Image
              src={ollama}
              height={"50px"}
              width={"50px"}
              borderRadius={"50%"}
            />
            <Heading>OllamaBot</Heading>
            <Text>
              A Discord bot that fetches responses from DeepSeek, LLaMA 2,
              Mistral, and other models available through Ollama.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/Codess-Hackathon"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; Ollama &#x2022; Discord.js &#x2022; Express.js
            </Text>
          </VStack>
        </Flex>
      </Box>
      <Heading>Experience</Heading>
      <Heading>Reach out to me section</Heading>
    </VStack>
  );
};

export default Content;
