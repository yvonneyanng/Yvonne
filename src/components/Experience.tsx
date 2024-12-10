import {
  Box,
  Flex,
  List,
  ListIcon,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

import SectionTitle from "./SectionTitle";
import { FeedbackMessage } from "./FeedbackMessage";
import { useState, useEffect } from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

type Experience = {
  title: string;
  company: string;
  start?: Date;
  end?: Date;
  description: string[];
  location: string;
};

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/experience`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch experiences");
        }
        const data: Experience[] = await response.json();
        setExperiences(data);
        setLoading(false);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading || error) {
    return (
      <FeedbackMessage
        text={loading ? "Loading Projects..." : "Oops, something's wrong..."}
        fontColor={loading ? "#00e6e6" : "#c30010"}
        section="experience"
      />
    );
  }

  const selectedExperience = experiences[selectedIndex] || {};

  const formatDate = (dateString: Date): string => {
    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <>
      <Stack
        w="100vw"
        h={{ base: "fit-content", md: "100vh" }}
        py={{ base: "50px", md: "0" }}
        display="flex"
        direction="column"
        justify="start"
        align="center"
        bg="#1b1b1b"
        id="experience"
      >
        <SectionTitle title="Experience" />
        <Stack
          spacing="100px"
          align="start"
          mt={{ base: "0px", md: "50px" }}
          mx={{ base: "40px", md: "300px" }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            align="start"
            display={{ base: "none", md: "inline-flex" }}
            mt="10px"
          >
            {experiences.map((experience, index) => (
              <Box
                position="relative"
                key={index}
                _hover={{
                  color: "#00e6e6",
                  _after: {
                    width: "100%",
                  },
                }}
                _after={{
                  content: `""`,
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#00e6e6",
                  transition: "width 0.3s ease",
                }}
              >
                <Text
                  key={index}
                  color={index === selectedIndex ? "#00e6e6" : "#fff"}
                  onClick={() => setSelectedIndex(index)}
                  cursor="pointer"
                  fontFamily="monospace"
                  fontSize="15px"
                  fontWeight="bold"
                  py="10px"
                  px="10px"
                  whiteSpace="nowrap"
                >
                  {experience["company"]}
                </Text>
              </Box>
            ))}
          </Stack>
          <Stack fontFamily="monospace">
            <Select
              display={{ base: "inline-block", md: "none" }}
              color="#fff"
              my="25px"
              fontSize="15px"
              borderColor="#00e6e6"
              onChange={(e) => setSelectedIndex(parseInt(e.target.value))}
            >
              {experiences.map((experience, index) => (
                <option key={index} value={index}>
                  {experience["company"]}
                </option>
              ))}
            </Select>
            <Stack textAlign={{ base: "center", md: "start" }}>
              <Text
                color="#00e6e6"
                fontSize={{ base: "17px", md: "25px" }}
                mt={{ base: "0", md: "10px" }}
                fontWeight="900"
                w="full"
              >
                {selectedExperience.title || "N/A"}
              </Text>
              <Text
                variant="subtitle2"
                color="#9b9b9b"
                fontSize={{ base: "12px", md: "18px" }}
              >
                {selectedExperience.start
                  ? formatDate(selectedExperience.start)
                  : "N/A"}{" "}
                -{" "}
                {selectedExperience.end
                  ? formatDate(selectedExperience.end)
                  : "Present"}{" "}
                | {selectedExperience.location}
              </Text>
            </Stack>
            <List mt="20px" spacing="10px" fontSize="15px">
              {experiences[selectedIndex].description.map(
                (experience, index) => (
                  <Flex color="#fff" align="start" key={index}>
                    <ListIcon
                      as={VscDebugBreakpointLogUnverified}
                      color="#00e6e6"
                      fontSize={{ base: "15px", md: "20px" }}
                    />
                    <Text
                      key={index}
                      color="#fff"
                      fontSize={{ base: "12px", md: "15px" }}
                    >
                      {experience}
                    </Text>
                  </Flex>
                )
              )}
            </List>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Experience;
