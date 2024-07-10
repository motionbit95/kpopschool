import React, { useState } from "react";
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
import { auth } from "../../../Firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { popmint } from "../../../App";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const signInUser = async (data) => {
    console.log(data);
    let response = { code: "error", message: "error" };
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        response.code = "success";
        response.message = "login success";
      })
      .catch(async (error) => {
        response.code = "error";
        response.message = error.message;
      });

    return response;
  };

  const handleClick = () => {
    signInUser(formData).then((res) => {
      if (res.code === "success") {
        navigate("/");
      } else {
        alert(res.message);
      }
    });
  };
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
            <Input
              placeholder="Email"
              size={"lg"}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Input
              type="password"
              size={"lg"}
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <HStack pb={4}>
              <Switch colorScheme="cyan" />
              <Text>Remember me</Text>
            </HStack>
            <Button
              color={"white"}
              bgColor={popmint}
              fontSize={"24px"}
              h={"66px"}
              onClick={handleClick}
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
            <Text color={popmint} cursor={"pointer"}>
              Forgot Password?
            </Text>
            <Flex gap={4}>
              <Text fontWeight={"500"}>New to K-Pop SCHOOL?</Text>
              <Text
                color={popmint}
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
