import { Box, Text, Heading, Center } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Center height="100vh" flexDirection="column">
      <Box textAlign="center" p={5}>
        <Heading>404 - Page Not Found</Heading>
        <Text fontSize="lg" my={4}>
          Sorry, the page you were looking for cannot be found!
        </Text>
      </Box>
    </Center>
  );
};

export default NotFound;
