import {
  AddIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { host_url } from "../../../App";
import ImageUpload from "../../../Component/ImageUpload";

const Home = () => {
  const [main, setMain] = useState({});
  const [matching, setMatching] = useState({});
  const [lessons, setLessons] = useState({});
  const [course, setCourse] = useState({});
  const [lessonType, setLessonType] = useState({});
  const [vocal_course, setVocal_course] = useState(null);
  const [dance_course, setDance_course] = useState(null);
  useEffect(() => {
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
          setLessonType(res);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch(`${host_url}/home/get/vocal_course`)
        .then((res) => res.json())
        .then((res) => {
          setVocal_course(res);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch(`${host_url}/home/get/dance_course`)
        .then((res) => res.json())
        .then((res) => {
          setDance_course(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getHomeData();
  }, []);

  const handleSubmit = async () => {
    if (window.confirm("Are you sure?")) {
      await fetch(`${host_url}/home/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "main",
          ...main,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await fetch(`${host_url}/home/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "matching",
          ...matching,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await fetch(`${host_url}/home/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "lessons",
          ...lessons,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await fetch(`${host_url}/home/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "course",
          ...course,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await fetch(`${host_url}/home/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "lessonType",
          ...lessonType,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await fetch(`${host_url}/home/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "vocal_course",
          ...vocal_course,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await fetch(`${host_url}/home/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "dance_course",
          ...dance_course,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack
        w={"full"}
        pb={16}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <HStack
          p={16}
          justify={"space-between"}
          spacing={16}
          align={"start"}
          maxW={"1200px"}
        >
          <Stack spacing={8} w={"full"}>
            <Stack pb={8}>
              <HStack justify={"space-between"}>
                <Text fontSize={"20px"} fontWeight={"600"}>
                  Banners
                </Text>
                <Button
                  size={"lg"}
                  color={"white"}
                  bgColor={"#00C3BA"}
                  mt={-10}
                  onClick={handleSubmit}
                >
                  SAVE
                </Button>
              </HStack>
              <Box w={"full"}>
                <ArrayManipulationComponent
                  defaultValue={main.banner ? main.banner : []}
                  setItems={(value) => setMain({ ...main, banner: value })}
                />
              </Box>
            </Stack>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Main intro text
              </Text>
              <Textarea
                h={"200px"}
                resize={"none"}
                borderRadius={"xl"}
                defaultValue={main.description}
                onChange={(e) =>
                  setMain({ ...main, description: e.target.value })
                }
              />
            </Stack>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Main Button link
              </Text>
              <Box borderBottom={"1px solid #E1E4E4"} py={2} px={4}>
                <Text>
                  scroll to <strong>{main?.strLink}</strong>
                </Text>
              </Box>
            </Stack>
          </Stack>
        </HStack>
        <Stack p={16} w={"full"}>
          <Text fontSize={"20px"} fontWeight={"600"}>
            Matching section
          </Text>
          <Stack spacing={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 1</Text>
                <Text fontWeight={"700"}>Title 1</Text>
              </HStack>
              <Input borderRadius={"xl"} defaultValue={matching.title1} />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 2</Text>
                <Text fontWeight={"700"}>Trainer 1</Text>
              </HStack>
              <TrainerSection
                data={matching.trainer1}
                onChange={(trainer) => (matching["trainer1"] = trainer)}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 3</Text>
                <Text fontWeight={"700"}>Trainer 2</Text>
              </HStack>
              <TrainerSection
                data={matching.trainer2}
                onChange={(trainer) => (matching["trainer2"] = trainer)}
              />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 4</Text>
                <Text fontWeight={"700"}>Title 2</Text>
              </HStack>
              <Input borderRadius={"xl"} defaultValue={matching.title2} />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 5</Text>
                <Text fontWeight={"700"}>Trainer 3</Text>
              </HStack>
              <TrainerSection
                data={matching.trainer3}
                onChange={(trainer) => (matching["trainer3"] = trainer)}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 6</Text>
                <Text fontWeight={"700"}>Trainer 4</Text>
              </HStack>
              <TrainerSection
                data={matching.trainer4}
                onChange={(trainer) => (matching["trainer4"] = trainer)}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 7</Text>
                <Text fontWeight={"700"}>Trainer 5</Text>
              </HStack>
              <TrainerSection
                data={matching.trainer5}
                onChange={(trainer) => (matching["trainer5"] = trainer)}
              />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 8</Text>
                <Text fontWeight={"700"}>Title 3</Text>
              </HStack>
              <Input
                borderRadius={"xl"}
                defaultValue={lessons.title}
                onChange={(e) =>
                  setLessons({ ...lessons, title: e.target.value })
                }
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 9</Text>
                <Text fontWeight={"700"}>Vocal Division</Text>
              </HStack>
              <CurriculumSection
                data={lessons.vocal}
                onChange={(data) => setLessons({ ...lessons, vocal: data })}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 10</Text>
                <Text fontWeight={"700"}>Dance Division</Text>
              </HStack>
              <CurriculumSection
                data={lessons.dance}
                onChange={(data) => setLessons({ ...lessons, dance: data })}
              />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 11</Text>
                <Text fontWeight={"700"}>Title 4</Text>
              </HStack>
              <Input borderRadius={"xl"} defaultValue={course.title} />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 12</Text>
                <Text fontWeight={"700"}>Begginer Course</Text>
              </HStack>
              <CurriculumSection
                data={course.beginner}
                onChange={(data) => setCourse({ ...course, beginner: data })}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 13</Text>
                <Text fontWeight={"700"}>Intermediate Course</Text>
              </HStack>
              <CurriculumSection
                data={course.intermediate}
                onChange={(data) =>
                  setCourse({ ...course, intermediate: data })
                }
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 14</Text>
                <Text fontWeight={"700"}>Advanced Course</Text>
              </HStack>
              <CurriculumSection
                data={course.advanced}
                onChange={(data) => setCourse({ ...course, advanced: data })}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 15</Text>
                <Text fontWeight={"700"}>Professional Course</Text>
              </HStack>
              <CurriculumSection
                data={course.professional}
                onChange={(data) =>
                  setCourse({ ...course, professional: data })
                }
              />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 16</Text>
                <Text fontWeight={"700"}>Promotion</Text>
              </HStack>
              <PromotionSection
                defaultValue={main.promotion}
                promotion_link={main.promotion_link}
                setImageUrl={(url) => setMain({ ...main, promotion: url })}
                onChange={(link) => setMain({ ...main, promotion_link: link })}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 17</Text>
                <Text fontWeight={"700"}>With us</Text>
              </HStack>
              <Box>
                <PromotionSection
                  defaultValue={main.withus}
                  with_us={main.withus_link}
                  setImageUrl={(url) => setMain({ ...main, withus: url })}
                  onChange={(link) => setMain({ ...main, withus_link: link })}
                />
              </Box>
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 18</Text>
                <Text fontWeight={"700"}>Lesson 1:1</Text>
              </HStack>
              <LessonSection
                data={lessonType.one}
                onChange={(data) => setLessonType({ ...lessonType, one: data })}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 19</Text>
                <Text fontWeight={"700"}>Lesson 1:6</Text>
              </HStack>
              <LessonSection
                data={lessonType.six}
                onChange={(data) => setLessonType({ ...lessonType, six: data })}
              />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 20</Text>
                <Text fontWeight={"700"}>Lesson VOD</Text>
              </HStack>
              <LessonSection
                data={lessonType.vod}
                onChange={(data) => setLessonType({ ...lessonType, vod: data })}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack p={16}>
          <Text fontSize={"20px"} fontWeight={"600"}>
            Course Description
          </Text>
          <Tabs>
            <TabList justifyContent={"center"} borderBottomColor={"#00C3BA"}>
              <Tab
                px={20}
                color={"#E1E4E4"}
                borderBottomColor={"#E1E4E4"}
                _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
              >
                Vocal
              </Tab>
              <Tab
                px={20}
                color={"#E1E4E4"}
                borderBottomColor={"#E1E4E4"}
                _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
              >
                Dance
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <CourseTab course={vocal_course} onChange={setVocal_course} />
              </TabPanel>
              <TabPanel px={0}>
                <CourseTab course={dance_course} onChange={setDance_course} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Home;

const TrainerSection = ({ ...props }) => {
  const [trainer, setTrainer] = useState({});
  useEffect(() => {
    setTrainer(props.data);
  }, [props.data]);

  return (
    <Stack spacing={3}>
      <HStack h={"full"}>
        <Box boxSize={"200px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
          <ImageUpload
            defaultValue={trainer ? trainer.image : ""}
            setImageUrl={(value) =>
              props.onChange({ ...props.data, image: value })
            }
          />
        </Box>
        <Stack flex={1} justify={"space-between"} h={"full"}>
          <Input
            borderRadius={"xl"}
            defaultValue={trainer ? trainer.name : ""}
            onChange={(e) =>
              props.onChange({ ...props.data, name: e.target.value })
            }
          />
          <Textarea
            // h={"140px"}
            flex={1}
            resize={"none"}
            borderRadius={"xl"}
            defaultValue={trainer ? trainer.description : ""}
            onChange={(e) =>
              props.onChange({ ...props.data, description: e.target.value })
            }
          />
        </Stack>
      </HStack>
      <Input
        variant={"flushed"}
        defaultValue={
          trainer?.strLink ? `${window.location.origin}${trainer?.strLink}` : ""
        }
        onChange={(e) =>
          props.onChange({ ...props.data, strLink: e.target.value })
        }
      />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const CurriculumSection = ({ ...props }) => {
  const [curriculum, setCurriculum] = useState({});
  useEffect(() => {
    setCurriculum(props.data);
  }, [props.data]);

  return (
    <Stack spacing={3}>
      <HStack>
        <Box boxSize={"200px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
          <ImageUpload
            defaultValue={curriculum ? curriculum.image : ""}
            setImageUrl={(value) =>
              props.onChange({ ...props.data, image: value })
            }
          />
        </Box>
        <Textarea
          flex={1}
          h={"full"}
          resize={"none"}
          borderRadius={"xl"}
          defaultValue={curriculum ? curriculum.description : ""}
          onChange={(e) =>
            props.onChange({ ...props.data, description: e.target.value })
          }
        />
      </HStack>
      <Input
        variant={"flushed"}
        placeholder="put link"
        onChange={(e) =>
          props.onChange({ ...props.data, strLink: e.target.value })
        }
      />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const PromotionSection = ({ ...props }) => {
  return (
    <Stack spacing={3}>
      <Box w={"full"} h={"300px"} borderRadius={"md"}>
        <ImageUpload
          defaultValue={props.defaultValue}
          setImageUrl={props.setImageUrl}
        />
      </Box>
      <Input
        variant={"flushed"}
        placeholder="put link"
        defaultValue={props.promotion_link || ""}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const LessonSection = ({ ...props }) => {
  const [lesson, setLesson] = useState({});
  useEffect(() => {
    setLesson(props.data);
  }, [props.data]);

  return (
    <Stack spacing={3}>
      <HStack>
        <Box boxSize={"200px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
          <ImageUpload
            defaultValue={lesson ? lesson.image : ""}
            setImageUrl={(value) =>
              props.onChange({ ...props.data, image: value })
            }
          />
        </Box>
        <Textarea
          flex={1}
          h={"full"}
          resize={"none"}
          borderRadius={"xl"}
          defaultValue={lesson ? lesson.description : ""}
          onChange={(e) =>
            props.onChange({ ...props.data, description: e.target.value })
          }
        />
      </HStack>
      {/* <LinkTo /> */}
      <Input
        variant={"flushed"}
        placeholder="put link"
        onChange={(e) => {
          props.onChange({ ...props.data, strLink: e.target.value });
        }}
      />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const LinkTo = () => {
  return (
    <Box borderBottom={"1px solid #E1E4E4"} py={2} px={4}>
      <Text>
        scroll to <strong>our courses</strong>
      </Text>
    </Box>
  );
};

const CourseTab = ({ course = null, ...props }) => {
  return (
    <>
      {course && (
        <Stack spacing={6}>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 1</Text>
              <Text fontWeight={"700"}>1:1</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.one.section1.title}
              onChange={(e) =>
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section1: { ...course.one.section1, title: e.target.value },
                  },
                })
              }
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section1.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section1: {
                          ...course.one.section1,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section1.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section1: {
                          ...course.one.section1,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.one.section1.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section1: {
                      ...course.one.section1,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 2</Text>
              <Text fontWeight={"700"}>1:1</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.one.section2.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section2: { ...course.one.section2, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section2.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section2: {
                          ...course.one.section2,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section2.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section2: {
                          ...course.one.section2,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.one.section2.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section2: {
                      ...course.one.section2,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 3</Text>
              <Text fontWeight={"700"}>1:1</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.one.section3.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section3: { ...course.one.section3, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section3.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section3: {
                          ...course.one.section3,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section3.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section3: {
                          ...course.one.section3,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.one.section3.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section3: {
                      ...course.one.section3,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 4</Text>
              <Text fontWeight={"700"}>1:1</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.one.section4.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section4: { ...course.one.section4, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section4.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section4: {
                          ...course.one.section4,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.one.section4.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      one: {
                        ...course.one,
                        section4: {
                          ...course.one.section4,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.one.section4.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  one: {
                    ...course.one,
                    section4: {
                      ...course.one.section4,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 1</Text>
              <Text fontWeight={"700"}>1:6</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.six.section1.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section1: { ...course.six.section1, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section1.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section1: {
                          ...course.six.section1,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section1.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section1: {
                          ...course.six.section1,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.six.section1.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section1: {
                      ...course.six.section1,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 2</Text>
              <Text fontWeight={"700"}>1:6</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.six.section2.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section2: { ...course.six.section2, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section2.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section2: {
                          ...course.six.section2,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section2.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section2: {
                          ...course.six.section2,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.six.section2.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section2: {
                      ...course.six.section2,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 3</Text>
              <Text fontWeight={"700"}>1:6</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.six.section3.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section3: { ...course.six.section3, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section3.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section3: {
                          ...course.six.section3,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section3.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section3: {
                          ...course.six.section3,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.six.section3.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section3: {
                      ...course.six.section3,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 4</Text>
              <Text fontWeight={"700"}>1:6</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.six.section4.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section4: { ...course.six.section4, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section4.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section4: {
                          ...course.six.section4,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.six.section4.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      six: {
                        ...course.six,
                        section4: {
                          ...course.six.section4,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.six.section4.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  six: {
                    ...course.six,
                    section4: {
                      ...course.six.section4,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 1</Text>
              <Text fontWeight={"700"}>VOD</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.vod.section1.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section1: { ...course.vod.section1, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section1.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section1: {
                          ...course.vod.section1,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section1.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section1: {
                          ...course.vod.section1,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.vod.section1.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section1: {
                      ...course.vod.section1,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 2</Text>
              <Text fontWeight={"700"}>VOD</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.vod.section2.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section2: { ...course.vod.section2, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section2.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section2: {
                          ...course.vod.section2,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section2.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section2: {
                          ...course.vod.section2,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.vod.section2.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section2: {
                      ...course.vod.section2,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 3</Text>
              <Text fontWeight={"700"}>VOD</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.vod.section3.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section3: { ...course.vod.section3, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section3.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section3: {
                          ...course.vod.section3,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section3.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section3: {
                          ...course.vod.section3,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.vod.section3.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section3: {
                      ...course.vod.section3,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <HStack fontSize={"lg"} spacing={8}>
              <Text>section 4</Text>
              <Text fontWeight={"700"}>VOD</Text>
            </HStack>
            <Input
              borderRadius={"lg"}
              placeholder="title"
              defaultValue={course.vod.section4.title}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section4: { ...course.vod.section4, title: e.target.value },
                  },
                });
              }}
            />
            <HStack spacing={6}>
              <HStack spacing={3}>
                <Text>Month</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section4.month}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section4: {
                          ...course.vod.section4,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
              <HStack spacing={3}>
                <Text>Session</Text>
                <Input
                  w={"50px"}
                  placeholder="0"
                  defaultValue={course.vod.section4.session}
                  onChange={(e) => {
                    props.onChange({
                      ...course,
                      vod: {
                        ...course.vod,
                        section4: {
                          ...course.vod.section4,
                          session: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </HStack>
            </HStack>
            <Textarea
              resize={"none"}
              borderRadius={"lg"}
              h={"160px"}
              placeholder="description"
              defaultValue={course.vod.section4.description}
              onChange={(e) => {
                props.onChange({
                  ...course,
                  vod: {
                    ...course.vod,
                    section4: {
                      ...course.vod.section4,
                      description: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

const ArrayManipulationComponent = ({ ...props }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.defaultValue);
  }, [props.defaultValue]);

  const [uploading, setUploading] = useState(false);
  const imageRefList = Array(items.length)
    .fill()
    .map(() => React.createRef()); // useRef();

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    handleUpload(file, index);
  };

  const handleUpload = async (file, index) => {
    let tempList = [...items];
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);

    try {
      const response = await fetch("http://localhost:8080/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        tempList[index] = data.imageUrl;
        setItems(tempList);
        props.setItems(tempList);
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const moveLeft = (index) => {
    if (index > 0) {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        [newItems[index - 1], newItems[index]] = [
          newItems[index],
          newItems[index - 1],
        ];
        props.setItems(newItems);
        return newItems;
      });
    }
  };

  const moveRight = (index) => {
    if (index < items.length - 1) {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        [newItems[index + 1], newItems[index]] = [
          newItems[index],
          newItems[index + 1],
        ];
        props.setItems(newItems);
        return newItems;
      });
    }
  };

  const removeItem = (index) => {
    setItems((prevItems) => {
      let newList = prevItems.filter((_, i) => i !== index);
      props.setItems(newList);
      return newList;
    });
  };

  const addItem = () => {
    setItems((prevItems) => {
      props.setItems([...prevItems, ""]);
      return [...prevItems, ""];
    });
  };

  return (
    <HStack overflowX={"scroll"} whiteSpace={"nowrap"}>
      <HStack>
        {items.map((item, index) => (
          <Box
            key={index}
            w={"512px"}
            h={"160px"}
            backgroundColor="white"
            position="relative"
            bgImage={
              item ? item : require("../../../Asset/Image/transparent.png")
            }
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
          >
            <input
              type="file"
              onChange={(e) => handleFileChange(e, index)}
              ref={imageRefList[index]}
              style={{ display: "none" }}
            />
            <HStack
              spacing={2}
              p={2}
              // position="absolute"
              // top="2px"
              // right="2px"
              justifyContent={"space-between"}
            >
              <HStack>
                <IconButton
                  _hover={{ bgColor: "#000000aa" }}
                  borderRadius={"full"}
                  icon={<ChevronLeftIcon />}
                  size="sm"
                  color={"white"}
                  bgColor={"#00000088"}
                  onClick={() => moveLeft(index)}
                />
                <IconButton
                  _hover={{ bgColor: "#000000aa" }}
                  borderRadius={"full"}
                  icon={<ChevronRightIcon />}
                  size="sm"
                  color={"white"}
                  bgColor={"#00000088"}
                  onClick={() => moveRight(index)}
                />
              </HStack>
              <HStack>
                <IconButton
                  _hover={{ bgColor: "#000000aa" }}
                  borderRadius={"full"}
                  icon={<EditIcon />}
                  size="sm"
                  color={"white"}
                  bgColor={"#00000088"}
                  onClick={() => imageRefList[index].current.click()}
                />
                <IconButton
                  _hover={{ bgColor: "#000000aa" }}
                  borderRadius={"full"}
                  icon={<FiMinus />}
                  size="sm"
                  color={"white"}
                  bgColor={"#00000088"}
                  onClick={() => removeItem(index)}
                />
              </HStack>
            </HStack>
          </Box>
        ))}
      </HStack>
      <IconButton
        icon={<AddIcon />}
        onClick={addItem}
        bgColor={"#00C3BA"}
        color="white"
        borderRadius={"full"}
      />
    </HStack>
  );
};
