import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TrainerDetail = (props) => {
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };
  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack
        px={16}
        pt={16}
        pb={32}
        w={"full"}
        spacing={8}
        justify={"space-between"}
      >
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Trainer Profile
            </Text>
            <HStack>
              <Button
                variant={"outline"}
                borderColor={"#00C3BA"}
                color={"#00C3BA"}
                onClick={() => props.setIsdetail(false)}
              >
                Back to List
              </Button>
              <Button color={"white"} bgColor={"#00C3BA"}>
                SAVE
              </Button>
            </HStack>
          </HStack>
          <Stack>
            <HStack>
              <Text>User code No.</Text>
              <Text>{props.itemNumber}</Text>
            </HStack>
            <HStack spacing={4} w={"40%"}>
              <Box boxSize={"160px"} borderRadius={"md"} bgColor={"gray.200"}>
                <Image src={props.data.profile} />
              </Box>
              <Stack spacing={4}>
                <Text fontSize={"lg"} fontWeight={"500"}>
                  {`${props.data.name} ${props.data.firstName}`}
                </Text>
                <Stack>
                  <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      ID
                    </Text>
                    <Text></Text>
                  </HStack>
                  <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      Email
                    </Text>
                    <Text>{props.data.email}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      Date
                    </Text>
                    <Text>
                      {toDate(props.data.createdAt)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      Rating
                    </Text>
                    <Flex gap={1} align={"center"} justify={"center"}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Image
                          key={i}
                          src={
                            i < props.data.rating
                              ? require("../../../../Asset/Icon/starFill.png")
                              : require("../../../../Asset/Icon/starDefault.png")
                          }
                          alt="star"
                          boxSize="18px" // 적절한 크기로 설정
                        />
                      ))}
                    </Flex>
                  </HStack>
                </Stack>
              </Stack>
            </HStack>
            <Stack>
              <Text>About Career</Text>
              <Stack p={6} border={"1px solid #E1E4E4"} borderRadius={"md"}>
                <Text>{props.data.career}</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default TrainerDetail;
