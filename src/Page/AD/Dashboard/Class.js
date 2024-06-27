import {
  Flex,
  HStack,
  Input,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const Class = () => {
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
              Time Table
            </Text>
            <Input w={"300px"} />
          </HStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Class;
