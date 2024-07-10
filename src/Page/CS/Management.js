import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { popyellow, popblue, popmint } from "../../App";

const Management = () => {
  return (
    <Stack spacing={6}>
      {[1, 2, 3].map((item) => (
        <HStack
          border={"1px solid #E1E4E4"}
          borderRadius={"md"}
          p={6}
          justify={"space-between"}
        >
          <HStack spacing={6}>
            <Box
              w={"246px"}
              h={"142px"}
              borderRadius={"lg"}
              bgColor={"gray.200"}
            >
              <Image />
            </Box>
            <Stack>
              <HStack spacing={8}>
                <HStack>
                  <Text fontWeight={"700"} fontSize={"22px"}>
                    Title
                  </Text>
                  <Text
                    fontSize={"lg"}
                    color={popyellow} // item.difficulty === "Beginner"  ? popyellow : item.difficulty === "Intermediate" ? popmint : item.difficulty === "Advanced" ? "#00B2FF": popmag
                  >{`Beginner course`}</Text>
                </HStack>
                <Flex gap={3}>
                  <Tag
                    borderRadius={"xl"}
                    bgColor={popyellow}
                    color={"white"}
                    fontWeight={"bold"}
                    px={3}
                  >
                    1:1
                  </Tag>
                  <Tag
                    borderRadius={"xl"}
                    bgColor={popyellow}
                    color={"white"}
                    fontWeight={"bold"}
                    px={3}
                  >
                    Vocal
                  </Tag>
                  <Tag
                    borderRadius={"xl"}
                    bgColor={popyellow}
                    color={"white"}
                    fontWeight={"bold"}
                    px={3}
                  >
                    Beginner
                  </Tag>
                </Flex>
              </HStack>
              <HStack
                divider={<StackDivider borderColor={"#E1E4E4"} />}
                spacing={3}
                fontSize={"15px"}
              >
                <HStack spacing={3}>
                  <Text>Number of lickes</Text>
                  <Text color={popmint}>532</Text>
                </HStack>
                <HStack spacing={3}>
                  <Text>review</Text>
                  <Text color={popmint}>15</Text>
                </HStack>
                <HStack spacing={3}>
                  <Text>student</Text>
                  <Text color={popmint}>6</Text>
                </HStack>
              </HStack>
              <HStack spacing={8}>
                <Stack>
                  <Text fontSize={"15px"}>Month</Text>
                  <Text color={popmint} fontSize={"17px"}>
                    3
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"15px"}>Sessions</Text>
                  <HStack spacing={0} fontSize={"17px"}>
                    <Text color={popmint}>2</Text>
                    <Text>/12</Text>
                  </HStack>
                </Stack>
                <Stack>
                  <Text fontSize={"15px"}>Price</Text>
                  <Text
                    color={popmint}
                    fontSize={"17px"}
                  >{`$80 per session`}</Text>
                </Stack>
                <Stack>
                  <Text fontSize={"15px"}>GMT</Text>
                  <Text color={popmint} fontSize={"17px"}>
                    LA
                  </Text>
                </Stack>
              </HStack>
            </Stack>
          </HStack>
          <Text>in Progress</Text>
        </HStack>
      ))}
    </Stack>
  );
};

export default Management;
