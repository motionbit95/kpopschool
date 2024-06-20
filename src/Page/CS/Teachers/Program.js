import {
  Container,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Program = () => {
  const location = useLocation();
  let { category } = location.state;

  // const

  // useEffect(() => {
  //   console.log(item);
  // });

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
            <Text>Curriculum</Text>
            <FiChevronRight />
            <Text>Intro</Text>
            <FiChevronRight />
            <Text>{category}</Text>
            <FiChevronRight />
            <Text></Text>
            <FiChevronRight />
            <Text color={"#00C3BA"}></Text>
          </Flex>
          {/* 강의 정보 */}
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
            Curriculum
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
          <TabPanel></TabPanel>
          <TabPanel>
            <Container minW={"container.xl"} py={8}></Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Program;
