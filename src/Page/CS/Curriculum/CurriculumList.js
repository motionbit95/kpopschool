import { Container, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { popyellow, popblue, popmint } from "../../../App";

const CurriculumList = () => {
  const location = useLocation();
  const { state } = location;
  const { item } = state;
  return (
    <Flex flex={1} direction={"column"}>
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
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default CurriculumList;
