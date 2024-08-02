import {
  AspectRatio,
  Box,
  Container,
  Flex,
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
import { popyellow, popblue, popmint, host_url } from "../../../App";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
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
    <Flex flex={1} pb={16}>
      <Container minW={"container.xl"}>
        <Box py={6}>
          <Text fontSize={"5xl"} fontWeight={"bold"} color={popyellow}>
            Teachers
          </Text>
        </Box>
        <Tabs variant={"unstyled"} pb={16}>
          <TabList gap={12}>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: popmint }}
            >
              All Trainer
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: popmint }}
            >
              Vocal Trainer
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: popmint }}
            >
              Dance Trainer
            </Tab>
          </TabList>
          <TabPanels pt={8}>
            <TabPanel px={0}>
              {/* 전체 목록 */}
              <Stack spacing={0}>
                <Stack spacing={4}>
                  <Text fontWeight={"600"} fontSize={"2xl"}>
                    Vocal Trainer
                  </Text>
                  <Flex>
                    <SimpleGrid gap={8} columns={4}>
                      {teachers.map(
                        (item) =>
                          item.category === "Vocal" && (
                            <TeacherCard item={item} />
                          )
                      )}
                    </SimpleGrid>
                  </Flex>
                </Stack>
                <Stack pt={16} spacing={4}>
                  <Text fontWeight={"600"} fontSize={"2xl"}>
                    Dance Trainer
                  </Text>
                  <Flex>
                    <SimpleGrid gap={8} columns={4}>
                      {teachers.map(
                        (item) =>
                          item.category === "Dance" && (
                            <TeacherCard item={item} />
                          )
                      )}
                    </SimpleGrid>
                  </Flex>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel px={0}>
              {/* 보컬 강사 */}
              <Flex>
                <SimpleGrid gap={8} columns={4}>
                  {teachers.map(
                    (item) =>
                      item.category === "Vocal" && <TeacherCard item={item} />
                  )}
                </SimpleGrid>
              </Flex>
            </TabPanel>
            <TabPanel px={0}>
              {/* 댄스 강사 */}
              <Flex>
                <SimpleGrid gap={8} columns={4}>
                  {teachers.map(
                    (item) =>
                      item.category === "Dance" && <TeacherCard item={item} />
                  )}
                </SimpleGrid>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default Teachers;

export const TeacherCard = (props) => {
  return (
    <Stack spacing={1}>
      <AspectRatio
        ratio={1}
        key={props.item.id}
        w={"250px"}
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        onClick={() => {
          console.log(props.item.id);
          // 리플레이스 시 뒤로가기가 안되는 이슈로 href로 이동 후 data를 id에 맞게 가져와야합니다.
          window.location.href = `/teachers/${props.item.id}`;
          // window.location.replace(`/teachers/${props.item.id}`);
        }}
      >
        <Image
          src={props.item.profile}
          alt={""}
          borderRadius={"xl"}
          objectFit={"cover"}
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </AspectRatio>
      <Text fontSize={"2xl"} fontWeight={"600"}>
        {props.item.name}
      </Text>
      <Text fontSize={"lg"}>{`${props.item.category} Trainer`}</Text>
    </Stack>
  );
};
