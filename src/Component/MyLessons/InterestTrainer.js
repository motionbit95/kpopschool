import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { popyellow, popblue, popmint, host_url } from "../../App";
import { auth } from "../../Firebase/Config";

const InterestTrainer = () => {
  const tabLists = ["ALL", "VOCAL", "DANCE"];

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // const getTeachers = async () => {
    //   fetch(`${host_url}/teachers/list`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log(res);
    //       const sortList = res.sort((a, b) => {
    //         return a.index - b.index;
    //       });
    //       setTeachers(sortList);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    const getTeachers = async () => {
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
              if (res.interestTeacher) {
                let teachers = [];
                console.log(res.interestTeacher);
                res.interestTeacher?.forEach((element) => {
                  fetch(`${host_url}/teachers/get/`, {
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
                      console.log(res);
                      teachers.push(res);
                      setTeachers(teachers);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    };
    getTeachers();
    console.log(teachers);
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
            <Flex>
              <SimpleGrid columnGap={8} rowGap={8} columns={3}>
                {teachers.map((item) => (
                  <TabsItem item={item} />
                ))}
              </SimpleGrid>
            </Flex>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Flex>
              <SimpleGrid columnGap={8} rowGap={8} columns={3}>
                {teachers.map(
                  (item) =>
                    item.category === "Vocal" && <TabsItem item={item} />
                )}
              </SimpleGrid>
            </Flex>
          </TabPanel>
          <TabPanel px={0} pt={8} pb={0}>
            <Flex>
              <SimpleGrid columnGap={8} rowGap={8} columns={3}>
                {teachers.map(
                  (item) =>
                    item.category === "Dance" && <TabsItem item={item} />
                )}
              </SimpleGrid>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default InterestTrainer;

const TabsItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Stack w={"250px"}>
      <Box
        position={"relative"}
        onClick={() => {
          navigate(`/teachers/${item.id}`);
        }}
      >
        <Image
          src={item.profile}
          w={"250px"}
          h={"250px"}
          objectFit={"cover"}
          borderRadius={"xl"}
        />
        <Box
          position={"absolute"}
          right={2}
          bottom={2}
          cursor={"pointer"}
          _hover={{ bgColor: "#E1E4E4", opacity: 0.8 }}
          borderRadius={"md"}
          p={2}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Image
            src={require("../../Asset/Icon/starFill.png")}
            // src={require("../../Asset/Icon/starDefault.png")}
          />
        </Box>
      </Box>
      <Stack spacing={0}>
        <Text fontSize={"25px"} fontWeight={"600"} color={"#4E4E4E"}>
          {item.name}
        </Text>
        <Text
          fontSize={"lg"}
          color={"#4E4E4E"}
        >{`${item.category} Trainer`}</Text>
      </Stack>
    </Stack>
  );
};
