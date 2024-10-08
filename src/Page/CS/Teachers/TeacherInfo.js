import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import MessageBox from "../../../Component/MessageBox";
import { host_url, popmag } from "../../../App";
import { auth } from "../../../Firebase/Config";

const TeacherInfo = ({ teacher }) => {
  const [userInfo, setUserInfo] = useState({});
  const toast = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const [modalState, setModalState] = useState({
    isInfo: false,
  });

  useEffect(() => {
    console.log(isFavorite);
  }, [isFavorite]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user.uid);
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
          setUserInfo(res);
          setIsFavorite(
            res.interestTeacher
              ? res.interestTeacher.includes(teacher.id)
              : false
          );
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [teacher.id]);

  const handleClickFavorite = () => {
    setModalState({
      ...modalState,
      isInfo: true,
    });
    // console.log("handleClickFavorite");
    setIsFavorite(!isFavorite);

    let interestTeacher = userInfo.interestTeacher
      ? userInfo.interestTeacher
      : [];

    if (!isFavorite) {
      if (!interestTeacher.includes(teacher.id))
        interestTeacher.push(teacher.id);
    } else {
      interestTeacher = interestTeacher.filter((id) => id !== teacher.id);
    }

    console.log(interestTeacher);

    fetch(`${host_url}/users/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userInfo.id,
        interestTeacher: interestTeacher,
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast({
          title: "링크를 저장하였습니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "링크저장에 실패하였습니다.",
          description: error.toString(),
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <HStack justify={"space-between"} align={"flex-start"}>
      <MessageBox
        isOpen={modalState.isInfo}
        onClose={() => setModalState({ ...modalState, isInfo: false })}
      >
        <Text textAlign={"center"}>
          Trainer has been{" "}
          <span style={{ color: popmag }}>
            {isFavorite ? "added" : "removed"}{" "}
          </span>
          to the list
        </Text>
      </MessageBox>
      <HStack gap={4} h={"250px"}>
        <Box boxSize={"250px"} bgColor={"gray"} borderRadius={"xl"}>
          <Image src={teacher.profile} alt={""} />
        </Box>
        <Stack h={"full"} justify={"space-between"}>
          <Text fontSize={"3xl"} fontWeight={"600"}>
            {teacher.name}
          </Text>
          <Stack spacing={0} fontSize={"lg"}>
            <Text whiteSpace={"pre-line"}>{teacher.career}</Text>
          </Stack>
          <Stack spacing={0} fontSize={"sm"}>
            <Grid
              templateColumns={"repeat(2, 1fr)"}
              columnGap={3}
              maxW={"400px"}
            >
              <GridItem>instructor's rating</GridItem>
              <GridItem alignContent={"center"}>
                <Flex gap={1}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Image
                      key={i}
                      src={
                        i < teacher.rating
                          ? require("../../../Asset/Icon/starFill.png")
                          : require("../../../Asset/Icon/starDefault.png")
                      }
                      alt="star"
                      boxSize="18px" // 적절한 크기로 설정
                    />
                  ))}
                </Flex>
              </GridItem>
              <GridItem>review</GridItem>
              <GridItem>{teacher.review}</GridItem>
              <GridItem>student</GridItem>
              <GridItem>{teacher.student?.toLocaleString()}</GridItem>
            </Grid>
          </Stack>
        </Stack>
      </HStack>
      <ButtonGroup size={"lg"}>
        <IconButton
          onClick={handleClickFavorite}
          aria-label="famous"
          icon={
            <Image
              src={
                !isFavorite
                  ? require("../../../Asset/Icon/star.png")
                  : require("../../../Asset/Icon/starFill.png")
              }
              alt={""}
              w={"25px"}
            />
          }
          bgColor={"white"}
        />
        <IconButton
          aria-label="shared"
          onClick={handleClickCopyLink}
          icon={
            <Image
              src={require("../../../Asset/Icon/shared.png")}
              alt={""}
              size={"25px"}
            />
          }
          bgColor={"white"}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default TeacherInfo;
