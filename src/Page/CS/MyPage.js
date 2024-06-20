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
import RetainedCoupon from "../../Component/RetainedCoupon";
import InquiryHistory from "../../Component/1vs1Inquiry/InquiryHistory";
import MakeInquiry from "../../Component/1vs1Inquiry/MakeInquiry";
import UserInfo from "../../Component/Setting/UserInfo";
import PasswordChange from "../../Component/Setting/PasswordChange";
import Information from "../../Component/Setting/Information";

const MyPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // 버튼 이펙트 인덱스 변경
  // 로케이션 state
  const location = useLocation();
  const [myPageIndex, setMyPageIndex] = useState(0);
  useEffect(() => {
    if (location.state && location.state.myPageIndex !== undefined) {
      setMyPageIndex(location.state.myPageIndex);
    }
  }, [location.state]);

  const handleMypageTabChange = (number) => {
    setMyPageIndex(number);
    setSelectedTabIndex(0);
  };

  const handleSelectedTabChange = (index) => {
    setSelectedTabIndex(index);
  };

  const MypageTabButtons = [
    "my lessons",
    "payment",
    "coupon",
    "1:1 inquiry",
    "setting",
  ];

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
          index={myPageIndex}
          onChange={handleMypageTabChange}
        >
          <TabList gap={12}>
            {MypageTabButtons.map((tab) => (
              <Tab
                px={0}
                fontSize={"2xl"}
                fontWeight={"600"}
                color={"#E1E4E4"}
                _selected={{ color: "#00C3BA" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {/* My lessons */}
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                index={selectedTabIndex}
                onChange={handleSelectedTabChange}
              >
                <TabList flexDirection={"column"} pr={2}>
                  {items.map((item, index) => (
                    <TabButton
                      item={item}
                      index={index}
                      selectedTabIndex={selectedTabIndex}
                    />
                  ))}
                </TabList>
                <TabPanels
                  h={"full"}
                  pl={10}
                  pt={4}
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
            {/* Payment */}
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                onChange={handleSelectedTabChange}
              >
                <TabList flexDirection={"column"} pr={2}>
                  {items2.map((item, index) => (
                    <TabButton
                      item={item}
                      index={index}
                      selectedTabIndex={selectedTabIndex}
                    />
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
                  <TabPanel p={0} h={"full"} pl={10} pt={4}>
                    <Stack spacing={6}>
                      <YourCards />
                      <AddCards />
                    </Stack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            {/* coupon */}
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                onChange={handleSelectedTabChange}
              >
                <TabList flexDirection={"column"} pr={2}>
                  {items3.map((item, index) => (
                    <TabButton
                      item={item}
                      index={index}
                      selectedTabIndex={selectedTabIndex}
                    />
                  ))}
                </TabList>
                <TabPanels
                  h={"full"}
                  borderLeft={"1px solid #E1E4E4"}
                  minH={"400px"}
                >
                  <TabPanel p={0} h={"full"}>
                    <RetainedCoupon />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            {/* 1:1 inquiry */}
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                onChange={handleSelectedTabChange}
              >
                <TabList flexDirection={"column"} pr={2}>
                  {items4.map((item, index) => (
                    <TabButton
                      item={item}
                      index={index}
                      selectedTabIndex={selectedTabIndex}
                    />
                  ))}
                </TabList>
                <TabPanels
                  h={"full"}
                  borderLeft={"1px solid #E1E4E4"}
                  minH={"400px"}
                >
                  <TabPanel p={0} h={"full"}>
                    <InquiryHistory />
                  </TabPanel>
                  <TabPanel p={0} pl={10} pt={4} h={"full"}>
                    <MakeInquiry />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            {/* settings */}
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                onChange={handleSelectedTabChange}
              >
                <TabList flexDirection={"column"} pr={2}>
                  {items5.map((item, index) => (
                    <TabButton
                      item={item}
                      index={index}
                      selectedTabIndex={selectedTabIndex}
                    />
                  ))}
                </TabList>
                <TabPanels
                  h={"full"}
                  pl={10}
                  pt={4}
                  borderLeft={"1px solid #E1E4E4"}
                  minH={"400px"}
                >
                  <TabPanel p={0} h={"full"}>
                    <UserInfo />
                  </TabPanel>
                  <TabPanel p={0} h={"full"}>
                    <PasswordChange />
                  </TabPanel>
                  <TabPanel p={0} h={"full"}>
                    <Information />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default MyPage;

const TabButton = ({ item, index, selectedTabIndex }) => {
  return (
    <Tab p={0} w={"full"} color={"#C0C0C0"} _selected={{ color: "black" }}>
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
        <Box pb={item.title === "Passwords \nand Security" ? 6 : 0}>
          <Image src={selectedTabIndex === index ? item.Icon1 : item.Icon2} />
        </Box>
        <Text whiteSpace={"pre-line"} textAlign={"start"}>
          {item.title}
        </Text>
      </HStack>
    </Tab>
  );
};

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

const items3 = [
  {
    title: "Retained Coupon",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon6.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon6_default.png"),
  },
];

const items4 = [
  {
    title: "Inquiry history",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon7.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon7_default.png"),
  },
  {
    title: "To make an inquiry",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon8.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon8_default.png"),
  },
];

const items5 = [
  {
    title: "User info",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon9.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon9_default.png"),
  },
  {
    title: "Passwords \nand Security",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon10.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon10_default.png"),
  },
  {
    title: "Information",
    Icon1: require("../../Asset/Icon/Mypage_Icon/icon11.png"),
    Icon2: require("../../Asset/Icon/Mypage_Icon/icon11_default.png"),
  },
];
