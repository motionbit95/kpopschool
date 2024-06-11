import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
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
import React, { useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";

const TeacherDetail = (props) => {
  const { type, name, info, image } = props; // 수정필요

  useEffect(() => {
    console.log(props);
  });
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
            <Text>{type}</Text>
            <FiChevronRight />
            <Text color={"#00C3BA"}>{name}</Text>
          </HStack>
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={"#FFCC00"}>
              Vocal Trainer
            </Text>
            <HStack justify={"space-between"} align={"flex-start"}>
              <HStack gap={4} h={"250px"}>
                <Box boxSize={"250px"} bgColor={"gray"} borderRadius={"xl"}>
                  <Image src={image} alt={""} />
                </Box>
                <Stack justify={"space-between"} h={"full"}>
                  <Text fontSize={"3xl"} fontWeight={"600"}>
                    Lee Hwan Ho
                  </Text>
                  <Stack spacing={0} fontSize={"lg"}>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                  </Stack>
                  <Stack spacing={0} fontSize={"sm"}>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
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
                    <Text>Rating</Text>
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
