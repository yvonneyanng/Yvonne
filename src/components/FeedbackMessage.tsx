import { Stack, Text } from "@chakra-ui/react";

type FeedbackMessageProps = {
  text: string;
  fontColor: string;
  section: string;
};

export const FeedbackMessage = ({
  text,
  fontColor,
  section,
}: FeedbackMessageProps) => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bg={section === "project" ? "#2b2b2b" : "#1b1b1b"}
    >
      <Text
        fontWeight={700}
        fontSize={{ base: "14px", md: "18px" }}
        letterSpacing=".3rem"
        color="#ffffff"
        textAlign={{ base: "center", md: "left" }}
        textShadow={`
          0 0 5px ${fontColor}, 
          0 0 10px ${fontColor}, 
          0 0 20px ${fontColor}, 
          0 0 30px ${fontColor}, 
          0 0 40px ${fontColor}, 
          0 0 55px ${fontColor}, 
          0 0 75px ${fontColor}
        `}
        cursor="pointer"
      >
        {text}
      </Text>
    </Stack>
  );
};
