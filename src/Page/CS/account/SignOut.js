import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  Radio,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { host_url, popblue, popmint } from "../../../App";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/Config";

const SignOut = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [currentPassword, setCurrentPassword] = useState("");
  const confirmPassword = () => {
    // 현재 유저의 패스워드 비교
    // 소셜 로그인의 경우는?
    // TODO - 패스워드 일치 시
    // 탈퇴
    console.log("currentPassword", currentPassword, auth.currentUser.uid);

    fetch(`${host_url}/users/deleteAuth/${auth.currentUser.uid}`)
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        setStep(step + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Center>
      <Stack w={"320px"} align={"center"} py={16}>
        <Box boxSize={"200px"}>
          <Image src={require("../../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Box w={"full"} mt={-8}>
          <Image src={require("../../../Asset/Image/K-popBanner.png")} />
        </Box>
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && (
          <Step3 onChange={(e) => setCurrentPassword(e.target.value)} />
        )}
        {step === 3 && <Step4 />}
        <Button
          onClick={() => {
            step === 2
              ? confirmPassword()
              : step === 3
              ? navigate("/")
              : setStep(step + 1);
          }}
          bgColor={popmint}
          color={"white"}
          size={"lg"}
          w={"full"}
        >
          {step === 3 ? "HOME" : "CONTINUE"}
        </Button>
      </Stack>
    </Center>
  );
};

export default SignOut;

const Step1 = () => {
  return (
    <VStack spacing={4} py={8}>
      <Text
        whiteSpace={"nowrap"}
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"lg"}
      >
        Do you really want to leave K-Pop School?
      </Text>
      <Text textAlign={"center"} fontSize={"md"}>
        When re-registering, usage history will not be restored.
      </Text>
      <Text textAlign={"center"} fontSize={"sm"} color={"gray.500"}>
        {`Personal information of withdrawn members will be stored safely \nfor
          a certain period of time in accordance with relevant laws and \nwill
          be automatically destroyed thereafter.`}
      </Text>
    </VStack>
  );
};
const Step2 = () => {
  const items = [
    "There is no class I want to take",
    "I have another account",
    "Teaching quality does not meet expectations",
    "Experienced inconvenience in using the service",
    "Use other similar services",
    "etc",
  ];
  return (
    <VStack py={4} whiteSpace={"nowrap"}>
      <Text
        whiteSpace={"nowrap"}
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"md"}
        py={2}
      >
        Please tell us the reason for your withdrawal
      </Text>
      <Stack>
        {items.map((item) => (
          <Stack>
            <HStack>
              <Radio />
              <Text>{item}</Text>
            </HStack>
            {item === "etc" && (
              <Input
                placeholder="Please provide reason"
                variant={"flushed"}
                mx={8}
              />
            )}
          </Stack>
        ))}
      </Stack>
    </VStack>
  );
};
const Step3 = (props) => {
  return (
    <Stack py={4}>
      <Text
        whiteSpace={"nowrap"}
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"md"}
        py={2}
      >
        Enter your password to close your account
      </Text>
      <Input type="password" placeholder="Password" onChange={props.onChange} />
    </Stack>
  );
};
const Step4 = () => {
  return (
    <Stack py={8}>
      <Text
        fontSize={"20px"}
        fontWeight={"600"}
        color={popblue}
        align={"center"}
        py={4}
        whiteSpace={"pre-line"}
      >
        {"Goodbye!\nHope to see you again"}
      </Text>
      <Text align={"center"}>{"we closed your account"}</Text>
    </Stack>
  );
};
