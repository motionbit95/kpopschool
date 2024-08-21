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
import React, { useEffect, useState } from "react";
import { popyellow, popblue, popmint, popmag, host_url } from "../../App";
import { auth } from "../../Firebase/Config";
import { useNavigate } from "react-router-dom";

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

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fetch(`${host_url}/users/get`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.uid,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            let classes = [];
            res.interestClass?.forEach((element) => {
              console.log(element);
              fetch(`${host_url}/curriculums/get`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: element,
                }),
              })
                .then((res) => res.json())
                .then((res) => {
                  // console.log(res);
                  classes?.push(res);
                  setClasses(classes);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, []);

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
              {classes?.map((item) => (
                <TabsItem item={item} />
              ))}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {classes?.map(
                (item) => item.category === "Vocal" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {classes?.map(
                (item) => item.category === "Dance" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {classes?.map(
                (item) =>
                  item.difficulty === "Beginner" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {classes?.map(
                (item) =>
                  item.difficulty === "Intermediate" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {classes?.map(
                (item) =>
                  item.difficulty === "Advanced" && <TabsItem item={item} />
              )}
            </Stack>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Stack spacing={2}>
              {classes?.map(
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
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState({});
  useEffect(() => {
    fetch(`${host_url}/teachers/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: item.teacherId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTrainer(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                {Math.round((item.sessions / item.totalSessions) * 100)}%
              </Text>
            </Stack>
          )}
          <Stack>
            <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
              Trainer
            </Text>
            <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
              {trainer.name}
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
              Sessions
            </Text>
            <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
              {item.sessions}/{item.totalSessions}
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
          <Stack>
            <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
              GMT
            </Text>
            <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
              {item.gmt ? "element.gmt" : "LA"}
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
              STATE
            </Text>
            <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
              {"in Class"}
            </Text>
          </Stack>
        </Flex>
        <Button
          size={"lg"}
          bgColor={item.progress !== "100%" ? "#00B2FF" : popmag}
          color={"white"}
          onClick={() => {
            let teacher = trainer;
            navigate(`/curriculum/program/${item.id}`, {
              state: { item, teacher },
            });
          }}
        >
          {"CONTINUE"}
        </Button>
      </HStack>
    </HStack>
  );
};
