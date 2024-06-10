import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import { useState } from "react";

const Experience = () => {
  const experience = [
    {
      title: "Software Engineer",
      company: "UTS Motorsports Electric",
      location: "Sydney, Australia",
      date: "Mar 2024 - Present",
      description: [
        "Constructed live telemetry system using React and AWS, enabling real-time monitoring of race data.",
        "Maintained team’s website using WordPress, ensuring seamless functionality and up-to-date content.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Shang-Chin Education",
      location: "Taichung, Taiwan",
      date: "Aug 2023 - Dec 2023",
      description: [
        "Developed user interface of a Mandarin tutoring website — baodaotalk.com (first version) using Next.js.",
        "Designed an interactive quiz feature for baodaotalk.com website to enhance learning engagement.",
        "Enabled multilingual support for baodaotalk.com, accommodating 7 languages through internationalization.",
        "Collaborated with full stack developer and UI designer to help optimize user experience of website.",
      ],
    },
  ];
  const [clicked, setClicked] = useState(0);
  return (
    <>
      <Stack
        w="100vw"
        h="100vh"
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
          mt="50px"
          mx="300px"
          direction={{ base: "column", md: "row" }}
        >
          <Stack>
            {experience.map((desc, index) => (
              // <Text
              //   key={index}
              //   variant="body1"
              //   color={index === clicked ? "#00e6e6" : "#fff"}
              //   onClick={() => setClicked(index)}
              //   cursor="pointer"
              //   fontFamily="monospace"
              //   fontSize="15px"
              //   fontWeight="bold"
              //   py="10px"
              //   px="10px"
              //   whiteSpace="nowrap"
              // _hover={{
              //   borderRight: "2px solid #00e6e6",
              //   py: "15px",
              //   px: "8px",
              // }}
              // _after={{
              //   content: '""',
              //   display: "block",
              //   height: "2px",
              //   width: "0",
              //   backgroundColor: "#00e6e6",
              //   transition: "width 0.3s",
              // }}
              // >
              //   {desc.company}
              // </Text>
              <Box
                position="relative"
                display="inline-block"
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
            <Text
              color="#00e6e6"
              fontSize="25px"
              textAlign="start"
              mt="10px"
              fontWeight="900"
            >
              {experience[clicked].title}
            </Text>
            <Text variant="subtitle2" color="#9b9b9b" fontSize="20px">
              {experience[clicked].date} | {experience[clicked].location}
            </Text>
            <Stack mt="20px" spacing="20px">
              {experience[clicked].description.map((desc, index) => (
                <HStack px="0" justify="start">
                  <Text color="#00e6e6" fontSize="30px">
                    ▹
                  </Text>
                  <Text key={index} color="#fff" fontSize="15px">
                    {desc}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Experience;
