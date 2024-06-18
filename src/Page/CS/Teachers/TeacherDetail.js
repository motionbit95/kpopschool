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
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StackDivider,
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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { TeacherCard } from "./Teachers";
import TeacherInfo from "./TeacherInfo";

const TeacherDetail = (props) => {
  const [teacher, setTeacher] = useState({});
  const [curriculums, setCurriculums] = useState([]);
  const isOkay = false;
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

  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    console.log(host_url);

    const getCurriculums = async () => {
      // 필터링은 검색을 통해서 진행한다.
      fetch(`${host_url}/curriculums/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [
            { field: "teacherId", operator: "==", value: teacher.id },
          ],
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setCurriculums(res);
        })
        .catch((err) => {
          // console.log(err);
          console.log("데이터가 없습니다");
          setCurriculums([]);
        });
    };
    getCurriculums();
    console.log(curriculums);
  }, [teacher]);

  return (
    <Flex flex={1} direction={"column"}>
      <Container minW={"container.xl"}>
        <Stack py={16} spacing={8}>
          {/* 페이지 정보 */}
          <Flex
            fontWeight={"300"}
            fontSize={"xl"}
            color={"#4E4E4E"}
            align={"center"}
            justify={"flex-end"}
          >
            <Text>Teachers</Text>
            <FiChevronRight />
            <Text>{`${teacher.category} Trainer`}</Text>
            <FiChevronRight />
            <Text color={"#00C3BA"}>{teacher.name}</Text>
          </Flex>
          {/* 강사 정보 */}
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={"#FFCC00"}>
              {`${teacher.category} Trainer`}
            </Text>
            <TeacherInfo teacher={teacher} />
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
              <Stack divider={<StackDivider />} spacing={16}>
                {curriculums.map((item) => (
                  <Stack>
                    <Text
                      color={
                        item.difficulty === "Beginner"
                          ? "#FFCC00"
                          : item.difficulty === "Intermediate"
                          ? "#00C3BA"
                          : item.difficulty === "Advanced"
                          ? "#00B2FF"
                          : "#FF3CA2"
                      }
                      fontSize={"lg"}
                    >{`${item.difficulty} course`}</Text>
                    <Text fontSize={"2xl"} fontWeight={"600"}>
                      {item.title}
                    </Text>
                    <HStack spacing={16}>
                      <Stack spacing={0}>
                        <Text color={"#C0C0C0"}>Month</Text>
                        <Text fontWeight={"700"} color={"#00C3BA"}>
                          {item.month}
                        </Text>
                      </Stack>
                      <Stack spacing={0}>
                        <Text color={"#C0C0C0"}>Sessions</Text>
                        <Text fontWeight={"700"} color={"#00C3BA"}>
                          {item.sessions}
                        </Text>
                      </Stack>
                      <Stack spacing={0}>
                        <Text color={"#C0C0C0"}>Price</Text>
                        <Text fontWeight={"700"} color={"#00C3BA"}>
                          {item.price}
                        </Text>
                      </Stack>
                    </HStack>
                    <Box pt={4}>
                      <Text fontSize={"lg"} whiteSpace={"pre-line"}>
                        {item.description}
                      </Text>
                    </Box>
                    <Box
                      w={"100%"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      {isOkay ? (
                        <Button size={"lg"} bgColor={"#FF3CA2"} color={"white"}>
                          APPLY
                        </Button>
                      ) : (
                        <Button size={"lg"} bgColor={"#00B2FF"} color={"white"}>
                          CONTINUE
                        </Button>
                      )}
                    </Box>
                  </Stack>
                ))}
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
                              ? require("../../../Asset/Icon/starFill.png")
                              : require("../../../Asset/Icon/starDefault.png")
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
