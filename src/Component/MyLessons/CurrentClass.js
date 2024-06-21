import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CurrentClass = () => {
  return (
    <Stack>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Current Class
      </Text>
      <HStack border={"1px solid #E1E4E4"} borderRadius={"md"} spacing={0}>
        <Stack flex={1} borderRight={"1px solid #E1E4E4"} py={6} px={8}>
          <HStack justify={"space-between"}>
            <Stack>
              <Text pb={"6px"} color={"#00C3BA"} fontSize={"lg"}>
                The class I'm taking now
              </Text>
              <Text fontSize={"lg"} fontWeight={"700"} color={"4E4E4E"}>
                Dance Isolation Application
              </Text>
              <Flex
                fontSize={"sm"}
                gap={4}
                fontWeight={"500"}
                color={"#C0C0C0"}
              >
                <Text>Professional Dance course</Text>
                <Text>Rose</Text>
              </Flex>
            </Stack>
            <CircularProgress size={"80px"} value={25} color="#FF3CA2">
              <CircularProgressLabel
                fontSize={"md"}
                fontWeight={"600"}
                color="#FF3CA2"
              >
                25%
              </CircularProgressLabel>
            </CircularProgress>
          </HStack>
        </Stack>
        <HStack
          flex={1}
          py={6}
          px={8}
          justify={"space-between"}
          textAlign={"center"}
        >
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Total Class
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={"#00C3BA"}>
              3
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Total Sessions
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={"#00C3BA"}>
              13
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Total Month
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={"#00C3BA"}>
              15
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Review
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={"#00C3BA"}>
              1
            </Text>
          </Stack>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default CurrentClass;
