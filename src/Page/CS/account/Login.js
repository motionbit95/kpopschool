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
  Switch,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Center minH={"100vh"}>
      <Stack minw={"320px"} align={"center"}>
        <Box boxSize={"200px"}>
          <Image src={require("../../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Box w={"320px"} mt={-8}>
          <Image src={require("../../../Asset/Image/K-popBanner.png")} />
        </Box>
        <Stack w={"full"}>
          <Stack spacing={3} py={4}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Log in to your Account
            </Text>
            <Input placeholder="Email" size={"lg"} />
            <Input placeholder="Password" size={"lg"} />
            <HStack pb={4}>
              <Switch colorScheme="cyan" />
              <Text>Remember me</Text>
            </HStack>
            <Button
              color={"white"}
              bgColor={"#00C3BA"}
              fontSize={"24px"}
              h={"66px"}
            >
              SIGN IN
            </Button>
          </Stack>
          <HStack px={8}>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              or sign in with
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
            <Text color={"#00C3BA"} cursor={"pointer"}>
              Forgot Password?
            </Text>
            <Flex gap={4}>
              <Text fontWeight={"500"}>New to K-Pop SCHOOL?</Text>
              <Text
                color={"#00C3BA"}
                cursor={"pointer"}
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Login;
