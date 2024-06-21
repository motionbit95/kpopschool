import { Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { items } from "./ClassInterestTab";

const ClassinProgress = () => {
  const items = [
    {
      difficulty: "Professional",
      category: "Vocal",
      title: "Debut or Die",
      trainer: "Mr.Lee",
      sessions: "3/12",
      month: "3",
      progress: "24%",
      state: "in Class",
    },
    {
      difficulty: "Advanced",
      category: "Dance",
      title: "Important of Prounance",
      trainer: "Mr.Lee",
      sessions: "5/24",
      month: "6",
      progress: "24%",
      state: "in Class",
    },
    {
      difficulty: "Beginner",
      category: "Vocal",
      title: "Vocal Pitch",
      trainer: "Jessie",
      sessions: "5/24",
      month: "6",
      progress: "100%",
      state: "in Class",
    },
  ];

  return (
    <Stack>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Class in Progress
      </Text>
      <Stack spacing={2}>
        {items.map((item) => (
          <HStack
            border={"1px solid #E1E4E4"}
            px={6}
            py={8}
            borderRadius={"md"}
            justify={"space-between"}
          >
            <Stack>
              <Text fontWeight={"500"}>
                {item.difficulty} {item.category} course
              </Text>
              <Text fontSize={"22px"} fontWeight={"700"}>
                {item.title}
              </Text>
            </Stack>
            <HStack spacing={8} textAlign={"center"}>
              <Flex gap={4}>
                {item?.progress === "100%" || (
                  <Stack>
                    <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                      Progress
                    </Text>
                    <Text
                      fontSize={"15px"}
                      color={"#4E4E4E"}
                      fontWeight={"500"}
                    >
                      {item.progress}
                    </Text>
                  </Stack>
                )}
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    Trainer
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    Mr.Lee
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    Sessions
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    {item.sessions}
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                    Month
                  </Text>
                  <Text fontSize={"15px"} color={"#4E4E4E"} fontWeight={"500"}>
                    {item.month}
                  </Text>
                </Stack>
                {item?.progress === "100%" || (
                  <Stack>
                    <Text fontSize={"sm"} fontWeight={"500"} color={"#C0C0C0"}>
                      STATE
                    </Text>
                    <Text
                      fontSize={"15px"}
                      color={"#4E4E4E"}
                      fontWeight={"500"}
                    >
                      {item.state}
                    </Text>
                  </Stack>
                )}
              </Flex>
              <Button
                w={"140px"}
                size={"lg"}
                bgColor={item.progress !== "100%" ? "#00B2FF" : "#FF3CA2"}
                color={"white"}
                onClick={() => console.log(item)}
              >
                {item.progress !== "100%" ? "CONTINUE" : "APPLY"}
              </Button>
            </HStack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ClassinProgress;
