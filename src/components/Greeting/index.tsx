import { Stack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Stack
        w="100vw"
        h="100vh"
        display="flex"
        direction="column"
        justify="center"
        align="center"
        bg="#1b1b1b"
        id="home"
      >
        <Stack
          w="70vw"
          h="50vh"
          p="30px"
          m="50px"
          spacing={{ base: "40px", md: "20px" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="8px solid #00e6e6" // Neon color border
          borderRadius="10px" // Optional: if you want rounded corners
          boxShadow={`
          inset 0 0 5px #00e6e6,  /* Inner light glow */
          inset 0 0 10px #00e6e6, /* More inner glow */
          0 0 5px #00e6e6,       /* Slight outer glow for depth */
          0 0 10px #00e6e6       /* More outer glow for depth */
        `}
        >
          <Text
            color="#fff"
            fontWeight="900"
            fontSize={{ base: "25px", md: "50px" }}
          >
            Hi, I'm Yvonne
          </Text>
          <Text
            textAlign="center"
            color="#9b9b9b"
            fontSize={{ base: "15px", md: "20px" }}
            fontFamily="monospace"
          >
            Welcome to my portfolio where technology meets creativity.
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
