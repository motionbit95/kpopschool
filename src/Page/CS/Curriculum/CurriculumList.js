import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { popyellow, popblue, popmint, popmag } from "../../../App";

const CurriculumList = () => {
  const location = useLocation();
  const { state } = location;
  const { item } = state;
  return (
    <Flex flex={1} direction={"column"} pb={16}>
      <Container minW={"container.xl"}>
        <Stack py={16} spacing={8}>
          <Flex
            fontWeight={"300"}
            fontSize={"xl"}
            color={"#4E4E4E"}
            align={"center"}
            justify={"flex-end"}
          >
            <Text>Curriculum</Text>
            <FiChevronRight />
            <Text>Intro</Text>
            <FiChevronRight />
            <Text>{item.category}</Text>
            <FiChevronRight />
            <Text color={popmint}>{`${item.difficulty} Course`}</Text>
          </Flex>
          <Stack spacing={4}>
            <Text
              fontSize={"3xl"}
              fontWeight={"600"}
              color={
                item.difficulty === "Beginner"
                  ? popyellow
                  : item.difficulty === "Intermediate"
                  ? popmint
                  : item.difficulty === "Advanced"
                  ? "#00B2FF"
                  : popmag
              }
            >
              {`${item.difficulty} course`}
            </Text>
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
                    <Text fontWeight={"700"} fontSize={"22px"}>
                      Title
                    </Text>
                    <HStack spacing={8}>
                      <Text>Trainer</Text>
                      <Text>ZEN</Text>
                      <Flex gap={1} pb={2}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Image
                            key={i}
                            src={
                              i < 4
                                ? require("../../../Asset/Icon/starFill.png")
                                : require("../../../Asset/Icon/starDefault.png")
                            }
                            alt="star"
                            boxSize="24px" // 적절한 크기로 설정
                            cursor={"pointer"}
                          />
                        ))}
                      </Flex>
                    </HStack>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Text>
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
        </Stack>
      </Container>
    </Flex>
  );
};

export default CurriculumList;
