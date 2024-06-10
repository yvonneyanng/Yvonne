import { HStack, Stack, Text, Image } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";

import headshot from "../../assets/headshot.jpg";
import js from "../../assets/js.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import swift from "../../assets/swift.png";
import typescript from "../../assets/typescript.png";
import salesforce from "../../assets/salesforce.png";
import aws from "../../assets/aws.png";
import react from "../../assets/react.png";
import sass from "../../assets/sass.png";

const About = () => {
  const technologies = [
    js,
    typescript,
    python,
    java,
    swift,
    salesforce,
    aws,
    react,
    sass,
  ];
  return (
    <>
      <Stack
        h="100vh"
        px={{ base: "50px", md: "300px" }}
        display="flex"
        direction="column"
        justify="start"
        align="center"
        bg="#2b2b2b"
        id="about"
        spacing={{ base: "30px", md: "100px" }}
      >
        <SectionTitle title="About Me" />
        <Stack
          spacing={{ base: "30px", md: "100px" }}
          align={{ base: "center", md: "start" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack
            fontSize={{ base: "12px", md: "15px" }}
            textAlign={{ base: "center", md: "start" }}
            fontFamily="monospace"
          >
            <Text color="#fff">
              I’m a software engineer currently working with{" "}
              <b
                style={{
                  color: "#00e6e6",
                  fontWeight: "bold",
                }}
              >
                UTS Motorsports Electric
              </b>
              , where I leverage cutting-edge technology to enhance our race
              car's solutions. My passion lies in the intersection of technology
              and creativity, driving me towards my aspiration of becoming a
              Pipeline Technical Director.
            </Text>
            <Text mt={5} color="#fff">
              Here are some technologies I've been working with:
            </Text>
            <HStack spacing={3} mt={3}>
              {technologies.map((tech, index) => (
                // <HStack key={index} flexDirection="row">
                //   <Text color="#00e6e6" fontSize="10px">
                //     ▹
                //   </Text>
                //   <Text variant="body1" color="#fff">
                //     {tech}
                //   </Text>
                // </HStack>
                <Image
                  src={tech}
                  alt="Tech"
                  key={index}
                  boxSize={{ base: "20px", md: "30px" }}
                />
              ))}
            </HStack>
          </Stack>
          <Image
            src={headshot}
            alt="Yvonne"
            boxSize={{ base: "150px", md: "300px" }}
            objectFit="cover"
            borderRadius="10px"
          />
        </Stack>
      </Stack>
    </>
  );
};

export default About;
