import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { popyellow, popmint, popmag, host_url } from "../../../App";
import { getWeekDates, Schedule } from "../../AD/Class/Class";

const CurriculumDetail = () => {
  const location = useLocation();
  const [category, setCategory] = useState(
    location.state
      ? location.state.category
      : location.pathname.split("/").pop()
  );
  const [format, setFormat] = useState(
    location.state ? location.state.format : "1:1"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, format]);

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${host_url}/curriculums/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [{ field: "category", operator: "==", value: category }],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        let classes = [];
        res.forEach((data) => {
          if (data.classes) {
            data.classes?.forEach((schedule) => {
              classes?.push({
                ...schedule,
                difficulty: data.difficulty,
                curriculum: data.title,
              });
            });
          }
        });
        setClasses(classes?.flat());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [timetable, setTimetable] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });
  useEffect(() => {
    let monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday = [];
    getWeekDates().forEach((date, index) => {
      if (index === 0) {
        monday = classes?.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 1) {
        tuesday = classes?.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 2) {
        wednesday = classes?.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 3) {
        thursday = classes?.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 4) {
        friday = classes?.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 5) {
        saturday = classes?.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 6) {
        sunday = classes?.filter((data) => {
          return data?.date === date;
        });
      }

      setTimetable({
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
      });
    });
  }, [classes]);

  const [vocal_course, setVocal_course] = useState({});
  const [dance_course, setDance_course] = useState({});

  useEffect(() => {
    const getCurriculumDescription = () => {
      if (category === "Dance") {
        fetch(`${host_url}/home/get/dance_course`)
          .then((res) => res.json())
          .then((res) => {
            setVocal_course(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        fetch(`${host_url}/home/get/vocal_course`)
          .then((res) => res.json())
          .then((res) => {
            setDance_course(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    getCurriculumDescription();
  }, [category]);

  return (
    <Flex flex={1} direction={"column"} pb={16}>
      <Container minW={"container.xl"}>
        <Stack py={16} spacing={8}>
          <Flex
            fontWeight={"300"}
            fontSize={"xl"}
            color={"#4E4E4E"}
            align={"center"}
            justify={"flex-end"}
          >
            <Text>Curriculum</Text>
            <FiChevronRight />
            <Text>Intro</Text> {/* 댄스인지 보컬인지에 대한 여부 */}
            <FiChevronRight />
            <Text color={popmint}>{category}</Text>
          </Flex>
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={popmag}>
              {category}
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Tabs defaultIndex={format === "1:1" ? 0 : format === "1:6" ? 1 : 2}>
        <TabList justifyContent={"center"} borderBottomColor={popmint}>
          <Tab
            px={20}
            color={format === "1:1" ? popmint : "#E1E4E4"}
            borderBottomColor={format === "1:1" ? popmint : "#E1E4E4"}
            // _selected={{ color: popmint, borderBottomColor: popmint }}
            onClick={() => {
              setFormat("1:1");
            }}
          >
            1:1
          </Tab>
          <Tab
            px={20}
            color={format === "1:6" ? popmint : "#E1E4E4"}
            borderBottomColor={format === "1:6" ? popmint : "#E1E4E4"}
            // _selected={{ color: popmint, borderBottomColor: popmint }}
            onClick={() => {
              setFormat("1:6");
            }}
          >
            1:6
          </Tab>
          <Tab
            px={20}
            color={format === "VOD" ? popmint : "#E1E4E4"}
            borderBottomColor={format === "VOD" ? popmint : "#E1E4E4"}
            onClick={() => {
              setFormat("VOD");
            }}
            // _selected={{ color: popmint, borderBottomColor: popmint }}
          >
            VOD
          </Tab>
          <Tab
            px={20}
            color={format === "Time Table" ? popmint : "#E1E4E4"}
            borderBottomColor={format === "Time Table" ? popmint : "#E1E4E4"}
            onClick={() => {
              setFormat("Time Table");
            }}
            // _selected={{ color: popmint, borderBottomColor: popmint }}
          >
            Time Table
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Lessons
              item={
                category === "Dance"
                  ? format === "1:1"
                    ? vocal_course.one
                    : format === "1:6"
                    ? vocal_course.six
                    : vocal_course.vod
                  : format === "1:1"
                  ? dance_course.one
                  : format === "1:6"
                  ? dance_course.six
                  : dance_course.vod
              }
            />
          </TabPanel>
          <TabPanel>
            <Lessons
              item={
                category === "Dance"
                  ? format === "1:1"
                    ? vocal_course.one
                    : format === "1:6"
                    ? vocal_course.six
                    : vocal_course.vod
                  : format === "1:1"
                  ? dance_course.one
                  : format === "1:6"
                  ? dance_course.six
                  : dance_course.vod
              }
            />
          </TabPanel>
          <TabPanel>
            <Lessons
              item={
                category === "Dance"
                  ? format === "1:1"
                    ? vocal_course.one
                    : format === "1:6"
                    ? vocal_course.six
                    : vocal_course.vod
                  : format === "1:1"
                  ? dance_course.one
                  : format === "1:6"
                  ? dance_course.six
                  : dance_course.vod
              }
            />
          </TabPanel>
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
              <Grid
                templateColumns={"repeat(7, 1fr)"}
                borderTop={"2px solid #00C3BA"}
                borderBottom={"2px solid #00C3BA"}
              >
                {/** 트레이너 표 */}
                <GridItem p={3} bgColor={"#F1F1F1"}>
                  <Text textAlign={"center"}>MON</Text>
                </GridItem>
                <GridItem p={3} bgColor={"#F1F1F1"}>
                  <Text textAlign={"center"}>TUE</Text>
                </GridItem>
                <GridItem p={3} bgColor={"#F1F1F1"}>
                  <Text textAlign={"center"}>WED</Text>
                </GridItem>
                <GridItem p={3} bgColor={"#F1F1F1"}>
                  <Text textAlign={"center"}>THU</Text>
                </GridItem>
                <GridItem p={3} bgColor={"#F1F1F1"}>
                  <Text textAlign={"center"}>FRI</Text>
                </GridItem>
                <GridItem p={3} bgColor={"#F1F1F1"}>
                  <Text textAlign={"center"}>SAT</Text>
                </GridItem>
                <GridItem p={3} bgColor={"#F1F1F1"}>
                  <Text textAlign={"center"}>SUN</Text>
                </GridItem>
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"06:00"} />
                ))}
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"06:30"} />
                ))}
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"07:00"} />
                ))}
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"07:30"} />
                ))}
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"08:00"} />
                ))}
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"08:30"} />
                ))}
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"09:00"} />
                ))}
                {[
                  timetable.monday,
                  timetable.tuesday,
                  timetable.wednesday,
                  timetable.thursday,
                  timetable.friday,
                  timetable.saturday,
                  timetable.sunday,
                ].map((list, index) => (
                  <Schedule key={index} list={list} time={"09:30"} />
                ))}
              </Grid>
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default CurriculumDetail;

