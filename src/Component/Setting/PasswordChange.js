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
  const [isSecurity, setIsSecurity] = useState(true);
  return (
    <Stack color={"#4E4E4E"}>
      {!isEmailCode && !isSecurity && <PasswordForm />}
      {isEmailCode && <EmailCodeForm />}
      {isSecurity && <SecurityForm />}
    </Stack>
  );
};

export default PasswordChange;

const PasswordForm = (props) => {
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
          <Input w={"200px"} />
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"lg"} fontWeight={"600"}>
            New Password
          </Text>
          <Stack>
            <Input w={"200px"} placeholder="new Password" />
            <Input w={"200px"} placeholder="verify Password" />
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

const EmailCodeForm = (props) => {
  const [isCode, setIsCode] = useState(false);
  return (
    <Stack align={"center"}>
      <Box boxSize={"160px"}>
        <Image src={require("../../Asset/Logo/KpopLogo.png")} />
      </Box>
      {isCode ? <CodeForm /> : <ClickForm setIsCode={setIsCode} />}
    </Stack>
  );
};

const ClickForm = (props) => {
  return (
    <Stack align={"center"}>
      <Text fontSize={"20px"} fontWeight={"800"} color={popmint}>
        Confirm you email address
      </Text>
      <Stack spacing={0} fontSize={"sm"} align={"center"}>
        <Text>We sent a confirmation email to your accont</Text>
        <Text>
          check your email and click on the confirmation link to continue
        </Text>
        <Text
          pt={32}
          color={popmag}
          fontWeight={"600"}
          cursor={"pointer"}
          onClick={() => props.setIsCode(true)}
        >
          Resend email
        </Text>
      </Stack>
    </Stack>
  );
};

const CodeForm = (props) => {
  const [errEnter, setErrEnter] = useState(false);
  const [validCode, setValidCode] = useState("");

  return (
    <Stack align={"center"}>
      <Box w={"250px"} mt={-4}>
        <Image src={require("../../Asset/Image/K-popBanner.png")} />
      </Box>
      <Stack align={"center"} py={8}>
        <Text color={"black"} fontWeight={"600"}>
          Hello, this is K-POP School!
        </Text>
        <Text fontSize={"20px"} fontWeight={"500"}>
          Enter this code to complete the reset.
        </Text>
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
      <Stack align={"center"} spacing={0} pt={16}>
        <Text>If you didn't request this pin, we recommend you</Text>
        <Text>change your Linkedin password.</Text>
      </Stack>
      <Stack pt={8}>
        <Button color={"white"} bgColor={popmint}>
          Send
        </Button>
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
