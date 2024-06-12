import {
  Box,
  Container,
  Flex,
  HStack,
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
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const CurriculumDetail = () => {
  const location = useLocation();
  let { category } = location.state;
  const [format, setFormat] = useState(location.state.format);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(category, format);
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
            <Text>Curriculum</Text>
            <FiChevronRight />
            <Text>{category}</Text> {/* 댄스인지 보컬인지에 대한 여부 */}
            <FiChevronRight />
            <Text color={"#00C3BA"}>{format}</Text>
          </HStack>
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={"#FFCC00"}>
              {category}
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Tabs defaultIndex={format === "1:1" ? 0 : format === "1:6" ? 1 : 2}>
        <TabList justifyContent={"center"} borderBottomColor={"#00C3BA"}>
          <Tab
            px={20}
            color={format === "1:1" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "1:1" ? "#00C3BA" : "#E1E4E4"}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
            onClick={() => {
              setFormat("1:1");
            }}
          >
            1:1
          </Tab>
          <Tab
            px={20}
            color={format === "1:6" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "1:6" ? "#00C3BA" : "#E1E4E4"}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
            onClick={() => {
              setFormat("1:6");
            }}
          >
            1:6
          </Tab>
          <Tab
            px={20}
            color={format === "VOD" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "VOD" ? "#00C3BA" : "#E1E4E4"}
            onClick={() => {
              setFormat("VOD");
            }}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            VOD
          </Tab>
          <Tab
            px={20}
            color={format === "Time Table" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "Time Table" ? "#00C3BA" : "#E1E4E4"}
            onClick={() => {
              setFormat("Time Table");
            }}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Time Table
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
              1
              {/* <Stack>
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
              </Stack> */}
            </Container>
          </TabPanel>
          <TabPanel>
            {/* 수정 필요 */}
            <Container minW={"container.xl"} py={8}>
              2
            </Container>
          </TabPanel>
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
              3
            </Container>
          </TabPanel>
          <TabPanel>
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
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default CurriculumDetail;

// 커리큘럼 데이터
const Dances = [
  {
    id: 1,
    name: "Beginner course",
    month: 3,
    sessions: 12,
    price: "$80 per session",
    description: `- Basic Vocal and Breathing Practices: This course provides an introduction to breathing techniques and basic vocal techniques.
- Understanding Pitch and Rhythm: Basic Music Theory.
- Simple K-pop song practice: Perfect for beginners to practice their songs.
- Basic pronunciation practice: develop correct pronunciation and a sense of rhythm.
- Learn basic stage manners: basic posture and expressions on stage
- Beginner Course Reviews and Ratings`,
  },
];
