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
import { FeedbackMessage } from "./FeedbackMessage";
import { FaGithubSquare } from "react-icons/fa";
import { useState, useEffect } from "react";

type Project = {
  name: string;
  description: string;
  tags: string[];
  link: string;
};

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/projects`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data: Project[] = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading || error) {
    return (
      <FeedbackMessage
        text={loading ? "Loading Projects..." : "Oops, something's wrong..."}
        fontColor={loading ? "#00e6e6" : "#c30010"}
        section="project"
      />
    );
  }

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
            <GridItem key={index} bg="#1b1b1b" py={7} px={7} borderRadius={10}>
              <HStack justify="space-between" align="center">
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="bold"
                  fontFamily="monospace"
                  color="#00e6e6"
                >
                  {project["name"]}
                </Text>
                <Icon
                  as={FaGithubSquare}
                  color="#fff"
                  fontSize={25}
                  cursor="pointer"
                  _hover={{ color: "#00e6e6" }}
                  onClick={() => window.open(project["link"], "_blank")}
                />
              </HStack>
              <Text
                color="#9b9b9b"
                mt={3}
                fontSize={{ base: "13px", md: "15px" }}
              >
                {project["description"]}
              </Text>
              <Wrap mt={5}>
                {project["tags"].map((tech, index) => (
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
