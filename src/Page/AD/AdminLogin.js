import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AdminLogin = () => {
  return (
    <Center minH={"100vh"}>
      <Stack align={"center"} w={"520px"}>
        <Box boxSize={"340px"}>
          <Image src={require("../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Stack spacing={12} w={"full"}>
          <Text
            textAlign={"center"}
            color={"#00C3BA"}
            fontSize={"4xl"}
            fontWeight={"800"}
          >
            K-POP School admin
          </Text>
          <Stack w={"full"}>
            <Input placeholder="ID" />
            <Input placeholder="Password" />
          </Stack>
        </Stack>
        <Box pt={16}>
          <Button size={"lg"} color={"white"} bgColor={"#00C3BA"}>
            SIGN IN
          </Button>
        </Box>
      </Stack>
    </Center>
  );
};

export default AdminLogin;
