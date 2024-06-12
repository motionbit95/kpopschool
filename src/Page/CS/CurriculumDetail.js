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
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const CurriculumDetail = () => {
  const type = "Dance";
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
            <Text>{type}</Text> {/* 댄스인지 보컬인지에 대한 여부 */}
            <FiChevronRight />
            <Text color={"#00C3BA"}>1:1</Text>
          </HStack>
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={"#FFCC00"}>
              {type}
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Tabs>
        <TabList justifyContent={"center"} borderBottomColor={"#00C3BA"}>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            1:1
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            1:6
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            VOD
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Time Table
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
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
            <Container minW={"container.xl"} py={8}></Container>
          </TabPanel>
          <TabPanel>
            <Container minW={"container.xl"} py={8}></Container>
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
