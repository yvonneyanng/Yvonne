import {
  Stack,
  Text,
  Grid,
  GridItem,
  Tag,
  Wrap,
  HStack,
  Icon,
} from "@chakra-ui/react";

import SectionTitle from "./SectionTitle";
import { FaGithubSquare } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      name: "Virtual Painter",
      introduction: "Hand Tracking Drawing Application",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      link: "https://github.com/yvonneyanng/virtual-painter",
    },
    {
      name: "LinkedOut",
      introduction: "Cross-Platform Mobile Application",
      technologies: ["React Native", "Expo CLI"],
      link: "https://github.com/yvonneyanng/LinkedOut",
    },
    {
      name: "Triolingo",
      introduction: "iOS Application",
      technologies: ["Swift"],
      link: "https://github.com/yvonneyanng/Triolingo",
    },
    // Add more projects as needed
  ];
  return (
    <>
      <Stack
        w="100vw"
        h={{ base: "fit-content", md: "100vh" }}
        align="center"
        bg="#2b2b2b"
        id="projects"
        py={{ base: "50px", md: "0" }}
      >
        <SectionTitle title="Projects" />

        <Grid
          w={{ base: "90vw", md: "70vw" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={5}
          mt={{ base: "20px", md: "50px" }}
        >
          {projects.map((project, index) => (
            <GridItem
              key={index}
              bg="#1b1b1b"
              py={7}
              px={7}
              borderRadius={10}
              // boxShadow={`
              //   inset 0 0 5px #00e6e6,  /* Inner light glow */
              //   inset 0 0 10px #00e6e6, /* More inner glow */
              //   0 0 5px #00e6e6,       /* Slight outer glow for depth */
              //   0 0 10px #00e6e6       /* More outer glow for depth */
              // `}
            >
              <HStack justify="space-between" align="center">
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="bold"
                  fontFamily="monospace"
                  color="#00e6e6"
                >
                  {project.name}
                </Text>
                <Icon
                  as={FaGithubSquare}
                  color="#fff"
                  fontSize={25}
                  cursor="pointer"
                  _hover={{ color: "#00e6e6" }}
                  onClick={() => window.open(project.link, "_blank")}
                />
              </HStack>
              <Text
                color="#9b9b9b"
                mt={5}
                fontSize={{ base: "13px", md: "15px" }}
              >
                {project.introduction}
              </Text>
              <Wrap mt={5}>
                {project.technologies.map((tech, index) => (
                  <Tag key={index} fontSize={{ base: "13px", md: "15px" }}>
                    {tech}
                  </Tag>
                ))}
              </Wrap>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default Project;
