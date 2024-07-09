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

  useEffect(() => {
    console.log(teacher);
  }, []);

  return (
    <>
      {teacher && (
        <Stack spacing={16}>
          <Stack>
            <Text fontSize={"40px"} fontWeight={"600"} color={"#00C3BA"}>
              {teacher.title1}
            </Text>
            <Stack gap={24} pt={4}>
              <HStack gap={4} align={"start"}>
                <Stack spacing={4}>
                  <Box boxSize={"250px"} bgColor={"gray"} borderRadius={"xl"}>
                    <Image src={teacher.trainer1.image} alt={""} />
                  </Box>
                  <Button
                    onClick={() => Nav(teacher.trainer1.strLink)}
                    size={"lg"}
                    variant={"outline"}
                    color={"#00C3BA"}
                    borderColor={"#00C3BA"}
                    fontWeight={"600"}
                  >
                    Apply
                  </Button>
                </Stack>
                <Stack spacing={2}>
                  <Text fontSize={"3xl"} fontWeight={"600"}>
                    {teacher.trainer1.name}
                  </Text>
                  <Stack spacing={0} fontSize={"lg"}>
                    <Text whiteSpace={"pre-line"}>
                      {teacher.trainer1.description}
                    </Text>
                  </Stack>
                </Stack>
              </HStack>
              <HStack gap={4} align={"start"}>
                <Stack spacing={4}>
                  <Box boxSize={"250px"} bgColor={"gray"} borderRadius={"xl"}>
                    <Image src={teacher.trainer2.image} alt={""} />
                  </Box>
                  <Button
                    onClick={() => Nav(teacher.trainer2.strLink)}
                    size={"lg"}
                    variant={"outline"}
                    color={"#00C3BA"}
                    borderColor={"#00C3BA"}
                    fontWeight={"600"}
                  >
                    Apply
                  </Button>
                </Stack>
                <Stack spacing={2}>
                  <Text fontSize={"3xl"} fontWeight={"600"}>
                    {teacher.trainer2.name}
                  </Text>
                  <Stack spacing={0} fontSize={"lg"}>
                    <Text whiteSpace={"pre-line"}>
                      {teacher.trainer2.description}
                    </Text>
                  </Stack>
                </Stack>
              </HStack>
            </Stack>
          </Stack>
          <Stack>
            <Text
              fontSize={"40px"}
              fontWeight={"600"}
              color={"#00C3BA"}
              textAlign={"end"}
            >
              {teacher.title2}
            </Text>
            <SimpleGrid columns={3} columnGap={24} pt={4}>
              <Stack gap={4} align={"start"} w={"full"}>
                <Stack
                  w={"full"}
                  border={"1px solid #E1E4E4"}
                  borderRadius={"xl"}
                  overflow={"hidden"}
                >
                  <Box>
                    <Image src={teacher.trainer3.image} alt={""} w={"full"} />
                  </Box>

                  <Stack spacing={2} p={6}>
                    <Text fontSize={"3xl"} fontWeight={"600"}>
                      {teacher.trainer3.name}
                    </Text>
                    <Stack spacing={0} fontSize={"lg"}>
                      <Text whiteSpace={"pre-line"}>
                        {teacher.trainer3.description}
                      </Text>
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
                    color={"#00C3BA"}
                    borderColor={"#00C3BA"}
                    fontWeight={"600"}
                    onClick={() => Nav(teacher.trainer3.strLink)}
                  >
                    Apply
                  </Button>
                </Box>
              </Stack>
              <Stack gap={4} align={"start"} w={"full"}>
                <Stack
                  w={"full"}
                  border={"1px solid #E1E4E4"}
                  borderRadius={"xl"}
                  overflow={"hidden"}
                >
                  <Box>
                    <Image src={teacher.trainer4.image} alt={""} w={"full"} />
                  </Box>

                  <Stack spacing={2} p={6}>
                    <Text fontSize={"3xl"} fontWeight={"600"}>
                      {teacher.trainer4.name}
                    </Text>
                    <Stack spacing={0} fontSize={"lg"}>
                      <Text whiteSpace={"pre-line"}>
                        {teacher.trainer4.description}
                      </Text>
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
                    color={"#00C3BA"}
                    borderColor={"#00C3BA"}
                    fontWeight={"600"}
                    onClick={() => Nav(teacher.trainer4.strLink)}
                  >
                    Apply
                  </Button>
                </Box>
              </Stack>
              <Stack gap={4} align={"start"} w={"full"}>
                <Stack
                  w={"full"}
                  border={"1px solid #E1E4E4"}
                  borderRadius={"xl"}
                  overflow={"hidden"}
                >
                  <Box>
                    <Image src={teacher.trainer5.image} alt={""} w={"full"} />
                  </Box>

                  <Stack spacing={2} p={6}>
                    <Text fontSize={"3xl"} fontWeight={"600"}>
                      {teacher.trainer5.name}
                    </Text>
                    <Stack spacing={0} fontSize={"lg"}>
                      <Text whiteSpace={"pre-line"}>
                        {teacher.trainer5.description}
                      </Text>
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
                    color={"#00C3BA"}
                    borderColor={"#00C3BA"}
                    fontWeight={"600"}
                    onClick={() => Nav(teacher.trainer5.strLink)}
                  >
                    Apply
                  </Button>
                </Box>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export const LessonItem = ({ lessons }) => {
  const Nav = useNavigate();

  useEffect(() => {
    console.log(lessons);
  }, []);
  return (
    <>
      {lessons && (
        <Stack spacing={16}>
          <Stack>
            <Text fontSize={"40px"} fontWeight={"600"} color={"#00C3BA"}>
              {`Vocal`}
            </Text>
            <SimpleGrid display={"flex"} column={2} columnGap={12} pt={4}>
              <Box
                w={"full"}
                h={"full"}
                borderRadius={"lg"}
                overflow={"hidden"}
              >
                <Image w={"full"} src={lessons.vocal.image} alt={""} />
              </Box>
              <Stack
                justifyContent={"space-between"}
                whiteSpace={"pre-line"}
                fontSize={"2xl"}
                w={700}
              >
                <Text>{lessons.vocal.description}</Text>
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
                      Nav(lessons.vocal.strLink, {
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
                <Text whiteSpace={"pre-line"}>{lessons.dance.description}</Text>
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
                      Nav(lessons.dance.strLink, {
                        state: { category, format },
                      });
                    }}
                  >
                    Go CURICULLUM
                  </Button>
                </Box>
              </Stack>
              <Box
                w={"full"}
                h={"full"}
                borderRadius={"lg"}
                overflow={"hidden"}
              >
                <Image
                  w={"full"}
                  src={require("../Asset/Image/dance.png")}
                  alt={""}
                />
              </Box>
            </SimpleGrid>
          </Stack>
        </Stack>
      )}
    </>
  );
};
