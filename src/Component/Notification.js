import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";

const Notification = () => {
  return (
    <Stack divider={<StackDivider />} spacing={0}>
      <Stack p={4}>
        <Text>Class</Text>
        <Box
          border={"1px solid black"}
          borderRadius={"md"}
          w={"240px"}
          h={"100px"}
        ></Box>
      </Stack>
      <Stack p={4}>
        <Text>new Class is open</Text>
        <Text>A new class of interested teacher ZEN’s has opened</Text>
      </Stack>
      <Stack p={4}>
        <Text>Class is Over</Text>
        <Text>Let’s go to leave a review</Text>
      </Stack>
    </Stack>
  );
};

export default Notification;
