import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const MyPage = () => {
  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Box py={6}>
          <Text fontSize={"5xl"} fontWeight={"bold"} color={"#00C3BA"}>
            My Page
          </Text>
        </Box>
      </Container>
    </Flex>
  );
};

export default MyPage;
