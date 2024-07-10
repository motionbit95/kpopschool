import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ClassDetail = () => {
  return (
    <Flex w={"100%"} h={"100%"} color={"#4E4E4E"}>
      <Stack
        w={"full"}
        spacing={0}
        // divider={<StackDivide borderColor={"#E1E4E4"} />}
      >
        <Text>Class Detail</Text>
      </Stack>
    </Flex>
  );
};

export default ClassDetail;
