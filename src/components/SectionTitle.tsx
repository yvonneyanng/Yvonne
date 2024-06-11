import { Text } from "@chakra-ui/react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Text
      color="#fff"
      fontWeight="900"
      fontSize={{ base: "30px", md: "50px" }}
      textAlign="left"
      mt={{ base: "0", md: "170px" }}
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
