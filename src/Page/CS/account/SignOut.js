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
} from "@chakra-ui/react";
import { host_url } from "../../../App";

const SignOut = () => {
  const [step, setStep] = useState(0);
  const confirmPassword = () => {
    // 현재 유저의 패스워드 비교
    // 소셜 로그인의 경우는?
    // TODO - 패스워드 일치 시
    // 탈퇴
    const uid = "ombyTaM13UVeTZ5SJCNcWbgoOgB3";
    fetch(`${host_url}/users/deleteAuth/${uid}`)
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
        {step === 2 && <Step3 />}
        {step === 3 && <Step4 />}
        <Button onClick={() => confirmPassword()}>CONTINUE</Button>
      </Stack>
    </Center>
  );
};

export default SignOut;

const Step1 = () => {
  return (
    <Stack>
      <Text>Do you really want to leave K-Pop School?</Text>
      <Text>When re-registering, usage history will not be restored.</Text>
      <Text>
        {`Personal information of withdrawn members will be stored safely \nfor
          a certain period of time in accordance with relevant laws and \nwill
          be automatically destroyed thereafter.`}
      </Text>
    </Stack>
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
    <Stack>
      <Text>Please tell us the reason for your withdrawal</Text>
      <Stack>
        {items.map((item) => (
          <Stack>
            <HStack>
              <Radio />
              <Text>{item}</Text>
            </HStack>
            {item === "etc" && <Input />}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
const Step3 = () => {
  return (
    <Stack>
      <Text>Enter your password to close your account</Text>
      <Input />
    </Stack>
  );
};
const Step4 = () => {
  return (
    <Stack>
      <Text>we closed your account</Text>
      <Text>
        Goodbye!
        <br />
        Hope to see you again
      </Text>
    </Stack>
  );
};
