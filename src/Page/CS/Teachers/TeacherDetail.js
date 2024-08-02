import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import TeacherInfo from "./TeacherInfo";
import { useNavigate } from "react-router-dom";
import { host_url, popmag, popyellow } from "../../../App";
import { popmint } from "../../../App";
import { getWeekDates, Schedule } from "../../AD/Class/Class";
import { auth } from "../../../Firebase/Config";

const TeacherDetail = (props) => {
  const [teacher, setTeacher] = useState({});
  const [reviews, setReviews] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [currentReview, setCurrentReview] = useState({
    teacherId: "",
    userId: "",
    lessonId: "",
    rating: 0,
    comment: "",
    division: "Teacher",
  });
  const isOkay = false;
  const navigate = useNavigate();

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    // console.log(id);

    fetch(`${host_url}/teachers/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setTeacher(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getCurriculums = async () => {
    // 필터링은 검색을 통해서 진행한다.
    fetch(`${host_url}/curriculums/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [{ field: "teacherId", operator: "==", value: teacher.id }],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setCurriculums(res);
      })
      .catch((err) => {
        // console.log(err);
        console.log("데이터가 없습니다");
        setCurriculums([]);
      });
  };

  useEffect(() => {
    getCurriculums();
    // console.log(curriculums);
  }, [teacher]);

  const getReviews = () => {
    const tempList = [];
    fetch(`${host_url}/review/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [{ field: "teacherId", operator: "==", value: teacher.id }],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // setReviews(res);
        res.forEach((r) => {
          let reviewData = {
            id: r.id,
            createdAt: r.createdAt,
            rating: r.rating,
            comment: r.comment,
          };

          fetch(`${host_url}/users/get`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: r.userId,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              // 유저 정보
              // console.log("user", res);
              reviewData.userName = res.name;
              reviewData.userProfile = res.profile;
            })
            .catch((err) => {
              console.log(err);
            });

          fetch(`${host_url}/curriculums/get`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: r.lessonId === "" ? "IAsgKYQo27yljfJH8knV" : r.lessonId,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              // 강의 정보
              // console.log("lesson", res);
              reviewData.difficulty = res.difficulty;
              reviewData.category = res.category.toUpperCase();

              tempList.push(reviewData);
              setReviews(tempList);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReviews();
  }, [teacher]);

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    console.log(teacher);
    fetch(`${host_url}/curriculums/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [{ field: "teacherId", operator: "==", value: teacher.id }],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        let classes = [];
        res.forEach((data) => {
          if (data.classes) {
            data.classes.forEach((schedule) => {
              classes.push({
                ...schedule,
                difficulty: data.difficulty,
                curriculum: data.title,
              });
            });
          }
        });
        console.log(classes.flat());
        setClasses(classes.flat());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [teacher]);

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
        monday = classes.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 1) {
        tuesday = classes.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 2) {
        wednesday = classes.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 3) {
        thursday = classes.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 4) {
        friday = classes.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 5) {
        saturday = classes.filter((data) => {
          return data?.date === date;
        });
      }
      if (index === 6) {
        sunday = classes.filter((data) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addReview = () => {
    setCurrentReview({
      comment: "",
      teacherId: "",
      userId: "",
      lessonId: "",
      rating: 0,
      division: "Teacher",
    });
    let tempList = [...reviews];
    if (currentReview.comment === "") {
      alert("Please write a comment");
    }
    currentReview.teacherId = teacher.id;
    currentReview.userId = auth.currentUser.uid;
    currentReview.lessonId = "IAsgKYQo27yljfJH8knV";
    console.log(currentReview);

    fetch(`${host_url}/review/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentReview),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        fetch(`${host_url}/curriculums/get`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id:
              currentReview.lessonId === ""
                ? "IAsgKYQo27yljfJH8knV"
                : currentReview.lessonId,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            // 강의 정보
            // console.log("lesson", res);
            currentReview.difficulty = res.difficulty;
            currentReview.category = res.category.toUpperCase();

            tempList.unshift(currentReview);
            setReviews(tempList);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex flex={1} direction={"column"} pb={16}>
      <Container minW={"container.xl"}>
        <Stack py={16} spacing={8}>
          {/* 페이지 정보 */}
          <Flex
            fontWeight={"300"}
            fontSize={"xl"}
            color={"#4E4E4E"}
            align={"center"}
            justify={"flex-end"}
          >
            <Text>Teachers</Text>
            <FiChevronRight />
            <Text>{`${teacher.category} Trainer`}</Text>
            <FiChevronRight />
            <Text color={popmint}>{teacher.name}</Text>
          </Flex>
          {/* 강사 정보 */}
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={popyellow}>
              {`${teacher.category} Trainer`}
            </Text>
            <TeacherInfo teacher={teacher} />
          </Stack>
        </Stack>
      </Container>
      {/* 강의 정보 */}
      <Tabs>
        <TabList justifyContent={"center"} borderBottomColor={popmint}>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: popmint, borderBottomColor: popmint }}
          >
            Lesson
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: popmint, borderBottomColor: popmint }}
          >
            Time Tabel
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: popmint, borderBottomColor: popmint }}
          >
            Review
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LessonForm
              curriculums={curriculums}
              teacher={teacher}
              isOkay={isOkay}
              navigate={navigate}
            />
          </TabPanel>
          <TabPanel>
            {/* 수정 필요 */}
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
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
              <HStack
                border={"1px solid #E1E4E4"}
                py={1}
                px={2}
                borderRadius={"lg"}
                justify={"space-between"}
                // onClick={handleModal}
              >
                <Input
                  fontSize={"lg"}
                  placeholder="You can use it after logging in. Please leave a review after
                  taking the course"
                  border={"none"}
                  _focus={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  value={currentReview.comment}
                  onChange={(e) =>
                    setCurrentReview({
                      ...currentReview,
                      comment: e.target.value,
                    })
                  }
                ></Input>
                <HStack spacing={6}>
                  <Flex gap={1} w={"100%"} align={"center"} justify={"center"}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Image
                        key={i}
                        src={
                          i < currentReview.rating
                            ? require("../../../Asset/Icon/starFill.png")
                            : require("../../../Asset/Icon/starDefault.png")
                        }
                        alt="star"
                        boxSize="18px" // 적절한 크기로 설정
                        onClick={() =>
                          setCurrentReview({ ...currentReview, rating: i + 1 })
                        }
                      />
                    ))}
                  </Flex>
                  <Button
                    px={6}
                    size={"sm"}
                    color={"white"}
                    bgColor={popmint}
                    onClick={() => addReview()}
                  >
                    GO
                  </Button>
                </HStack>
              </HStack>
              {isModalOpen && (
                <Stack>
                  <ReviewModal isOpen={isModalOpen} onClose={handleModal} />
                </Stack>
              )}

              {/* <InputGroup h={"60px"} alignItems={"center"}>
                <Input
                  h={"full"}
                  fontSize={"lg"}
                  placeholder="You can use it after logging in. Please leave a review after taking the course"
                />
                <InputRightElement h={"full"} mr={8}>
                  <Button px={8} size={"sm"} color={"white"} bgColor={popmint}>
                    GO
                  </Button>
                </InputRightElement>
              </InputGroup> */}
              {reviews.map((review) => (
                <HStack py={12} gap={4} align={"start"}>
                  <Avatar size={"lg"} src={review.userProfile} />
                  <Stack w={"full"} spacing={3}>
                    <HStack justifyContent={"space-between"} align={"start"}>
                      <Stack spacing={0} color={"#4E4E4E"}>
                        <Text fontSize={"lg"}>{review.userName}</Text>
                        <Text fontSize={"sm"}>
                          {review.difficulty} course | {review.category}
                        </Text>
                      </Stack>

                      <Flex gap={1}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Image
                            key={i}
                            src={
                              i < review.rating // 데이터 가져와야함
                                ? require("../../../Asset/Icon/starFill.png")
                                : require("../../../Asset/Icon/starDefault.png")
                            }
                            alt="star"
                            boxSize="20px" // 적절한 크기로 설정
                          />
                        ))}
                      </Flex>
                    </HStack>
                    <Text fontSize={"lg"} color={"#4E4E4E"}>
                      {review.comment}
                    </Text>
                  </Stack>
                </HStack>
              ))}
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default TeacherDetail;

const LessonForm = ({ curriculums, teacher, isOkay, navigate }) => {
  return (
    <Container minW={"container.xl"} py={8}>
      <Stack divider={<StackDivider />} spacing={16}>
        {curriculums.map((item) => (
          <Stack>
            <Text
              color={
                item.difficulty === "Beginner"
                  ? popyellow
                  : item.difficulty === "Intermediate"
                  ? popmint
                  : item.difficulty === "Advanced"
                  ? "#00B2FF"
                  : popmag
              }
              fontSize={"lg"}
            >{`${item.difficulty} course`}</Text>
            <Text fontSize={"2xl"} fontWeight={"600"}>
              {item.title}
            </Text>
            <HStack spacing={16}>
              <Stack spacing={0}>
                <Text color={"#C0C0C0"}>Month</Text>
                <Text fontWeight={"700"} color={popmint}>
                  {item.month}
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text color={"#C0C0C0"}>Sessions</Text>
                <Text fontWeight={"700"} color={popmint}>
                  {item.sessions}
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text color={"#C0C0C0"}>Price</Text>
                <Text fontWeight={"700"} color={popmint}>
                  {`$${item.price} per session`}
                </Text>
              </Stack>
            </HStack>
            <Box pt={4}>
              <Text fontSize={"lg"} whiteSpace={"pre-line"}>
                {item.description}
              </Text>
            </Box>
            <Box w={"100%"} display={"flex"} justifyContent={"flex-end"}>
              <Button
                size={"lg"}
                bgColor={isOkay ? popmag : "#00B2FF"}
                color={"white"}
                onClick={() => {
                  console.log(item, teacher);
                  navigate(`/curriculum/program/${item.id}`, {
                    state: { item, teacher },
                  });
                }}
              >
                {isOkay ? "APPLY" : "CONTINUE"}
              </Button>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

const ReviewModal = (props) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  return (
    <>
      <Modal size={"4xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          {/* <ModalHeader></ModalHeader> */}
          <ModalBody py={8} px={16}>
            <Stack spacing={8} color={"#4E4E4E"}>
              <Stack align={"center"}>
                <Box>
                  <Image src={require("../../../Asset/Logo/ReviewLogo.png")} />
                </Box>
                <Stack align={"center"} spacing={0}>
                  <Text fontSize={"30px"} fontWeight={"600"}>
                    The class is over!
                  </Text>
                  <Text>See you in the next class</Text>
                </Stack>
              </Stack>
              <Stack>
                <Text fontSize={"20px"} fontWeight={"500"}>
                  How was the class?
                </Text>
                <Flex gap={1} pb={2}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Image
                      key={i}
                      src={
                        i < rating
                          ? require("../../../Asset/Icon/starFill.png")
                          : require("../../../Asset/Icon/starDefault.png")
                      }
                      alt="star"
                      boxSize="24px" // 적절한 크기로 설정
                      onClick={() => handleStarClick(i)}
                      cursor={"pointer"}
                    />
                  ))}
                </Flex>
                <Textarea
                  placeholder="Leave a comments"
                  h={160}
                  resize={"none"}
                  focusBorderColor={popmint}
                />
                <Stack align={"center"} pt={4}>
                  <Button
                    px={16}
                    h={"66px"}
                    color={"white"}
                    bg={popmint}
                    fontSize={"25px"}
                    onClick={() => props.onClose()}
                  >
                    COMPLETE
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
