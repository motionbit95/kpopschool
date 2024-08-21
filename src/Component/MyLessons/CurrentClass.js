import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { popmint, popmag, host_url } from "../../App";
import { auth } from "../../Firebase/Config";

const CurrentClass = () => {
  const [cnt, setCnt] = useState({
    totalClass: 0,
    totalSessions: 0,
    totalMonth: 0,
    totalReview: 0,
  });
  const [currentSession, setCurrentSession] = useState(0);
  const [currentClass, setCurrentClass] = useState({});
  useEffect(() => {
    // 현재 수강 정보
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
            let classCnt = res.classes?.length;
            let sessionCnt = 0;
            let monthCnt = 0;
            let reviewCnt = 0;
            cnt.totalSessions = 0;
            res.classes?.forEach((element) => {
              monthCnt = monthCnt + parseInt(element.month);
              sessionCnt = sessionCnt + parseInt(element.sessions);
              reviewCnt = element.reviewId !== "" ? reviewCnt + 1 : reviewCnt;
              setCurrentSession(parseInt(element.sessions));
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
                  console.log(res);
                  let curriculum = res;
                  setCnt({
                    totalClass: classCnt,
                    totalSessions: sessionCnt,
                    totalMonth: monthCnt,
                    totalReview: reviewCnt,
                  });

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
                      setCurrentClass({
                        curriculum: curriculum,
                        teacher: teacher.name,
                      });
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
  }, []);
  return (
    <Stack>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Current Class
      </Text>
      <HStack border={"1px solid #E1E4E4"} borderRadius={"md"} spacing={0}>
        <Stack flex={1} borderRight={"1px solid #E1E4E4"} py={6} px={8}>
          <HStack justify={"space-between"}>
            <Stack>
              <Text pb={"6px"} color={popmint} fontSize={"lg"}>
                The class I'm taking now
              </Text>
              <Text fontSize={"lg"} fontWeight={"700"} color={"4E4E4E"}>
                {currentClass?.curriculum?.title}
              </Text>
              <Flex
                fontSize={"sm"}
                gap={4}
                fontWeight={"500"}
                color={"#C0C0C0"}
              >
                <Text>
                  {currentClass?.curriculum?.difficulty}{" "}
                  {currentClass?.curriculum?.category} course
                </Text>
                <Text>{currentClass?.teacher}</Text>
              </Flex>
            </Stack>
            <CircularProgress
              size={"80px"}
              value={Math.round(
                (currentSession /
                  parseInt(currentClass.curriculum?.totalSessions)) *
                  100
              )}
              color={popmag}
            >
              <CircularProgressLabel
                fontSize={"md"}
                fontWeight={"600"}
                color={popmag}
              >
                {Math.round(
                  (currentSession /
                    parseInt(currentClass.curriculum?.totalSessions)) *
                    100
                )}
                %
              </CircularProgressLabel>
            </CircularProgress>
          </HStack>
        </Stack>
        <HStack
          flex={1}
          py={6}
          px={8}
          justify={"space-between"}
          textAlign={"center"}
        >
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Total Class
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={popmint}>
              {cnt.totalClass}
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Total Sessions
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={popmint}>
              {cnt.totalSessions}
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Total Month
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={popmint}>
              {cnt.totalMonth}
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={"500"} color={"#4E4E4E"}>
              Review
            </Text>
            <Text fontWeight={"700"} fontSize={"22px"} color={popmint}>
              {cnt.totalReview}
            </Text>
          </Stack>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default CurrentClass;
