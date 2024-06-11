import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Cummunity = () => {
  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Box py={6}>
          <Text
            fontSize={"5xl"}
            fontWeight={"bold"}
            color={"rgba(255, 60, 162, 1)"}
          >
            Curriculum
          </Text>
        </Box>
      </Container>
    </Flex>
  );
};

export default Cummunity;
