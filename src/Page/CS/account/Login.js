import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Center minH={window.innerHeight}>
      <Stack w={"320px"} align={"center"}>
        <Box boxSize={"200px"}>
          <Image src={require("../../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Box w={"full"} mt={-8}>
          <Image src={require("../../../Asset/Image/K-popBanner.png")} />
        </Box>
        <Stack w={"full"}>
          <Stack spacing={3} py={4}>
            <Text>Log in to your Account</Text>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <HStack pb={4}>
              <Box w={"100px"} h={"30px"} bgColor={"blue"} />
              <Text>Remember me</Text>
            </HStack>
            <Button size={"lg"} h={"66px"}>
              SIGN IN
            </Button>
          </Stack>
          <HStack px={8}>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              or sign up with
            </Text>
            <Divider />
          </HStack>
          <ButtonGroup
            size={"lg"}
            w={"full"}
            justifyContent={"center"}
            gap={2}
            py={4}
          >
            <IconButton
              borderRadius={"full"}
              icon={
                <Image
                  src={require("../../../Asset/Icon/google.png")}
                  w={"28px"}
                />
              }
            />
            <IconButton
              borderRadius={"full"}
              icon={
                <Image
                  src={require("../../../Asset/Icon/apple.png")}
                  w={"22px"}
                />
              }
            />
            <IconButton
              borderRadius={"full"}
              icon={
                <Image
                  src={require("../../../Asset/Icon/twitter.png")}
                  w={"31px"}
                />
              }
            />
            <IconButton
              borderRadius={"full"}
              icon={
                <Image
                  src={require("../../../Asset/Icon/facebook.png")}
                  w={"16px"}
                />
              }
            />
          </ButtonGroup>
          <Stack textAlign={"center"} align={"center"}>
            <Text>Forgot Password?</Text>
            <Flex gap={4}>
              <Text>New to K-Pop SCHOOL?</Text>
              <Text>Sign up</Text>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Login;
