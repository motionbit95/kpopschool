import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  Link,
  Select,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  Heading,
  VStack,
  Radio,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import ImageUpload from "../../../Component/ImageUpload";
import { AddIcon } from "@chakra-ui/icons";
import MessageBox from "../../../Component/MessageBox";
import { host_url, popyellow, popmint, popmag } from "../../../App";
import { startOfWeek, parse } from "date-fns";

const toDate = (timestamp) => {
  return new Date(timestamp._seconds * 1000);
};
export function getWeekDates() {
  const today = new Date();

  // 오늘이 이번 주의 몇 번째 요일인지 계산 (일요일=0, 월요일=1, ...)
  const dayOfWeek = today.getDay();

  // 이번 주 월요일의 날짜 계산
  const monday = new Date(today);
  monday.setDate(today.getDate() - dayOfWeek + 1);

  // 날짜 포맷 함수 (두 자리 수 보장)
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const year = String(date.getFullYear()).slice(-2); // 마지막 두 자리 수만 가져옴
    return `${day}/${month}/${year}`;
  }

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(monday);
    currentDay.setDate(monday.getDate() + i);
    weekDates.push(formatDate(currentDay));
  }

  return weekDates;
}

const Class = () => {
  const [curriculumList, setCurriculumList] = React.useState(
    Array(1).fill({
      title: "",
      image: "",
      teacherId: "",
      category: "Vocal",
      format: "1:1",
      month: "3",
      session: "12",
      price: "",
      description: "",
      difficulty: "Beginner",
      likes: "0",
      review: "0",
      student: "0",
      classes: [],
    })
  ); // 특정 강사의 커리큘럼리스트
  const [classStep, setClassStep] = React.useState(0);

  const [modalState, setModalState] = React.useState({
    duplicate: false,
  });

  const [selectedTeacher, setSelectedTeacher] = React.useState({});

  /** 커리큘럼 추가 */
  const addCurriculum = () => {
    curriculumList.forEach((item) => {
      fetch(`${host_url}/curriculums/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => {
          res.json();
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <MessageBox
        isOpen={modalState.duplicate}
        onClose={() => setModalState({ ...modalState, duplicate: false })}
      >
        <Text>Card has been duplicated</Text>
      </MessageBox>
      <Stack
        w={"full"}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        {classStep === 0 && (
          <ClassList
            setTrainer={(data) => {
              setSelectedTeacher(data);
              setClassStep(1);
            }}
          />
        )}
        {classStep === 1 && (
          <Stack p={16}>
            <HStack justifyContent={"flex-end"}>
              <Button
                variant={"outline"}
                borderColor={popmint}
                color={popmint}
                onClick={() => setClassStep(0)}
              >
                Back to List
              </Button>
              <Button
                color={"white"}
                backgroundColor={"#00B2FF"}
                onClick={() => setClassStep(2)}
              >
                Add Class
              </Button>
            </HStack>
            <TrainerClass selectedTeacher={selectedTeacher} />
          </Stack>
        )}
        {classStep === 2 && (
          <Stack w={"full"} p={16} spacing={6}>
            <HStack justifyContent={"flex-end"}>
              <Button
                variant={"outline"}
                borderColor={popmint}
                color={popmint}
                onClick={() => setClassStep(1)}
              >
                Back to List
              </Button>
              <Button bgColor={popmint} color={"white"} onClick={addCurriculum}>
                SAVE
              </Button>
            </HStack>
            <Text fontWeight={"600"} fontSize={"20px"}>
              Add Class
            </Text>
            {curriculumList.map((item, index) => (
              <AddClass
                setCurriculum={(value) => console.log(value)}
                onDelete={() =>
                  setCurriculumList([
                    ...curriculumList.slice(0, index),
                    ...curriculumList.slice(index + 1),
                  ])
                }
                onDuplicate={(value) => {
                  setCurriculumList([...curriculumList, value]);
                  setModalState({ ...modalState, duplicate: true });
                }}
              />
            ))}
            <Center>
              <IconButton
                icon={<AddIcon />}
                bgColor={popmint}
                color="white"
                borderRadius={"full"}
                onClick={() => setCurriculumList([...curriculumList, {}])}
              />
            </Center>
          </Stack>
        )}
        {classStep === 3 && <ClassDetail />}
      </Stack>
    </Flex>
  );
};

export default Class;

const ClassList = (props) => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [teachers, setTeachers] = useState([]);
  const handleDetailClick = (data, itemNumber) => {
    props.setTrainer(data);
  };
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${host_url}/curriculums/list`)
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
        setClasses(classes.flat());
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
      console.log(date, index);
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

  useEffect(() => {
    fetch(`${host_url}/users/list`)
      .then((res) => res.json())
      .then((res) => {
        const filterList = res.filter((data) => data.isTeacher);
        let newList = [];
        filterList.forEach((data, index) => {
          fetch(`${host_url}/teachers/get`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: data.id }),
          })
            .then((res) => res.json())
            .then((res) => {
              newList.push({ ...data, ...res });
              if (index === filterList.length - 1) {
                setTeachers(newList);
              }
              // if (newList.length === filterList.length) {
              //   setTeachers(newList);
              // }
            });
        });
      })
      .then(() => {
        console.log(teachers);
      });
  }, []);
  return (
    <Stack p={16} spacing={4}>
      <Text fontWeight={"600"} fontSize={"20px"}>
        Time Table
      </Text>
      <HStack justifyContent={"space-between"}>
        <Radio value="LA(PT)" isChecked colorScheme="teal">
          LA(PT)
        </Radio>
        <Text color={popmag}>The table shows the start times of classes</Text>
      </HStack>
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
      <Text fontWeight={"600"} fontSize={"20px"}>
        Trainer List
      </Text>
      {/** 트레이너 표 */}
      <TableContainer>
        <Table>
          <Tbody>
            <Tr fontWeight={"500"} color={popmint}>
              <Td textAlign={"center"}>No.</Td>
              <Td textAlign={"center"}>Name</Td>
              {/* <Td textAlign={"center"}>ID</Td> */}
              <Td textAlign={"center"}>Email</Td>
              <Td textAlign={"center"}>Registration Date</Td>
              <Td textAlign={"center"}>Rating</Td>
            </Tr>
            {teachers.map((data, index) => {
              const itemNumber = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

              return (
                <Tr
                  cursor={"pointer"}
                  onClick={() => handleDetailClick(data, itemNumber)}
                >
                  <Td textAlign={"center"}>{itemNumber}</Td>
                  <Td textAlign={"center"}>{data.name}</Td>
                  {/* <Td textAlign={"center"}></Td> */}
                  <Td textAlign={"center"}>{data.email}</Td>
                  <Td textAlign={"center"}>
                    {toDate(data.createdAt)
                      .toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                  </Td>
                  <Td>
                    <Flex
                      gap={1}
                      w={"100%"}
                      align={"center"}
                      justify={"center"}
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <Image
                          key={i}
                          src={
                            i < data.rating
                              ? require("../../../Asset/Icon/starFill.png")
                              : require("../../../Asset/Icon/starDefault.png")
                          }
                          alt="star"
                          boxSize="18px" // 적절한 크기로 설정
                        />
                      ))}
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

const TrainerClass = (props) => {
  const { selectedTeacher } = props;
  return (
    <Stack>
      <Text fontWeight={"600"} fontSize={"20px"}>
        Trainer Class
      </Text>
      <TableContainer>
        <Table>
          <Tbody>
            <Tr fontWeight={"500"} color={popmint}>
              <Td textAlign={"center"}>No.</Td>
              <Td textAlign={"center"}>Name</Td>
              {/* <Td textAlign={"center"}>ID</Td> */}
              <Td textAlign={"center"}>Email</Td>
              <Td textAlign={"center"}>Registration Date</Td>
              <Td textAlign={"center"}>Rating</Td>
            </Tr>

            <Tr>
              <Td textAlign={"center"}>{1}</Td>
              <Td textAlign={"center"}>{selectedTeacher.name}</Td>
              {/* <Td textAlign={"center"}></Td> */}
              <Td textAlign={"center"}>{selectedTeacher.email}</Td>
              <Td textAlign={"center"}>
                {toDate(selectedTeacher.createdAt)
                  .toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
              </Td>
              <Td>
                <Flex gap={1} w={"100%"} align={"center"} justify={"center"}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Image
                      key={i}
                      src={
                        i < selectedTeacher.rating
                          ? require("../../../Asset/Icon/starFill.png")
                          : require("../../../Asset/Icon/starDefault.png")
                      }
                      alt="star"
                      boxSize="18px" // 적절한 크기로 설정
                    />
                  ))}
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

const AddClass = (props) => {
  const [classes, setClasses] = React.useState(
    Array(12).fill({
      title: "",
      details: "",
      link: "",
      file: "",
      date: "",
      startTime: "08:00",
      endTime: "10:00",
      location: "LA",
    })
  );
  const [curriculum, setCurriculum] = React.useState({
    title: "",
    image: "",
    teacherId: "",
    category: "Vocal",
    format: "1:1",
    month: "3",
    session: "12",
    price: "",
    description: "",
    difficulty: "Beginner",
    likes: "0",
    review: "0",
    student: "0",
    classes: [],
  });

  useEffect(() => {
    setCurriculum({ ...curriculum, classes: classes });
  }, [classes]);

  useEffect(() => {
    props.setCurriculum(curriculum);
  }, [curriculum]);
  return (
    <Flex>
      <Stack w={"100%"} border={"1px solid #E1E4E4"} borderRadius={"lg"}>
        <Stack w={"100%"} divider={<StackDivider borderColor={"#E1E4E4"} />}>
          <Stack p={16}>
            <HStack w={"100%"}>
              <Box
                w={"200px"}
                height={"100%"}
                bgColor={"#E1E4E4"}
                borderRadius={"lg"}
              >
                <ImageUpload
                  defaultValue={""}
                  setImageUrl={(url) => {
                    setCurriculum({ ...curriculum, image: url });
                  }}
                />
              </Box>
              <Stack w={"100%"}>
                <HStack>
                  <Select
                    maxW={"150px"}
                    onChange={(e) =>
                      setCurriculum({
                        ...curriculum,
                        difficulty: e.target.value,
                      })
                    }
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Professional">Professional</option>
                  </Select>
                  <Input
                    placeholder="Cost"
                    maxW={"150px"}
                    onChange={(e) =>
                      setCurriculum({ ...curriculum, price: e.target.value })
                    }
                  />
                  <Input placeholder="enrollment" maxW={"150px"} />
                  <Text color={popmint}>{curriculum.month} months</Text>
                  <Text color={popmint}>{curriculum.session} sessions</Text>
                </HStack>
                <Input
                  placeholder="title"
                  onChange={(e) =>
                    setCurriculum({ ...curriculum, title: e.target.value })
                  }
                />
                <HStack>
                  <Button
                    color={"white"}
                    bgColor={
                      curriculum.format === "1:1" ? popyellow : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.format === "1:1" ? popyellow : "#E1E4E4",
                    }}
                    borderRadius={"full"}
                    onClick={() =>
                      setCurriculum({ ...curriculum, format: "1:1" })
                    }
                  >
                    1:1
                  </Button>
                  <Button
                    color={"white"}
                    bgColor={
                      curriculum.format === "1:6" ? popyellow : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.format === "1:6" ? popyellow : "#E1E4E4",
                    }}
                    borderRadius={"full"}
                    onClick={() =>
                      setCurriculum({ ...curriculum, format: "1:6" })
                    }
                  >
                    1:6
                  </Button>
                  <Button
                    borderRadius={"full"}
                    color={"white"}
                    bgColor={
                      curriculum.category === "Vocal" ? popyellow : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.category === "Vocal" ? popyellow : "#E1E4E4",
                    }}
                    onClick={() =>
                      setCurriculum({ ...curriculum, category: "Vocal" })
                    }
                  >
                    VOCAL
                  </Button>
                  <Button
                    borderRadius={"full"}
                    color={"white"}
                    bgColor={
                      curriculum.category === "Dance" ? popyellow : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.category === "Dance" ? popyellow : "#E1E4E4",
                    }}
                    onClick={() =>
                      setCurriculum({ ...curriculum, category: "Dance" })
                    }
                  >
                    DANCE
                  </Button>
                  <Button
                    borderRadius={"full"}
                    color={"white"}
                    bgColor={
                      curriculum.difficulty === "Beginner"
                        ? popyellow
                        : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.difficulty === "Beginner"
                          ? popyellow
                          : "#E1E4E4",
                    }}
                    onClick={() =>
                      setCurriculum({ ...curriculum, difficulty: "Beginner" })
                    }
                  >
                    Beginner
                  </Button>
                  <Button
                    borderRadius={"full"}
                    color={"white"}
                    bgColor={
                      curriculum.difficulty === "Intermediate"
                        ? popyellow
                        : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.difficulty === "Intermediate"
                          ? popyellow
                          : "#E1E4E4",
                    }}
                    onClick={() =>
                      setCurriculum({
                        ...curriculum,
                        difficulty: "Intermediate",
                      })
                    }
                  >
                    Intermediate
                  </Button>
                  <Button
                    borderRadius={"full"}
                    color={"white"}
                    bgColor={
                      curriculum.difficulty === "Advanced"
                        ? popyellow
                        : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.difficulty === "Advanced"
                          ? popyellow
                          : "#E1E4E4",
                    }}
                    onClick={() =>
                      setCurriculum({
                        ...curriculum,
                        difficulty: "Advanced",
                      })
                    }
                  >
                    Advanced
                  </Button>
                  <Button
                    borderRadius={"full"}
                    color={"white"}
                    bgColor={
                      curriculum.difficulty === "Professional"
                        ? popyellow
                        : "#E1E4E4"
                    }
                    _hover={{
                      bgColor:
                        curriculum.difficulty === "Professional"
                          ? popyellow
                          : "#E1E4E4",
                    }}
                    onClick={() =>
                      setCurriculum({
                        ...curriculum,
                        difficulty: "Professional",
                      })
                    }
                  >
                    Professional
                  </Button>
                </HStack>
              </Stack>
            </HStack>
            <Textarea
              resize={"none"}
              placeholder="description"
              onChange={(e) =>
                setCurriculum({ ...curriculum, description: e.target.value })
              }
            ></Textarea>
          </Stack>
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            columnGap={16}
            rowGap={16}
            p={16}
          >
            {classes.map((item, index) => (
              <GridItem
                key={index}
                border={"1px solid #e1e1e1"}
                p={16}
                borderRadius={"md"}
              >
                <Stack>
                  <HStack>
                    <Text>{index + 1}. </Text>
                    <Input
                      placeholder="class title"
                      onChange={(e) => {
                        setClasses([
                          ...classes.slice(0, index),
                          { ...classes[index], title: e.target.value },
                          ...classes.slice(index + 1),
                        ]);
                      }}
                    />
                  </HStack>
                  <HStack>
                    <Textarea
                      w={"60%"}
                      resize={"none"}
                      placeholder="description"
                      onChange={(e) => {
                        setClasses([
                          ...classes.slice(0, index),
                          { ...classes[index], details: e.target.value },
                          ...classes.slice(index + 1),
                        ]);
                      }}
                    />
                    <Stack>
                      <HStack>
                        <Link color={"#00B2FF"} w={"120px"}>
                          class link
                        </Link>
                        <Input
                          size={"sm"}
                          color={"gray.500"}
                          variant={"flushed"}
                          onChange={(e) => {
                            setClasses([
                              ...classes.slice(0, index),
                              { ...classes[index], link: e.target.value },
                              ...classes.slice(index + 1),
                            ]);
                          }}
                        ></Input>
                      </HStack>
                      <HStack>
                        <Link color={"#00B2FF"} w={"120px"}>
                          file upload
                        </Link>
                        <Input
                          size={"sm"}
                          color={"gray.500"}
                          variant={"flushed"}
                          onChange={(e) => {
                            setClasses([
                              ...classes.slice(0, index),
                              { ...classes[index], file: e.target.value },
                              ...classes.slice(index + 1),
                            ]);
                          }}
                        ></Input>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack>
                    <Input
                      maxW={"150px"}
                      placeholder="DD/MM/YY"
                      onChange={(e) => {
                        setClasses([
                          ...classes.slice(0, index),
                          { ...classes[index], date: e.target.value },
                          ...classes.slice(index + 1),
                        ]);
                      }}
                    />
                    <InputGroup
                      alignItems={"center"}
                      border={"1px solid #e4e4e4"}
                      borderRadius={"md"}
                    >
                      <Input
                        border={"none"}
                        placeholder="HH:MM"
                        onChange={(e) => {
                          setClasses([
                            ...classes.slice(0, index),
                            { ...classes[index], startTime: e.target.value },
                            ...classes.slice(index + 1),
                          ]);
                        }}
                      />
                      <Text>-</Text>
                      <Input
                        border={"none"}
                        placeholder="HH:MM"
                        onChange={(e) => {
                          setClasses([
                            ...classes.slice(0, index),
                            { ...classes[index], endTime: e.target.value },
                            ...classes.slice(index + 1),
                          ]);
                        }}
                      />
                    </InputGroup>
                    <Select
                      maxW={"150px"}
                      onChange={(e) =>
                        setClasses([
                          ...classes.slice(0, index),
                          { ...classes[index], location: e.target.value },
                          ...classes.slice(index + 1),
                        ])
                      }
                    >
                      <option value="LA">LA</option>
                      <option value="TEXAS">TEXAS</option>
                      <option value="SEOUL">SEOUL</option>
                    </Select>
                  </HStack>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Stack>

        <HStack justifyContent={"flex-end"} p={16}>
          <Button
            variant={"goast"}
            size={"lg"}
            onClick={() => props.onDuplicate(curriculum)}
          >
            DUPLICATE
          </Button>
          <Button
            bgColor={popmag}
            color="white"
            size={"lg"}
            onClick={props.onDelete}
          >
            DELETE
          </Button>
        </HStack>
      </Stack>
    </Flex>
  );
};

const ClassDetail = () => {
  return (
    <Stack>
      <Text>Class Detail</Text>
    </Stack>
  );
};

export const Schedule = (props) => {
  const { list, time } = props;

  return (
    <Stack
      borderLeft="0.1px solid #E1E4E4"
      borderBottom={time.split(":")[1] === "30" && "0.1px solid #E1E4E4"}
      p={2}
      minH={"50px"}
    >
      {list.map(
        (data, index) =>
          data?.startTime === time && (
            <Stack
              key={index}
              spacing={1}
              border={"1px solid"}
              p={2}
              borderRadius={"lg"}
              borderColor={
                data?.difficulty === "Beginner"
                  ? popyellow
                  : data?.difficulty === "Intermediate"
                  ? popmint
                  : data?.difficulty === "Advanced"
                  ? "#00B2FF"
                  : data?.difficulty === "Professional"
                  ? popmag
                  : "gray.200"
              }
            >
              <Box
                w={"fit-content"}
                borderRadius={"md"}
                // py={1}
                px={2}
                bgColor={
                  data?.difficulty === "Beginner"
                    ? popyellow
                    : data?.difficulty === "Intermediate"
                    ? popmint
                    : data?.difficulty === "Advanced"
                    ? "#00B2FF"
                    : data?.difficulty === "Professional"
                    ? popmag
                    : "gray.200"
                }
              >
                <Text fontSize={"sm"} color={"white"}>
                  {data?.difficulty}
                </Text>
              </Box>
              <Text color="gray.800">
                {data?.startTime} {`(1/6)`}
              </Text>
              <Text fontSize={"16px"}>{data?.curriculum}</Text>
            </Stack>
          )
      )}
    </Stack>
  );
};
