import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useBreakpointValue,
} from "@chakra-ui/react";

const JobList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const isHorizontal = useBreakpointValue({ base: true, md: false });

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

  return (
    <Box>
      <Tabs
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant="enclosed"
      >
        <TabList>
          {experience.map((key, i) => (
            <Tab key={i}>{isHorizontal ? `0${i}.` : key}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {experience.map((key, index) => (
            <TabPanel key={index} p={3}>
              <Box as="span" fontWeight="bold">
                {experience[key]["jobTitle"]} {key}
              </Box>
              <Box as="div">{experience[key]["duration"]}</Box>
              <ul>
                {experience[key]["desc"].map((descItem, idx) => (
                  <li key={idx}>{descItem}</li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default JobList;
