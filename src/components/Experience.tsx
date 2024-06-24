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
import { useState } from "react";

import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const Experience = () => {
  const experience = [
    {
      title: "Software Engineer",
      company: "UTS Motorsports Electric",
      location: "Sydney, Australia",
      date: "Mar 2024 - Present",
      description: [
        "Constructed live telemetry system with several AWS services including Amplify and Timestream, enabling real-time monitoring of race data.",
        "Maintained team’s website built with WordPress, ensuring seamless functionality and up-to-date content.",
      ],
    },
    {
      title: "Podcast Editor",
      company: "Australia Career Forum",
      location: "Sydney, Australia",
      date: "Feb 2024 - Present",
      description: [
        "Edited and produced podcast content with GarageBand, improving audio quality and listener experience.",
        "Worked with producers to align editing with narrative goals, ensuring smooth flow and audience engagement.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Shang-Chin Education",
      location: "Taichung, Taiwan",
      date: "Aug 2023 - Dec 2023",
      description: [
        "Developed user interface of a Mandarin tutoring website — baodaotalk.com using Next.js.",
        "Designed an interactive quiz feature for baodaotalk.com to enhance learning engagement.",
        "Enabled multilingual support for baodaotalk.com, accommodating 7 languages through internationalization.",
        "Collaborated with full stack developer and UI designer to help optimize user experience of website.",
      ],
    },
  ];
  const [clicked, setClicked] = useState(0);
  const handleChange = (event: { target: { value: string } }) => {
    const selectedIndex = parseInt(event.target.value, 10);
    setClicked(selectedIndex);
    // You can also call setClicked or any other method to handle the selection
    console.log("Selected company:", experience[selectedIndex].company); // Just for debug
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
            {experience.map((desc, index) => (
              <Box
                position="relative"
                _hover={{
                  color: "#00e6e6", // Change text color on hover
                  _after: {
                    width: "100%",
                  },
                }}
                _after={{
                  content: `""`,
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#00e6e6", // Underline color
                  transition: "width 0.3s ease",
                }}
              >
                <Text
                  key={index}
                  color={index === clicked ? "#00e6e6" : "#fff"}
                  onClick={() => setClicked(index)}
                  cursor="pointer"
                  fontFamily="monospace"
                  fontSize="15px"
                  fontWeight="bold"
                  py="10px"
                  px="10px"
                  whiteSpace="nowrap"
                  // transition="color 0.3s ease"
                >
                  {desc.company}
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
              onChange={handleChange}
            >
              {experience.map((desc, index) => (
                <option key={index} value={index}>
                  {desc.company}
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
                {experience[clicked].title}
              </Text>
              <Text
                variant="subtitle2"
                color="#9b9b9b"
                fontSize={{ base: "12px", md: "18px" }}
              >
                {experience[clicked].date} | {experience[clicked].location}
              </Text>
            </Stack>
            <List mt="20px" spacing="10px" fontSize="15px">
              {experience[clicked].description.map((desc, index) => (
                <Flex color="#fff" align="start">
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
                    {desc}
                  </Text>
                </Flex>
              ))}
            </List>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Experience;
