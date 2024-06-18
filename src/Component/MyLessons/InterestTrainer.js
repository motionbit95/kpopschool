import {
  Box,
  Flex,
  HStack,
  Image,
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

const InterestTrainer = () => {
  const tabLists = ["ALL", "VOCAL", "DANCE"];

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    console.log(host_url);

    const getTeachers = async () => {
      fetch(`${host_url}/teachers/list`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const sortList = res.sort((a, b) => {
            return a.index - b.index;
          });
          setTeachers(sortList);
        })
        .catch((err) => {
          console.log(err);
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
              _selected={{ bgColor: "#FFCC00" }}
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
  return (
    <Stack w={"250px"}>
      <Box position={"relative"}>
        <Image src={item.profile} />
        <Box position={"absolute"} right={4} bottom={4} cursor={"pointer"}>
          <Image
            src={require("../../Asset/Icon/starFill.png")}
            // src={require("../../Asset/Icon/starDefault.png")}
            onClick={(e) => {
              e.stopPropagation();
            }}
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
