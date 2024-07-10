import {
  Box,
  Button,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { popmint } from "../../App";

const PasswordChange = () => {
  return (
    <Stack
      color={"#4E4E4E"}
      divider={<StackDivider borderColor="gray.200" />}
      spacing={8}
    >
      <Stack spacing={8} pl={10}>
        <Stack spacing={3}>
          <Text fontSize={"25px"} fontWeight={"600"}>
            Password
          </Text>
          <Text>
            Please change your password to protect your personal information
          </Text>
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"lg"} fontWeight={"600"}>
            Current Password
          </Text>
          <Input w={"200px"} />
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"lg"} fontWeight={"600"}>
            New Password
          </Text>
          <Stack>
            <Input w={"200px"} />
            <Input w={"200px"} />
          </Stack>
          <Text color={popmint}>Forgot your password?</Text>
        </Stack>
        <Box>
          <Button color={"white"} bgColor={popmint}>
            SAVE
          </Button>
        </Box>
      </Stack>
      <Stack pl={10}>
        <Stack spacing={3}>
          <Text fontSize={"25px"} fontWeight={"600"}>
            2 Level Verification Security
          </Text>
          <Text>
            Increase your security by registering your mobile phone number
          </Text>
        </Stack>
        <HStack>
          <Input w={"200px"} />
          <Button color={"white"} bgColor={popmint}>
            Get Code
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default PasswordChange;