const NotFound = () => {
  return (
    <Container minW={"container.xl"}>
      <Box
        w={"full"}
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"2xl"} color={"red"}>
          Not Found
        </Text>
      </Box>
    </Container>
  );
};

const Lessons = ({ item }) => {
  const Section = ({ item }) => {
    const navigate = useNavigate();
    const category = window.location.pathname.split("/").pop();
    return (
      <Stack
        cursor={"pointer"}
        onClick={() => {
          navigate(`/curriculum/list`, {
            state: {
              difficulty:
                item?.title === "Beginner Course"
                  ? "Beginner"
                  : item?.title === "Intermediate Course"
                  ? "Intermediate"
                  : item?.title === "Advanced Course"
                  ? "Advanced"
                  : "Professional",
              category: category,
            },
          });
        }}
      >
        <Text
          fontSize={"2xl"}
          fontWeight={"600"}
          color={
            item?.title === "Beginner Course"
              ? popyellow
              : item?.title === "Intermediate Course"
              ? popmint
              : item?.title === "Advanced Course"
              ? "#00B2FF"
              : popmag
          }
        >
          {item?.title}
        </Text>
        <HStack spacing={16}>
          <Stack spacing={0}>
            <Text color={"#C0C0C0"}>Month</Text>
            <Text fontWeight={"700"} color={popmint}>
              {item?.month}
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text color={"#C0C0C0"}>Sessions</Text>
            <Text fontWeight={"700"} color={popmint}>
              {item?.session}
            </Text>
          </Stack>
        </HStack>
        <Box pt={4}>
          <Text fontSize={"lg"} whiteSpace={"pre-line"}>
            {item?.description}
          </Text>
        </Box>
      </Stack>
    );
  };
  return (
    <Container minW={"container.xl"} py={8}>
      <Stack divider={<StackDivider />} spacing={16}>
        <Section item={item?.section1} />
        <Section item={item?.section2} />
        <Section item={item?.section3} />
        <Section item={item?.section4} />
      </Stack>
    </Container>
  );
};
