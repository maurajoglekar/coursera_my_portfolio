import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box bg="white" color="black" borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} alt={title} />
      <Box p="4">
        <Heading as="h3" size="md" margin="12px 0">
          {title}
        </Heading>
        <Text color="grey" margin="0 0 12px 0">
          {description}
        </Text>
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;
