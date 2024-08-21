import { Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { items } from "./ClassInterestTab";
import { host_url, popmag } from "../../App";
import { auth } from "../../Firebase/Config";
import { useNavigate } from "react-router-dom";

const ClassinProgress = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getClasses = () => {
      auth.onAuthStateChanged((user) => {
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
            // 커리큘럼 정보를 가지고옵니다.
            let classes = [];

            res.classes?.forEach((element) => {
              fetch(`${host_url}/curriculums/get`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: element.curriculum,
                }),
              })
                .then((res) => res.json())
                .then((res) => {
                  let curriculum = res;
                  fetch(`${host_url}/users/get`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: res.teacherId,
                    }),
                  })
                    .then((res) => res.json())
                    .then((teacher) => {
                      classes?.push({
                        curriculum: curriculum,
                        teacher: teacher,
                        element: element,
                      });
                      setClasses(classes);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };

    getClasses();
    console.log("classes!!!!", classes);
  }, []);

  return (
    <Stack>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Class in Progress
      </Text>
      <Stack spacing={2}>
        {classes?.map(({ curriculum, teacher, element }) => (
          <HStack
            border={"1px solid #E1E4E4"}
            px={6}
            py={8}
            borderRadius={"md"}
            justify={"space-between"}
          >
            <Stack>
              <Text fontWeight={"500"}>
                {curriculum.difficulty} {curriculum.category} course
              </Text>
              <Text fontSize={"22px"} fontWeight={"700"}>
                {curriculum.title}
              </Text>
            </Stack>
            <HStack spacing={8} textAlign={"center"}>
              <Flex gap={4}>
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    Progress
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    {Math.round(
                      (element.sessions / element.totalSession) * 100
                    )}
                    %
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    Trainer
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    {teacher.name}
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    Sessions
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    {element.sessions}/{element.totalSession}
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    Month
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    {element.month}
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    GMT
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    {element.gmt ? "element.gmt" : "LA"}
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
                w={"140px"}
                size={"lg"}
                bgColor={element.sessions !== "100%" ? "#00B2FF" : popmag}
                color={"white"}
                onClick={() => {
                  let item = curriculum;
                  navigate(`/curriculum/program/${curriculum.id}`, {
                    state: { item, teacher },
                  });
                }}
              >
                CONTINUE
              </Button>
            </HStack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ClassinProgress;
