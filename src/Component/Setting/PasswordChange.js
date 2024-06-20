import { Button, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const PasswordChange = () => {
  return (
    <Stack>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Password
      </Text>
      <Text>
        Please change your password to protect your personal information
      </Text>
      <Text>Current Password</Text>
      <Input />
      <Text>New Password</Text>
      <Input />
      <Input />
      <Text>Forgot your password?</Text>
      <Button>SAVE</Button>
    </Stack>
  );
};

export default PasswordChange;
