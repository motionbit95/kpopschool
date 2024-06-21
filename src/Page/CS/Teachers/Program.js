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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Program = () => {
  const location = useLocation();
  const { state } = location;
  const item = state;
  const toast = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = () => {
    console.log("handleClickFavorite");
    setIsFavorite(!isFavorite);
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
    <Flex flex={1} direction={"column"}>
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
            <Text>Curriculum</Text>
            <FiChevronRight />
            <Text>Intro</Text>
            <FiChevronRight />
            <Text>{item.category}</Text>
            <FiChevronRight />
            <Text>{`${item.difficulty} course`}</Text>
            <FiChevronRight />
            <Text color={"#00C3BA"}></Text>
          </Flex>
          {/* 강의 정보 */}
          <Stack>
            <HStack spacing={4}>
              <Box w={"400px"} borderRadius={"md"} overflow={"hidden"}>
                <Image src={item.image} />
              </Box>
              <Stack flex={1}>
                <HStack justify={"space-between"}>
                  <Text fontSize={"3xl"} fontWeight={"600"}>
                    {item.title}
                  </Text>
                  <ButtonGroup size={"lg"}>
                    <IconButton
                      onClick={handleClickFavorite}
                      aria-label="famous"
                      icon={
                        <Image
                          src={
                            isFavorite
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
                <Stack>
                  <Text fontSize={"lg"}>{item.description}</Text>
                  <Grid
                    templateColumns={"repeat(2, 1fr)"}
                    columnGap={3}
                    maxW={"400px"}
                    fontSize={"15px"}
                  >
                    <GridItem>Number of likes</GridItem>
                    <GridItem
                      fontSize={"17px"}
                      alignContent={"center"}
                    ></GridItem>
                    <GridItem>review</GridItem>
                    <GridItem fontSize={"17px"}>{item.review}</GridItem>
                    <GridItem>student</GridItem>
                    <GridItem fontSize={"17px"}>
                      {!isNaN(Number(item.student))
                        ? Number(item.student).toLocaleString()
                        : "Invalid number"}
                    </GridItem>
                    <GridItem pt={3}>Tag</GridItem>
                    <GridItem pt={3}>
                      <Flex gap={3}>
                        <Tag
                          borderRadius={"xl"}
                          bgColor={"#FFCC00"}
                          color={"white"}
                          fontWeight={"bold"}
                          px={3}
                        >
                          {item.format}
                        </Tag>
                        <Tag
                          borderRadius={"xl"}
                          bgColor={"#FFCC00"}
                          color={"white"}
                          fontWeight={"bold"}
                          px={3}
                        >
                          {item.category}
                        </Tag>
                        <Tag
                          borderRadius={"xl"}
                          bgColor={"#FFCC00"}
                          color={"white"}
                          fontWeight={"bold"}
                          px={3}
                        >
                          {item.difficulty}
                        </Tag>
                      </Flex>
                    </GridItem>
                  </Grid>
                </Stack>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </Container>
      {/* 강의 정보 */}
      <Tabs>
        <TabList justifyContent={"center"} borderBottomColor={"#00C3BA"}>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Curriculum
          </Tab>
          <Tab
            px={20}
            color={"#E1E4E4"}
            borderBottomColor={"#E1E4E4"}
            _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Review
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel>
            <Container minW={"container.xl"} py={8}></Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Program;
