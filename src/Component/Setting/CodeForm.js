import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { popmag, popmint } from "../../App";

export const CodeForm = (props) => {
  const [errEnter, setErrEnter] = useState(false);
  const [validCode, setValidCode] = useState("");

  return (
    <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Stack align={"center"}>
        <Box boxSize={"240px"}>
          <Image src={require("../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Box w={"300px"} mt={-8}>
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
    </Flex>
  );
};
