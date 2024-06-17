import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TeacherItem = ({ teacher }) => {
  const Nav = useNavigate();

  return (
    <Stack spacing={16}>
      <Stack>
        <Text fontSize={"40px"} fontWeight={"600"} color={"#00C3BA"}>
          {`Vocal Trainer`}
        </Text>
        <Stack gap={24} pt={4}>
          {teacher.map(
            (teacher) =>
              teacher.category === "Vocal" && (
                <HStack gap={4} align={"start"}>
                  <Stack spacing={4}>
                    <Box boxSize={"250px"} bgColor={"gray"} borderRadius={"xl"}>
                      <Image src={teacher.profile} alt={""} />
                    </Box>
                    <Button
                      onClick={() => Nav(`/teachers/${teacher.id}`)}
                      size={"lg"}
                      variant={"outline"}
                      colorScheme="green"
                      fontWeight={"600"}
                    >
                      Apply
                    </Button>
                  </Stack>
                  <Stack spacing={2}>
                    <Text fontSize={"3xl"} fontWeight={"600"}>
                      {teacher.name}
                    </Text>
                    <Stack spacing={0} fontSize={"lg"}>
                      <Text whiteSpace={"pre-line"}>{teacher.career}</Text>
                    </Stack>
                  </Stack>
                </HStack>
              )
          )}
        </Stack>
      </Stack>
      <Stack>
        <Text
          fontSize={"40px"}
          fontWeight={"600"}
          color={"#00C3BA"}
          textAlign={"end"}
        >
          {`Dance Trainer`}
        </Text>
        <SimpleGrid columns={3} columnGap={24} pt={4}>
          {teacher.map(
            (teacher) =>
              teacher.category === "Dance" && (
                <Stack gap={4} align={"start"} w={"full"}>
                  <Stack
                    w={"full"}
                    border={"1px solid #E1E4E4"}
                    borderRadius={"xl"}
                    overflow={"hidden"}
                  >
                    <Box>
                      <Image src={teacher.profile} alt={""} w={"full"} />
                    </Box>

                    <Stack spacing={2} p={6}>
                      <Text fontSize={"3xl"} fontWeight={"600"}>
                        {teacher.name}
                      </Text>
                      <Stack spacing={0} fontSize={"lg"}>
                        <Text whiteSpace={"pre-line"}>{teacher.career}</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Box
                    w={"full"}
                    display={"flex"}
                    justifyContent={"center"}
                    px={12}
                  >
                    <Button
                      w={"full"}
                      size={"lg"}
                      variant={"outline"}
                      colorScheme="green"
                      fontWeight={"600"}
                      onClick={() => Nav(`/teachers/${teacher.id}`)}
                    >
                      Apply
                    </Button>
                  </Box>
                </Stack>
              )
          )}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export const LessonItem = () => {
  const Nav = useNavigate();
  return (
    <Stack spacing={16}>
      <Stack>
        <Text fontSize={"40px"} fontWeight={"600"} color={"#00C3BA"}>
          {`Vocal`}
        </Text>
        <SimpleGrid display={"flex"} column={2} columnGap={12} pt={4}>
          <Box w={"full"} h={"full"} borderRadius={"lg"} overflow={"hidden"}>
            <Image
              w={"full"}
              src={require("../Asset/Image/Curriculum_dance.png")}
              alt={""}
            />
          </Box>
          <Stack justifyContent={"space-between"} fontSize={"2xl"} w={700}>
            <Text>
              Unleash the magic of K-pop with your voice! K-pop School's vocal
              course allows you to take your vocal skills to the next level
              through professional vocal training.
            </Text>
            <Text>
              You can practice the latest K-pop hits with the same vocal trainer
              who taught and coached the K-pop stars you love. Learn everything
              it takes to become a K-pop star, including pronunciation,
              vocalization, and emotional expression. Prepare your own stage
              right now!
            </Text>
            <Box display={"flex"} justifyContent={"flex-start"}>
              <Button
                color={"white"}
                bgColor={"#00C3BA"}
                size={"xl"}
                px={16}
                py={4}
                onClick={() => {
                  const category = "Vocal";
                  const format = "1:1";
                  Nav(`/curriculum/${category}`, {
                    state: { category, format },
                  });
                }}
              >
                Go CURICULLUM
              </Button>
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
      <Stack>
        <Text
          fontSize={"40px"}
          fontWeight={"600"}
          color={"#00C3BA"}
          textAlign={"end"}
        >
          {`Dance`}
        </Text>
        <SimpleGrid display={"flex"} column={2} columnGap={12} pt={4}>
          <Stack justifyContent={"space-between"} fontSize={"2xl"} w={700}>
            <Text>
              Unleash the magic of K-pop with your voice! K-pop School's vocal
              course allows you to take your vocal skills to the next level
              through professional vocal training.
            </Text>
            <Text>
              You can practice the latest K-pop hits with the same vocal trainer
              who taught and coached the K-pop stars you love. Learn everything
              it takes to become a K-pop star, including pronunciation,
              vocalization, and emotional expression. Prepare your own stage
              right now!
            </Text>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Button
                color={"white"}
                bgColor={"#00C3BA"}
                size={"xl"}
                px={16}
                py={4}
                onClick={() => {
                  const category = "Dance";
                  const format = "1:1";
                  Nav(`/curriculum/${category}`, {
                    state: { category, format },
                  });
                }}
              >
                Go CURICULLUM
              </Button>
            </Box>
          </Stack>
          <Box w={"full"} h={"full"} borderRadius={"lg"} overflow={"hidden"}>
            <Image
              w={"full"}
              src={require("../Asset/Image/Curriculum_dance.png")}
              alt={""}
            />
          </Box>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};
