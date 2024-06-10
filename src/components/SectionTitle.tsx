import { Text } from "@chakra-ui/react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Text
      variant="h4"
      color="#fff"
      fontWeight="900"
      fontSize="50px"
      textAlign="left"
      mt="170px"
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
