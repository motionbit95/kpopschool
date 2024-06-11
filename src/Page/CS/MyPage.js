import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const MyPage = () => {
  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Text>하이</Text>
      </Container>
    </Flex>
  );
};

export default MyPage;
