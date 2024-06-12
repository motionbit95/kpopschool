import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight, FiStar } from "react-icons/fi";

const TeacherDetail = (props) => {
  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";

    const id = window.location.pathname.split("/").pop();
    console.log(id);

    fetch(`${host_url}/teachers/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTeacher(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Flex flex={1} direction={"column"}>
      {/* 강사 정보 */}
      <Container minW={"container.xl"}>
        <Stack py={16} spacing={8}>
          <HStack
            fontWeight={"300"}
            fontSize={"xl"}
            color={"#4E4E4E"}
            align={"center"}
          >
            <Text>Teachers</Text>
            <FiChevronRight />
            <Text>{`${teacher.category} Trainer`}</Text>
            <FiChevronRight />
            <Text color={"#00C3BA"}>{teacher.name}</Text>
          </HStack>
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={"#FFCC00"}>
              {`${teacher.category} Trainer`}
            </Text>
            <HStack justify={"space-between"} align={"flex-start"}>
              <HStack gap={4} h={"250px"}>
                <Box boxSize={"250px"} bgColor={"gray"} borderRadius={"xl"}>
                  <Image src={teacher.profile} alt={""} />
                </Box>
                <Stack h={"full"} justify={"space-between"}>
                  <Text fontSize={"3xl"} fontWeight={"600"}>
                    {teacher.name}
                  </Text>
                  <Stack spacing={0} fontSize={"lg"}>
                    <Text whiteSpace={"pre-line"}>{teacher.career}</Text>
                  </Stack>
                  <Stack spacing={0} fontSize={"sm"}>
                    <Grid
                      templateColumns={"repeat(2, 1fr)"}
                      columnGap={3}
                      maxW={"400px"}
                    >
                      <GridItem>instructor's rating</GridItem>
                      <GridItem alignContent={"center"}>
                        <Flex gap={1}>
                          {Array.from({ length: 5 }, (_, i) => (
                            <Image
                              key={i}
                              src={
                                i < teacher.rating
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
                      <GridItem>{teacher.review}</GridItem>
                      <GridItem>student</GridItem>
                      <GridItem>{teacher.student?.toLocaleString()}</GridItem>
                    </Grid>
                  </Stack>
                </Stack>
              </HStack>
              <ButtonGroup size={"lg"}>
                <IconButton
                  aria-label="famous"
                  icon={
                    <Image
                      src={require("../../Asset/Icon/star.png")}
                      alt={""}
                      size={"25px"}
                    />
                  }
                  bgColor={"white"}
                />
                <IconButton
                  aria-label="shared"
                  icon={
                    <Image
                      src={require("../../Asset/Icon/shared.png")}
                      alt={""}
                      size={"25px"}
                    />
                  }
                  bgColor={"white"}
                />
              </ButtonGroup>
            </HStack>
          </Stack>
        </Stack>
      </Container>
      {/* 강의 정보 */}
      <Tabs>
        <TabList justifyContent={"center"} borderBottomColor={"#00C3BA"}>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Lesson
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Time Tabel
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Review
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
              <Stack>
                <Text color={"#FFCC00"}>Beginner course</Text>
                <Text fontSize={"2xl"} fontWeight={"600"}>
                  Basic Vocal
                </Text>
                <HStack spacing={16}>
                  <Stack spacing={0}>
                    <Text color={"#C0C0C0"}>Month</Text>
                    <Text fontWeight={"700"} color={"#00C3BA"}>
                      3
                    </Text>
                  </Stack>
                  <Stack spacing={0}>
                    <Text color={"#C0C0C0"}>Sessions</Text>
                    <Text fontWeight={"700"} color={"#00C3BA"}>
                      12
                    </Text>
                  </Stack>
                  <Stack spacing={0}>
                    <Text color={"#C0C0C0"}>Price</Text>
                    <Text fontWeight={"700"} color={"#00C3BA"}>
                      $80 per session
                    </Text>
                  </Stack>
                </HStack>
                <Box pt={4}>
                  <Text fontSize={"xl"}>
                    There's a saying that goes in half. Learn basic
                    vocalizations and breathing techniques to sing. Basic
                    vocalizations are learned to correct inaccurate
                    pronunciations and increase the volume when on stage, and
                    breathing techniques are learned to communicate emotions
                    while singing or breathe properly. Master your assignment
                    and get ready for the next step.
                  </Text>
                </Box>
              </Stack>
            </Container>
          </TabPanel>
          <TabPanel>
            {/* 수정 필요 */}
            <Container minW={"container.xl"} py={8}>
              <TableContainer>
                <Table>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th>1period</Th>
                      <Th>2period</Th>
                      <Th>3period</Th>
                      <Th>4period</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>MON 2.19</Td>
                      <Td></Td>
                      <Td>item</Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Container>
          </TabPanel>
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
              <InputGroup h={"60px"} alignItems={"center"}>
                <Input
                  h={"full"}
                  fontSize={"lg"}
                  placeholder="You can use it after logging in. Please leave a review after taking the course"
                />
                <InputRightElement h={"full"} mr={8}>
                  <Button
                    px={8}
                    size={"sm"}
                    color={"white"}
                    bgColor={"#00C3BA"}
                  >
                    GO
                  </Button>
                </InputRightElement>
              </InputGroup>
              <HStack py={12} gap={4} align={"start"}>
                <Avatar size={"lg"} />
                <Stack w={"full"} spacing={3}>
                  <HStack justifyContent={"space-between"} align={"start"}>
                    <Stack spacing={0} color={"#4E4E4E"}>
                      <Text fontSize={"lg"}>fiatto</Text>
                      <Text fontSize={"sm"}>Advanced course|VOCAL</Text>
                    </Stack>
                    <Flex gap={1}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Image
                          key={i}
                          src={
                            i < 5 // 데이터 가져와야함
                              ? require("../../Asset/Icon/starFill.png")
                              : require("../../Asset/Icon/starDefault.png")
                          }
                          alt="star"
                          boxSize="20px" // 적절한 크기로 설정
                        />
                      ))}
                    </Flex>
                  </HStack>
                  <Text fontSize={"lg"} color={"#4E4E4E"}>
                    The teacher was very kind and taught well. Vibration, which
                    wasn't working well, was successful! I'm writing any
                    reviews. They're all dummy texts. I hope they're at least
                    150 characters long.
                  </Text>
                </Stack>
              </HStack>
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default TeacherDetail;
