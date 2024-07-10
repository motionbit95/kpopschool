import React, { useEffect, useState } from "react";
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
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { host_url } from "../../../App";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../../Firebase/Config";
import { popmint } from "../../../App";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    firstName: "",
    password: "",
  });
  const sendEmail = () => {
    console.log(formData);
    // 이메일 보내는 로직
    fetch(`${host_url}/users/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setStep(2);
  };

  useEffect(() => {
    auth.onIdTokenChanged((user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);
  return (
    <Center minH={"100vh"}>
      <Stack minw={"320px"} align={"center"}>
        <Box boxSize={"200px"}>
          <Image src={require("../../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Box w={"320px"} mt={-8}>
          <Image src={require("../../../Asset/Image/K-popBanner.png")} />
        </Box>
        {step === 0 && (
          <EmailSignupForm
            setStep={setStep}
            navigate={navigate}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 1 && (
          <NameSignupForm
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            sendEmail={sendEmail}
          />
        )}
        {step === 2 && (
          <ConfirmForm
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            navigate={navigate}
            sendEmail={sendEmail}
          />
        )}
      </Stack>
    </Center>
  );
};

export default SignUp;

const EmailSignupForm = ({ setStep, navigate, formData, setFormData }) => {
  const confirmPassword = () => {
    if (formData.password === formData.confirmPassword) {
      setStep(1);
      return true;
    } else {
      return false;
    }
  };
  return (
    <Stack w={"full"}>
      <Stack spacing={3} py={4}>
        <Text fontSize={"20px"} fontWeight={"600"}>
          Create your Account
        </Text>
        <Input
          size={"lg"}
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          type="password"
          size={"lg"}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Input
          size={"lg"}
          placeholder="Confirm Password"
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <Button
          color={"white"}
          fontSize={"24px"}
          bgColor={popmint}
          h={"66px"}
          onClick={() => confirmPassword()}
        >
          SIGN UP
        </Button>
      </Stack>
      <HStack px={8}>
        <Divider />
        <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
          or sign up with
        </Text>
        <Divider />
      </HStack>
      <ButtonGroup w={"full"} justifyContent={"center"} gap={2} py={4}>
        <IconButton
          borderRadius={"full"}
          onClick={() =>
            signInWithRedirect(auth, new GoogleAuthProvider()).then((res) =>
              console.log(res)
            )
          }
          icon={
            <Image src={require("../../../Asset/Icon/google.png")} w={"28px"} />
          }
        />
        <IconButton
          borderRadius={"full"}
          onClick={() =>
            signInWithRedirect(auth, new OAuthProvider("apple.com")).then(
              (res) => {
                console.log(res);
              }
            )
          }
          icon={
            <Image src={require("../../../Asset/Icon/apple.png")} w={"22px"} />
          }
        />
        <IconButton
          borderRadius={"full"}
          onClick={() => signInWithRedirect(auth, new TwitterAuthProvider())}
          icon={
            <Image
              src={require("../../../Asset/Icon/twitter.png")}
              w={"31px"}
            />
          }
        />
        <IconButton
          borderRadius={"full"}
          onClick={() =>
            signInWithRedirect(auth, new FacebookAuthProvider()).then((res) => {
              console.log(res);
            })
          }
          icon={
            <Image
              src={require("../../../Asset/Icon/facebook.png")}
              w={"16px"}
            />
          }
        />
      </ButtonGroup>
      <Stack textAlign={"center"} align={"center"}>
        <Stack w={"320px"} align={"center"}>
          <Flex
            color={popmint}
            cursor={"pointer"}
            whiteSpace={"nowrap"}
            gap={1}
          >
            By signing up, you agree to the{" "}
            <Text textDecoration={"underline"}>Terms & Conditions</Text> and the{" "}
            <Text textDecoration={"underline"}>Privacy Policy</Text>
          </Flex>
        </Stack>
        <Flex gap={4}>
          <Text fontWeight={"500"}>Already have an account?</Text>
          <Text
            color={popmint}
            cursor={"pointer"}
            onClick={() => navigate("/signin")}
          >
            Sign in
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

const NameSignupForm = ({
  setStep,
  navigate,
  formData,
  setFormData,
  sendEmail,
}) => {
  return (
    <Stack w={"full"}>
      <Stack spacing={3} py={4}>
        <Text fontSize={"20px"} fontWeight={"600"}>
          Log in to your Account
        </Text>
        <Input
          size={"lg"}
          placeholder="First Name"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <Input
          size={"lg"}
          placeholder="Last Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Button
          color={"white"}
          fontSize={"24px"}
          bgColor={popmint}
          h={"66px"}
          onClick={() => sendEmail()}
        >
          CONTINUE
        </Button>
      </Stack>
    </Stack>
  );
};

const ConfirmForm = ({
  setStep,
  formData,
  setFormData,
  navigate,
  sendEmail,
}) => {
  const [validCode, setValidCode] = useState("");
  const [errEnter, setErrEnter] = useState(false);

  const confirmValidCode = () => {
    console.log(formData.email, validCode);
    fetch(`${host_url}/users/checkVerify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        code: validCode,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        // 회원가입
        fetch(`${host_url}/users/addAuth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            firstName: formData.firstName,
            password: formData.password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.code === "success") {
              navigate("/signin");
            } else {
              // 해당 부분 정책 확인 필요
              setErrEnter(true);
              console.log(data);
            }
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack w={"full"}>
      <Stack spacing={8} py={4}>
        <Stack spacing={2}>
          <Text textAlign={"center"} fontSize={"xl"} fontWeight={"600"}>
            Confirm your Email
          </Text>
          <Stack w={"320px"} align={"center"}>
            <Flex
              gap={4}
              fontSize={"lg"}
              fontWeight={"500"}
              color={"#4E4E4E"}
              whiteSpace={"nowrap"}
            >
              <Text>Type in the code we sent to email adress</Text>
              <Text cursor={"pointer"} color={"#C0C0C0"}>
                Edit Email
              </Text>
            </Flex>
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <HStack justify={"center"}>
            <HStack
              p={3}
              border={"1px solid"}
              borderColor={errEnter ? popmag : "#E1E4E4"}
              borderRadius={"md"}
            >
              <PinInput
                onChange={(e) => {
                  setValidCode(e);
                  setErrEnter(false);
                }}
                variant={"flushed"}
                focusBorderColor={popmint}
                placeholder=""
              >
                <PinInputField
                  color={errEnter ? popmag : "black"}
                  fontSize={"24px"}
                  fontWeight={"700"}
                />
                <PinInputField
                  color={errEnter ? popmag : "black"}
                  fontSize={"24px"}
                  fontWeight={"700"}
                />
                <PinInputField
                  color={errEnter ? popmag : "black"}
                  fontSize={"24px"}
                  fontWeight={"700"}
                />
                <PinInputField
                  color={errEnter ? popmag : "black"}
                  fontSize={"24px"}
                  fontWeight={"700"}
                />
                <PinInputField
                  color={errEnter ? popmag : "black"}
                  fontSize={"24px"}
                  fontWeight={"700"}
                />
              </PinInput>
            </HStack>
          </HStack>
          {errEnter && (
            <Text color={popmag} fontSize={"24px"} textAlign={"center"}>
              Code does not match
            </Text>
          )}
        </Stack>
        <Flex gap={4} fontSize={"lg"} fontWeight={"500"} justify={"center"}>
          <Text>Didn't receive the code?</Text>
          <Text cursor={"pointer"} color={popmag} onClick={() => sendEmail()}>
            Send Again
          </Text>
        </Flex>
        <Button
          color={"white"}
          fontSize={"24px"}
          bgColor={popmint}
          h={"66px"}
          onClick={() => confirmValidCode()}
        >
          SIGN UP
        </Button>
      </Stack>
    </Stack>
  );
};
