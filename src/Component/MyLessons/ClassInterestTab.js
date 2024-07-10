import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { popyellow, popblue, popmint, popmag } from "../../App";

const ClassInterestTab = () => {
  const tabLists = [
    "ALL",
    "VOCAL",
    "DANCE",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Professional",
  ];

  const items = [
    {
      difficulty: "Professional",
      category: "Vocal",
      title: "Debut or Die",
      trainer: "Mr.Lee",
      sessions: "3/12",
      month: "3",
      progress: "24%",
      state: "in Class",
    },
    {
      difficulty: "Advanced",
      category: "Dance",
      title: "Important of Prounance",
      trainer: "Mr.Lee",
      sessions: "5/24",
      month: "6",
      progress: "24%",
      state: "in Class",
    },
    {
      difficulty: "Beginner",
      category: "Vocal",
      title: "Vocal Pitch",
      trainer: "Jessie",
      sessions: "5/24",
      month: "6",
      progress: "24%",
      state: "in Class",
    },
  ];

  return (
    <Stack>
      <Tabs variant={"soft-rounded"}>
        <TabList gap={3}>
          {tabLists.map((tab) => (
            <Tab
              h={"38px"}
              fontSize={"20px"}
              fontWeight={"600"}
              color={"white"}
              bgColor={"#E1E4E4"}
              _selected={{ bgColor: popyellow }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {items.map((item) => (
                <TabsItem item={item} />
              ))}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {items.map(
                (item) => item.category === "Vocal" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {items.map(
                (item) => item.category === "Dance" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {items.map(
                (item) =>
                  item.difficulty === "Beginner" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {items.map(
                (item) =>
                  item.difficulty === "Intermediate" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {items.map(
                (item) =>
                  item.difficulty === "Advanced" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {items.map(
                (item) =>
                  item.difficulty === "Professional" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default ClassInterestTab;

const TabsItem = ({ item }) => {
  return (
    <HStack
      border={"1px solid #E1E4E4"}
      px={6}
      py={8}
      borderRadius={"md"}
      justify={"space-between"}
    >
      <HStack spacing={4}>
        <Image src={require("../../Asset/Icon/Mypage_Icon/LOVIT.png")} />
        <Stack>
          <Text fontWeight={"500"}>
            {item.difficulty} {item.category} course
          </Text>
          <Text fontSize={"22px"} fontWeight={"700"}>
            {item.title}
          </Text>
        </Stack>
      </HStack>
      <HStack spacing={8} textAlign={"center"}>
        <Flex gap={4}>
          {item?.progress !== "100%" && (
            <Stack>
              <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                Progress
              </Text>
              <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                {item.progress}
              </Text>
            </Stack>
          )}
          <Stack>
            <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
              Trainer
            </Text>
            <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
              Mr.Lee
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
              Sessions
            </Text>
            <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
              {item.sessions}
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
              Month
            </Text>
            <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
              {item.month}
            </Text>
          </Stack>
          {item?.progress !== "100%" && (
            <Stack>
              <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                STATE
              </Text>
              <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                {item.state}
              </Text>
            </Stack>
          )}
        </Flex>
        <Button
          size={"lg"}
          bgColor={item.progress !== "100%" ? "#00B2FF" : popmag}
          color={"white"}
          onClick={() => console.log(item)}
        >
          {item.progress !== "100%" ? "CONTINUE" : "APPLY"}
        </Button>
      </HStack>
    </HStack>
  );
};
