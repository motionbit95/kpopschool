import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClassInterestTab from "../../Component/MyLessons/ClassInterestTab";
import CurrentClass from "../../Component/MyLessons/CurrentClass";
import ClassinProgress from "../../Component/MyLessons/ClassinProgress";
import InterestTrainer from "../../Component/MyLessons/InterestTrainer";
import PaymentHistory from "../../Component/Payment/PaymentHistory";
import AddCards from "../../Component/Payment/AddCards";
import YourCards from "../../Component/Payment/YourCards";

const MyPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // 버튼 이펙트 인덱스 변경
  // 로케이션 state
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (location.state && location.state.selectedIndex !== undefined) {
      setSelectedIndex(location.state.selectedIndex);
    }
  }, [location.state]);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Flex flex={1}>
      <Container minW={"container.xl"} pb={16}>
        <Flex py={6} justify={"space-between"} align={"end"}>
          <Text fontSize={"5xl"} fontWeight={"bold"} color={"#00C3BA"}>
            My Page
          </Text>
          <Box boxSize={"20px"}>
            <Image src={require("../../Asset/Icon/Notify.png")} alt={""} />
          </Box>
        </Flex>
        <Tabs
          variant={"unstyled"}
          index={selectedIndex}
          onChange={handleTabChange}
        >
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
                    <Tab
                      p={0}
                      w={"full"}
                      color={"#C0C0C0"}
                      _selected={{ color: "black" }}
                    >
                      <HStack
                        w={"250px"}
                        py={3}
                        h={"full"}
                        fontSize={"20px"}
                        fontWeight={"600"}
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
                        <Box>
                          <Image
                            src={
                              selectedTabIndex === index
                                ? item.Icon1
                                : item.Icon2
                            }
                          />
                        </Box>
                        <Text whiteSpace={"nowrap"}>{item.title}</Text>
                      </HStack>
                    </Tab>
                  ))}
                </TabList>
                <TabPanels
                  h={"full"}
                  pl={10}
                  borderLeft={"1px solid #E1E4E4"}
                  minH={"400px"}
                >
                  <TabPanel p={0} h={"full"}>
                    <Stack spacing={6}>
                      <CurrentClass />
                      <ClassinProgress />
                    </Stack>
                  </TabPanel>
                  <TabPanel p={0} h={"full"}>
                    <ClassInterestTab />
                  </TabPanel>
                  <TabPanel p={0} h={"full"}>
                    <InterestTrainer />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                onChange={(index) => setSelectedTabIndex(index)}
              >
                <TabList flexDirection={"column"} pr={2}>
                  {items2.map((item, index) => (
                    <Tab
                      p={0}
                      w={"full"}
                      color={"#C0C0C0"}
                      _selected={{ color: "black" }}
                    >
                      <HStack
                        w={"250px"}
                        py={3}
                        h={"full"}
                        fontSize={"20px"}
                        fontWeight={"600"}
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
                        <Box>
                          <Image
                            src={
                              selectedTabIndex === index
                                ? item.Icon1
                                : item.Icon2
                            }
                          />
                        </Box>
                        <Text whiteSpace={"nowrap"}>{item.title}</Text>
                      </HStack>
                    </Tab>
                  ))}
                </TabList>
                <TabPanels
                  h={"full"}
                  borderLeft={"1px solid #E1E4E4"}
                  minH={"400px"}
                >
                  <TabPanel p={0} h={"full"}>
                    <PaymentHistory />
                  </TabPanel>
                  <TabPanel p={0} h={"full"} pl={10}>
                    <Stack spacing={6}>
                      <YourCards />
                      <AddCards />
                    </Stack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
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

const items = [
  {
    title: "Classes in Progress",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon1.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon1_default.png"),
  },
  {
    title: "Class of interest",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon2.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon2_default.png"),
  },
  {
    title: "Interested teacher",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon3.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon3_default.png"),
  },
];

const items2 = [
  {
    title: "Payment History",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon4.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon4_default.png"),
  },
  {
    title: "Payment Method",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon5.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon5_default.png"),
  },
];
