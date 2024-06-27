import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ToastEditor from "../../../Component/ToastEditor";

const FAQ = () => {
  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack
        w={"full"}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <Stack p={16}>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Terms and Conditions Policy
            </Text>
            <Box>
              <Button>SAVE</Button>
            </Box>
          </HStack>
          <ToastEditor
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default FAQ;
