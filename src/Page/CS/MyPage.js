import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const MyPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const items = [
    {
      title: "Classes inProgress",
      // Icon: "FiClock",
    },
    {
      title: "Class of interest",
      // Icon: "FiClock",
    },
    {
      title: "Interested teacher",
      // Icon: "FiClock",
    },
  ];
  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Box py={6}>
          <Text fontSize={"5xl"} fontWeight={"bold"} color={"#00C3BA"}>
            My Page
          </Text>
        </Box>
        <Tabs variant={"unstyled"}>
          <TabList gap={12}>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              my lessons
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              payment
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              coupon
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              1:1 inquiry
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              Setting
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                onChange={(index) => setSelectedTabIndex(index)}
              >
                <TabList flexDirection={"column"} pr={2}>
                  {items.map((item, index) => (
                    <Tab p={0} w={"full"} _selected={{ color: "#00C3BA" }}>
                      <HStack
                        w={"250px"}
                        py={3}
                        h={"full"}
                        fontSize={"20px"}
                        spacing={3}
                      >
                        {selectedTabIndex === index ? (
                          <Box
                            w={"5px"}
                            h={"full"}
                            bgColor={"#00C3BA"}
                            borderRightRadius={"xl"}
                          />
                        ) : (
                          <Box w={"5px"} h={"full"} bgColor={"white"} />
                        )}
                        <Icon />
                        <Text whiteSpace={"nowrap"}>{item.title}</Text>
                      </HStack>
                    </Tab>
                  ))}
                </TabList>
                <TabPanels h={"full"} pl={10} borderLeft={"1px solid #E1E4E4"}>
                  <TabPanel px={0} h={"full"}>
                    1
                  </TabPanel>
                  <TabPanel px={0} h={"full"}>
                    2
                  </TabPanel>
                  <TabPanel px={0} h={"full"}>
                    3
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel px={0}>2</TabPanel>
            <TabPanel px={0}>3</TabPanel>
            <TabPanel px={0}>4</TabPanel>
            <TabPanel px={0}>5</TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default MyPage;
