import { HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";

import { BsInstagram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const icons = [
    {
      icon: FaGithub,
      link: "https://github.com/yvonneyanng",
    },
    {
      icon: ImLinkedin,
      link: "https://www.linkedin.com/in/yungchi-yang",
    },
    {
      icon: BsInstagram,
      link: "https://www.instagram.com/yvonneyanng/",
    },
  ];
  return (
    <>
      <Stack
        bg="#1b1b1b"
        w="100%"
        px={10}
        py={7}
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text fontFamily="monospace" color="#9b9b9b">
          &copy; All Rights Reserved by Yvonne Yang.
        </Text>
        <HStack color="#9b9b9b" spacing={5}>
          <Link
            href="mailto:message@yvonneyang.me"
            isExternal
            cursor="pointer"
            _hover={{ color: "#00e6e6" }}
          >
            <MdEmail fontSize={25} color="blue.500" />
          </Link>
          {icons.map((icon, index) => (
            <Icon
              as={icon.icon}
              fontSize={20}
              key={index}
              onClick={() => window.open(icon.link, "_blank")}
              cursor="pointer"
              _hover={{ color: "#00e6e6" }}
            />
          ))}
        </HStack>
      </Stack>
    </>
  );
};

export default Footer;
