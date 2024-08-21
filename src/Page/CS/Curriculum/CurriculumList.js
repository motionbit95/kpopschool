import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { popyellow, popblue, popmint, popmag, host_url } from "../../../App";

const CurriculumList = () => {
  const location = useLocation();
  const state = location.state;
  const { category, difficulty } = state;
  const [item, setItem] = useState({
    category: category,
    difficulty: difficulty,
  });

  const [curriculums, setCurriculums] = useState([]);

  useEffect(() => {
    const getCurriculums = async () => {
      const res = await fetch(`${host_url}/curriculums/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [
            { field: "category", operator: "==", value: category },
            { field: "difficulty", operator: "==", value: difficulty },
          ],
        }),
      });
      const data = await res.json();
      data.forEach((res, index) => {
        console.log(res.teacherId);
        if (!res.teacherId) return;
        fetch(`${host_url}/users/get`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: res.teacherId,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            data[index].teacherName = res.name;
            setCurriculums(data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
    getCurriculums();
  }, []);

  useEffect(() => {
    console.log(curriculums);
    curriculums.forEach((item) => {
      console.log(item);
    });
  }, [curriculums]);

  const navigate = useNavigate();
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
            <Text>Intro</Text>
            <FiChevronRight />
            <Text>{item.category}</Text>
            <FiChevronRight />
            <Text color={popmint}>{`${item.difficulty} Course`}</Text>
          </Flex>
          <Stack spacing={4}>
            <Text
              fontSize={"3xl"}
              fontWeight={"600"}
              color={
                item.difficulty === "Beginner"
                  ? popyellow
                  : item.difficulty === "Intermediate"
                  ? popmint
                  : item.difficulty === "Advanced"
                  ? "#00B2FF"
                  : popmag
              }
            >
              {`${item.difficulty} course`}
            </Text>
            {curriculums.map((item) => (
              <HStack
                cursor={"pointer"}
                border={"1px solid #E1E4E4"}
                borderRadius={"md"}
                p={6}
                justify={"space-between"}
                onClick={() => {
                  fetch(`${host_url}/teachers/get`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: item.teacherId,
                    }),
                  })
                    .then((res) => {
                      return res.json();
                    })
                    .then((teacher) => {
                      navigate("/curriculum/program/" + item.id, {
                        state: { item, teacher },
                      });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <HStack spacing={6} alignItems={"start"}>
                  <Image src={item.image} aspectRatio={3 / 2} h={"160px"} />

                  <Stack>
                    <Text fontWeight={"700"} fontSize={"22px"}>
                      {item.title}
                    </Text>
                    <HStack spacing={8}>
                      <Text>Trainer</Text>
                      <Text>
                        {item.teacherName ? item.teacherName : "Unknown"}
                      </Text>
                      <Flex gap={1} pb={2}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Image
                            key={i}
                            src={
                              i < 4
                                ? require("../../../Asset/Icon/starFill.png")
                                : require("../../../Asset/Icon/starDefault.png")
                            }
                            alt="star"
                            boxSize="24px" // 적절한 크기로 설정
                            cursor={"pointer"}
                          />
                        ))}
                      </Flex>
                    </HStack>
                    <Text>{item.description}</Text>
                    <HStack
                      divider={<StackDivider borderColor={"#E1E4E4"} />}
                      spacing={3}
                      fontSize={"15px"}
                    >
                      <HStack spacing={3}>
                        <Text>Number of lickes</Text>
                        <Text color={popmint}>{item.likes}</Text>
                      </HStack>
                      <HStack spacing={3}>
                        <Text>review</Text>
                        <Text color={popmint}>{item.review}</Text>
                      </HStack>
                      <HStack spacing={3}>
                        <Text>student</Text>
                        <Text color={popmint}>{item.student}</Text>
                      </HStack>
                    </HStack>
                    <HStack spacing={8}>
                      <HStack>
                        <Text fontSize={"15px"}>Month</Text>
                        <Text color={popmint} fontSize={"17px"}>
                          {item.month}
                        </Text>
                      </HStack>
                      <HStack>
                        <Text fontSize={"15px"}>Sessions</Text>
                        <HStack spacing={0} fontSize={"17px"}>
                          <Text color={popmint}>{item.sessions}</Text>
                          <Text>/{item.totalSessions}</Text>
                        </HStack>
                      </HStack>
                      <HStack>
                        <Text fontSize={"15px"}>Price</Text>
                        <Text
                          color={popmint}
                          fontSize={"17px"}
                        >{`$${item.price} per session`}</Text>
                      </HStack>
                      <HStack>
                        <Text fontSize={"15px"}>GMT</Text>
                        <Text color={popmint} fontSize={"17px"}>
                          {item?.gmt ? item?.gmt : "LA"}
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </HStack>
                {/* <Text>in Progress</Text> */}
              </HStack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default CurriculumList;
