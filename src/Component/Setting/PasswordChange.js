import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { popmag, popmint } from "../../App";
import { CheckCircleIcon } from "@chakra-ui/icons";

const PasswordChange = () => {
  const [isEmailCode, setIsEmailCode] = useState(false);
  const [isSecurity, setIsSecurity] = useState(false);
  return (
    <Stack color={"#4E4E4E"}>
      {!isEmailCode && !isSecurity && (
        <PasswordForm
          setIsEmailCode={setIsEmailCode}
          setIsSecurity={setIsSecurity}
        />
      )}
      {isEmailCode && <EmailCodeForm />}
      {isSecurity && <SecurityForm />}
    </Stack>
  );
};

export default PasswordChange;

const PasswordForm = (props) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifymPassword, setVerifyPassword] = useState("");

  const handlePWUpdate = (e) => {
    if (e.target.name === "current-password") {
      setCurrentPassword(e.target.value);
    } else if (e.target.name === "new-password") {
      setNewPassword(e.target.value);
    } else if (e.target.name === "verify-password") {
      setVerifyPassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    // 현재 유저 비밀번호와, 입력된 비밀번호 일치할때 진행 - 현재 구현 X
    if (newPassword === verifymPassword) {
      alert("Email code 발송");
      props.setIsEmailCode(true);
    } else if (newPassword !== verifymPassword) {
      alert("new password and verify password not match");
    }
  };
  return (
    <Stack divider={<StackDivider borderColor="gray.200" />} spacing={8}>
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
          <Input
            w={"200px"}
            name="current-password"
            onChange={handlePWUpdate}
          />
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"lg"} fontWeight={"600"}>
            New Password
          </Text>
          <Stack>
            <Input
              w={"200px"}
              placeholder="new Password"
              name="new-password"
              onChange={handlePWUpdate}
            />
            <Input
              w={"200px"}
              placeholder="verify Password"
              name="verify-password"
              onChange={handlePWUpdate}
            />
          </Stack>
          <Text color={popmint}>Forgot your password?</Text>
        </Stack>
        <Box>
          <Button color={"white"} bgColor={popmint} onClick={handleSubmit}>
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

const EmailCodeForm = (props) => {
  return (
    <Stack align={"center"}>
      <Box boxSize={"160px"}>
        <Image src={require("../../Asset/Logo/KpopLogo.png")} />
      </Box>
      <Stack align={"center"}>
        <Text fontSize={"20px"} fontWeight={"800"} color={popmint}>
          Confirm you email address
        </Text>
        <Stack spacing={0} fontSize={"sm"} align={"center"}>
          <Text>We sent a confirmation email to your accont</Text>
          <Text>
            check your email and click on the confirmation link to continue
          </Text>
          <Text pt={32} color={popmag} fontWeight={"600"} cursor={"pointer"}>
            Resend email
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

const SecurityForm = (props) => {
  const [isChange, setIsChange] = useState(false);
  const [isTurnOff, setIsTurnOff] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  return (
    <Stack pl={10} color={"#4E4E4E"} spacing={8}>
      <Stack>
        <Text fontSize={"25px"} fontWeight={"600"}>
          2 Level Verification Security Manegement
        </Text>
        <Text>
          You can change or cancel the mobile device you use for 2 level
          verification
        </Text>
      </Stack>
      <Stack>
        <Text fontSize={"lg"} fontWeight={"600"}>
          Check·Change Device
        </Text>
        <HStack>
          <Text>The device registered for 2 level authentication is</Text>
          <Text color={popmint}>iPhone 14</Text>
        </HStack>
        <Box>
          {isChange ? (
            <Stack spacing={4}>
              <Stack>
                <HStack spacing={4}>
                  <Input
                    w={"230px"}
                    placeholder="Enter your phone number"
                    focusBorderColor={popmint}
                  />
                  <Button color={"white"} bgColor={popmint}>
                    Get Code
                  </Button>
                </HStack>
                <Input
                  w={"230px"}
                  placeholder="Enter code"
                  focusBorderColor={popmint}
                />
              </Stack>
              <HStack spacing={4}>
                <Text>Didn't receive your code?</Text>
                <Text color={popmint} cursor={"pointer"}>
                  Get your code back
                </Text>
              </HStack>
            </Stack>
          ) : (
            <Button
              color={"white"}
              bgColor={popmag}
              onClick={() => setIsChange(true)}
            >
              Change
            </Button>
          )}
        </Box>
      </Stack>
      <Stack>
        <Text fontSize={"lg"} fontWeight={"600"}>
          Turn off 2-step verification completely
        </Text>
        {isComplete ? (
          <Stack>
            <HStack color={popmint} fontSize={"20px"}>
              <Text>2 level authentication is turned off</Text>
              <CheckCircleIcon />
            </HStack>
            <Text>
              You can connect your 2 level verification device at any time
            </Text>
          </Stack>
        ) : (
          <Box>
            {isTurnOff ? (
              <Stack>
                <Stack spacing={0} fontSize={"17px"} color={popmag}>
                  <Text>
                    2 level authentication is useful to manage member
                    information more securely.
                  </Text>
                  <Text>Do you still want to turn it off?</Text>
                </Stack>
                <ButtonGroup gap={3}>
                  <Button onClick={() => setIsTurnOff(false)}>Cancel</Button>
                  <Button
                    color={"white"}
                    bgColor={popmag}
                    onClick={() => setIsComplete(true)}
                  >
                    Trun it off
                  </Button>
                </ButtonGroup>
              </Stack>
            ) : (
              <Button
                color={"white"}
                bgColor={popmag}
                onClick={() => setIsTurnOff(true)}
              >
                Trun it off
              </Button>
            )}
          </Box>
        )}
      </Stack>
    </Stack>
  );
};
