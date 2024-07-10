import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { popyellow, popblue, popmint } from "../../App";

const TeacherDashboard = () => {
  return (
    <Stack color={"#4E4E4E"} spacing={8}>
      <HStack justify={"space-between"}>
        <HStack
          border={"1px solid #E1E4E4"}
          borderRadius={"md"}
          p={6}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <HStack w={"100%"} spacing={4} flex={1} pr={10}>
            <Box
              w={"142px"}
              h={"142px"}
              bgColor={"gray.200"}
              borderRadius={"lg"}
            >
              <Image />
            </Box>
            <Stack>
              <HStack>
                <Text fontSize={"22px"} fontWeight={"700"}>
                  Jessie
                </Text>
                <Text fontSize={"lg"} color={popyellow}>{`vocal trainer`}</Text>
              </HStack>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                columnGap={3}
                maxW={"400px"}
                fontSize={"15px"}
              >
                <GridItem>instructor's rating</GridItem>
                <GridItem fontSize={"17px"} alignContent={"center"}>
                  <Flex gap={1}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Image
                        key={i}
                        src={
                          i < 5
                            ? require("../../Asset/Icon/starFill.png")
                            : require("../../Asset/Icon/starDefault.png")
                        }
                        alt="star"
                        boxSize="18px" // 적절한 크기로 설정
                      />
                    ))}
                  </Flex>
                </GridItem>
                <GridItem>review</GridItem>
                <GridItem fontSize={"17px"}>Text</GridItem>
                <GridItem>current class</GridItem>
                <GridItem fontSize={"17px"}>Text</GridItem>
                <GridItem>current student</GridItem>
                <GridItem fontSize={"17px"}>Text</GridItem>
              </Grid>
            </Stack>
          </HStack>
          <HStack px={6} gap={6}>
            <Stack align={"center"}>
              <Text fontWeight={"500"}>Total Class</Text>
              <Text color={popmint} fontWeight={"700"} fontSize={"22px"}>
                38
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Text fontWeight={"500"}>Total Student</Text>
              <Text color={popmint} fontWeight={"700"} fontSize={"22px"}>
                3560
              </Text>
            </Stack>
          </HStack>
        </HStack>
        <HStack
          justify={"space-between"}
          p={6}
          border={"1px solid #00C3BA"}
          borderRadius={"md"}
          gap={12}
          align={"end"}
        >
          <Stack>
            <Text color={"00C3BA"} fontSize={"lg"} fontWeight={"600"}>
              Upcomoing class
            </Text>
            <Stack spacing={0}>
              <Text fontWeight={"700"} fontSize={"20px"}>
                Intergrated singing
              </Text>
              <Text color={"rgba(192, 192, 192, 1)"} fontWeight={"500"}>
                Advanced Vocal course (GMT-7)
              </Text>
            </Stack>
            <Stack spacing={0} fontSize={"15px"}>
              <Text>student 5</Text>
              <Text>session 6/12</Text>
            </Stack>
          </Stack>
          <Button size={"lg"} color={"white"} bgColor={"#00B2FF"}>
            GO
          </Button>
        </HStack>
      </HStack>
      <SimpleGrid columns={2} gap={8}>
        <Stack spacing={6}>
          <Stack>
            <HStack justify={"space-between"}>
              <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
                Review on class
              </Text>
              <Text>+more</Text>
            </HStack>
            <ReviewBox />
          </Stack>
          <Stack>
            <HStack justify={"space-between"}>
              <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
                Review on Trainer
              </Text>
              <Text>+more</Text>
            </HStack>
            <ReviewBox />
          </Stack>
        </Stack>
        <Stack>
          <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
            Time Table
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default TeacherDashboard;

const ReviewBox = () => {
  return (
    <Stack border={"1px solid #E1E4E4"} borderRadius={"md"} p={6}>
      <HStack>
        <Avatar />
        <Stack w={"100%"}>
          <HStack justify={"space-between"} w={"100%"}>
            <Stack>
              <HStack>
                <Text>fiatto</Text>
                <Text>02-07-2024</Text>
              </HStack>
              <HStack divider={<StackDivider borderColor="gray.200" />}>
                <Text>Advanced course</Text>
                <Text>Intergrated singing</Text>
              </HStack>
            </Stack>
            <Box>
              <Flex gap={1}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Image
                    key={i}
                    src={
                      i < 5
                        ? require("../../Asset/Icon/starFill.png")
                        : require("../../Asset/Icon/starDefault.png")
                    }
                    alt="star"
                    boxSize="18px" // 적절한 크기로 설정
                  />
                ))}
              </Flex>
            </Box>
          </HStack>
          <Text>
            The teacher was very kind and taught well. Vibration, which wasn't
            working well, was successful! I'm writing any reviews. They're all
            dummy texts. I hope they're at least 150 characters long.
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
};
