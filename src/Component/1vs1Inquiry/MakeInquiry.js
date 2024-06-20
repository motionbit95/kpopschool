import {
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MakeInquiry = () => {
  return (
    <Stack spacing={8}>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Make an Inquiry
      </Text>
      <Stack spacing={4}>
        <Select w={"150px"} placeholder="Tag">
          <option>class</option>
          <option>payment</option>
          <option>ETC</option>
        </Select>
        <Flex gap={2}>
          <Input placeholder="Title" />
          <Text fontSize={"2xl"}>*</Text>
        </Flex>
        <Input />
        <Input />
        <Text>* Please attach files no larger than 5 MB</Text>
        <Button>SUBMIT</Button>
      </Stack>
    </Stack>
  );
};

export default MakeInquiry;
