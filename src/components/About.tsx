import { HStack, Stack, Text, Image } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";

// import { keyframes } from "@emotion/react";
// import { css } from "@emotion/react";

import headshot from "../assets/headshot.jpg";
import js from "../assets/js.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import swift from "../assets/swift.png";
import typescript from "../assets/typescript.png";
import salesforce from "../assets/salesforce.png";
import aws from "../assets/aws.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";

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

  // const shapeChangeAnimation = keyframes`
  //   0%, 100% { transform: scale(1); border-bottom-left-radius: 50%; border-bottom-right-radius: 40%; border-top-right-radius: 30%;border-top-left-radius: 20%;}
  //   20% { transform: scale(1); border-bottom-left-radius: 40%; border-bottom-right-radius: 40%; border-top-right-radius: 40%;border-top-left-radius: 40%;  }
  //   40% { transform: scale(1); border-bottom-left-radius: 30%; border-bottom-right-radius: 30%; border-top-right-radius: 30%;border-top-left-radius: 30%;  }
  //   60% { transform: scale(1); border-bottom-left-radius: 40%; border-bottom-right-radius: 40%; border-top-right-radius: 40%;border-top-left-radius: 40%;  }
  //   80% { transform: scale(1); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-right-radius: 50%;border-top-left-radius: 50%;  }
  // `;

  const titleStyle = {
    color: "#00e6e6",
    fontWeight: "bold",
  };
  return (
    <>
      <Stack
        h={{ base: "fit-content", md: "100vh" }}
        px={{ base: "50px", md: "300px" }}
        py={{ base: "50px", md: "0" }}
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
              I’m currently a <b>Postgraduate Student</b> at{" "}
              <b style={titleStyle}>University of Technology Sydney</b>. At the
              same time, I'm a <b>Software Engineer</b> with{" "}
              <b style={titleStyle}>UTS Motorsports Electric</b>.
            </Text>
            <Text mt={5} color="#fff">
              Here are some technologies I've worked with:
            </Text>
            <HStack
              spacing={3}
              mt={3}
              mb={5}
              justify={{ base: "center", md: "start" }}
            >
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
            <Text color="#fff">
              Apart from technology, I'm also fascinated by vfx and motorsports,
              the passion of blending technology and creativity driving me
              towards a career that bridges my interests in both the VFX
              industry as a pipeline technical director and in motorsports as a
              software engineer.
            </Text>
          </Stack>
          <Image
            src={headshot}
            alt="Yvonne"
            boxSize={{ base: "150px", md: "300px" }}
            objectFit="cover"
            borderRadius="10px"
            // css={css`
            //   animation: ${shapeChangeAnimation} 2s infinite;
            // `}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default About;
