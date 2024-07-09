import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TeacherInfo from "./Teachers/TeacherInfo";
import { LessonItem, TeacherItem } from "../../Component/HomeDetail";
import ImageCarousel from "../../Component/ImageCarousel";
import { host_url } from "../../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Nav = useNavigate();
  const [main, setMain] = useState({});
  const [matching, setMatching] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [course, setCourse] = useState({});
  const [lessonType, setLessonType] = useState({});

  const [teacher, setTeacher] = useState([]);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -200; // 여백 추가 (위쪽으로 200px)
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    console.log(host_url);

    const getTeacher = async () => {
      fetch(`${host_url}/teachers/list`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const sortList = res.sort((a, b) => {
            return a.index - b.index;
          });
          setTeacher(sortList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTeacher();
    console.log(teacher);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getHomeData = async () => {
      fetch(`${host_url}/home/get/main`)
        .then((res) => res.json())
        .then((res) => {
          setMain(res);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch(`${host_url}/home/get/matching`)
        .then((res) => res.json())
        .then((res) => {
          setMatching(res);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch(`${host_url}/home/get/lessons`)
        .then((res) => res.json())
        .then((res) => {
          setLessons(res);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch(`${host_url}/home/get/course`)
        .then((res) => res.json())
        .then((res) => {
          setCourse(res);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch(`${host_url}/home/get/lessonType`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setLessonType(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getHomeData();
  }, []);

  return (
    <Flex flex={1} direction={"column"} gap={24}>
      <Container minW={"container.xl"}>
        <Stack spacing={16}>
          <Stack direction={{ base: "column", md: "row" }}>
            <Box flex={1} borderRadius={"20"} overflow={"hidden"}>
              <Image src={main?.banner?.[0]} alt={""} />
            </Box>
          </Stack>
          <Stack spacing={12}>
            <Text fontSize={"xl"} whiteSpace={"pre-line"}>
              {main?.description}
            </Text>
            <Box>
              <Button
                fontSize={"2xl"}
                px={24}
                py={8}
                variant={"outline"}
                borderColor={"#FF3CA2"}
                color={"#FF3CA2"}
                onClick={() => scrollToSection(main?.strLink)}
              >
                VIEW MORE
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Box bgColor={"#E1E4E4"}>
        <Container minW={"container.xl"} py={16}>
          <ImageCarousel />
        </Container>
      </Box>
      <Container minW={"container.xl"} pb={24}>
        <Stack spacing={16}>
          <Stack>
            <Box>
              <Text fontSize={"6xl"} color={"#FFCC00"} fontWeight={"bold"}>
                Teachers
              </Text>
            </Box>
            <TeacherItem teacher={matching} />
          </Stack>
          <Stack id="Lessons">
            <Box>
              <Text fontSize={"6xl"} color={"#FF3CA2"} fontWeight={"bold"}>
                Lessons
              </Text>
            </Box>
            <LessonItem lessons={lessons} />
          </Stack>
          <Stack id="Our Courses">
            <Text fontSize={"6xl"} color={"#00B2FF"} fontWeight={"bold"}>
              {course?.title}
            </Text>
            <HStack justifyContent={"space-between"} h={"680px"} spacing={8}>
              <Stack w={"100%"} h={"100%"} justifyContent={"space-between"}>
                <Stack>
                  <Image src={course?.beginner?.image} alt={""} />
                  <Text color={"#FFCC00"} fontSize={"40px"} fontWeight={"bold"}>
                    Beginner
                  </Text>
                  <Text fontSize={"24px"} whiteSpace={"pre-line"}>
                    {course?.beginner?.description.split("\n").map((item) => (
                      <Text
                        color={item.includes("#") ? "#FF3CA2" : "black"}
                        key={item}
                      >
                        {item}
                      </Text>
                    ))}
                    {/* {course?.beginner?.description} */}
                  </Text>
                </Stack>
                <Button
                  bgColor={"#FFCC00"}
                  color="white"
                  fontSize={"24px"}
                  whiteSpace={"pre-line"}
                  height={"110px"}
                  lineHeight={"36px"}
                  onClick={() => Nav(course?.beginner?.strLink)}
                >
                  {`$80 per session\nPAYMENT`}
                </Button>
              </Stack>
              <Stack w={"100%"} h={"100%"} justifyContent={"space-between"}>
                <Stack>
                  <Image src={course?.intermediate?.image} alt={""} />
                  <Text color={"#00C3BA"} fontSize={"40px"} fontWeight={"bold"}>
                    Intermediate
                  </Text>
                  <Text fontSize={"24px"} whiteSpace={"pre-line"}>
                    {course?.intermediate?.description
                      .split("\n")
                      .map((item) => (
                        <Text
                          color={item.includes("#") ? "#FF3CA2" : "black"}
                          key={item}
                        >
                          {item}
                        </Text>
                      ))}
                    {/* {course?.beginner?.description} */}
                  </Text>
                </Stack>
                <Button
                  bgColor={"#00C3BA"}
                  color="white"
                  fontSize={"24px"}
                  whiteSpace={"pre-line"}
                  height={"110px"}
                  lineHeight={"36px"}
                  onClick={() => Nav(course?.beginner?.strLink)}
                >
                  {`$85 per session\nPAYMENT`}
                </Button>
              </Stack>
              <Stack w={"100%"} h={"100%"} justifyContent={"space-between"}>
                <Stack>
                  <Image src={course?.advanced?.image} alt={""} />
                  <Text color={"#00B2FF"} fontSize={"40px"} fontWeight={"bold"}>
                    Advanced
                  </Text>
                  <Text fontSize={"24px"} whiteSpace={"pre-line"}>
                    {course?.advanced?.description.split("\n").map((item) => (
                      <Text
                        color={item.includes("#") ? "#FF3CA2" : "black"}
                        key={item}
                      >
                        {item}
                      </Text>
                    ))}
                    {/* {course?.beginner?.description} */}
                  </Text>
                </Stack>
                <Button
                  bgColor={"#00B2FF"}
                  color="white"
                  fontSize={"24px"}
                  whiteSpace={"pre-line"}
                  height={"110px"}
                  lineHeight={"36px"}
                  onClick={() => Nav(course?.advanced?.strLink)}
                >
                  {`$90 per session\nPAYMENT`}
                </Button>
              </Stack>
              <Stack w={"100%"} h={"100%"} justifyContent={"space-between"}>
                <Stack>
                  <Image src={course?.professional?.image} alt={""} />
                  <Text color={"#FF3CA2"} fontSize={"40px"} fontWeight={"bold"}>
                    Professional
                  </Text>
                  <Text fontSize={"24px"} whiteSpace={"pre-line"}>
                    {course?.professional?.description
                      .split("\n")
                      .map((item) => (
                        <Text
                          color={item.includes("#") ? "#FF3CA2" : "black"}
                          key={item}
                        >
                          {item}
                        </Text>
                      ))}
                    {/* {course?.beginner?.description} */}
                  </Text>
                </Stack>
                <Button
                  bgColor={"#FF3CA2"}
                  color="white"
                  fontSize={"24px"}
                  whiteSpace={"pre-line"}
                  height={"110px"}
                  lineHeight={"36px"}
                  onClick={() => Nav(course?.professional?.strLink)}
                >
                  {`$99 per session\nPAYMENT`}
                </Button>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </Container>
      <Image src={main?.promotion} alt={""} />
      <Container minW={"container.xl"} p={24}>
        <Image src={main?.withus} alt={""} />
      </Container>
      <Container minW={"container.xl"} pb={24}>
        <Text fontSize={"6xl"} color={"#FF3CA2"} fontWeight={"bold"}>
          Lesson Type
        </Text>
        <HStack
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          spacing={8}
        >
          <Stack
            onClick={() => Nav(lessonType?.one?.strLink)}
            w={"100%"}
            h={"100%"}
            cursor={"pointer"}
            justifyContent={"space-between"}
          >
            <Image src={lessonType?.one?.image} alt={""} />
            <Text color={"#FFCC00"} fontSize={"40px"} fontWeight={"bold"}>
              1:1 Personal
            </Text>
            <Text fontSize={"24px"}>{lessonType?.one?.description}</Text>
          </Stack>
          <Stack
            onClick={() => Nav(lessonType?.six?.strLink)}
            w={"100%"}
            h={"100%"}
            cursor={"pointer"}
            justifyContent={"space-between"}
          >
            <Image src={lessonType?.six?.image} alt={""} />
            <Text color={"#00C3BA"} fontSize={"40px"} fontWeight={"bold"}>
              1:6 Group
            </Text>
            <Text fontSize={"24px"}>{lessonType?.vod?.description}</Text>
          </Stack>
          <Stack
            onClick={() => Nav(lessonType?.vod?.strLink)}
            w={"100%"}
            h={"100%"}
            cursor={"pointer"}
            justifyContent={"space-between"}
          >
            <Image src={lessonType?.vod?.image} alt={""} />
            <Text color={"#00B2FF"} fontSize={"40px"} fontWeight={"bold"}>
              VOD
            </Text>
            <Text fontSize={"24px"}>{lessonType?.vod?.description}</Text>
          </Stack>
        </HStack>
      </Container>

      <Center bgColor={"#F1F1F1"} py={24} mb={36}>
        <HStack
          fontSize={"140px"}
          spacing={8}
          fontWeight={"bold"}
          whiteSpace={"nowrap"}
        >
          <Text color={"#00C3BA"}>Be a</Text>
          <Text color={"#FFCC00"}>STAR</Text>
          <Text color={"#00C3BA"}>with us!</Text>
        </HStack>
      </Center>
    </Flex>
  );
};

export default Home;
