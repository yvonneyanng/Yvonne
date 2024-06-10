import { HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const pages = ["Home", "About", "Experience", "Projects"];

function Navbar() {
  const [navBackground, setNavBackground] = useState("transparent");

  const handleScroll = () => {
    const show = window.scrollY > 50;
    setNavBackground(show ? "rgba(0, 0, 0, 0.8)" : "transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HStack
        position="fixed"
        bg={navBackground}
        transition="background-color 0.5s ease"
        backdropFilter={`blur(${window.scrollY / 100}px)`}
        w="100%"
        px={10}
        py={7}
        justify="space-between"
      >
        <Text
          fontFamily="monospace"
          fontWeight={700}
          fontSize={20}
          letterSpacing=".3rem"
          color="#ffffff"
          textShadow={`
                0 0 5px #00e6e6, 
                0 0 10px #00e6e6, 
                0 0 20px #00e6e6, 
                0 0 30px #00e6e6, 
                0 0 40px #00e6e6, 
                0 0 55px #00e6e6, 
                0 0 75px #00e6e6
              `}
          cursor="pointer"
        >
          Yvonne Yang
        </Text>

        <HStack>
          {pages.map((page) => (
            <Link
              key={page}
              to={page.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
            >
              <Text
                fontWeight={700}
                letterSpacing=".2rem"
                color="#fff"
                cursor="pointer"
                ml={10}
                _hover={{ color: "#00e6e6" }}
              >
                {page}
              </Text>
            </Link>
          ))}
        </HStack>
      </HStack>
    </>
  );
}
export default Navbar;