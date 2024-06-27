import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Image,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Home = () => {
  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack
        w={"full"}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <HStack p={16} justify={"space-between"} align={"start"}>
          <Stack spacing={8}>
            <Stack pb={8}>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Banners
              </Text>
              <HStack spacing={6}>
                {/* 등록된 이미지 */}
                <Box
                  w={"50%"}
                  position={"relative"}
                  borderRadius={"xl"}
                  overflow={"hidden"}
                  bgColor={"#E1E4E4"}
                >
                  <Image
                    src={require("../../../Asset/Image/banner 1.png")}
                    borderRadius={"lg"}
                  />
                  <Circle
                    position={"absolute"}
                    size={"33px"}
                    bgColor={"rgba(78, 78, 78, 0.75)"}
                    top={2}
                    left={2}
                    zIndex={1}
                  >
                    <ChevronRightIcon color={"white"} />
                  </Circle>
                </Box>
                {/* 등록할 이미지 */}
                <Box
                  w={"50%"}
                  position={"relative"}
                  borderRadius={"xl"}
                  bgColor={"#E1E4E4"}
                >
                  <Image
                    src={require("../../../Asset/Image/checker.png")}
                    borderRadius={"lg"}
                  />
                  <Circle
                    position={"absolute"}
                    size={"33px"}
                    bgColor={"rgba(78, 78, 78, 0.75)"}
                    top={2}
                    left={2}
                    zIndex={1}
                  >
                    <ChevronLeftIcon color={"white"} />
                  </Circle>
                  <Circle
                    position={"absolute"}
                    size={"33px"}
                    bgColor={"rgba(78, 78, 78, 0.75)"}
                    top={2}
                    left={12}
                    zIndex={1}
                  >
                    <ChevronRightIcon color={"white"} />
                  </Circle>
                  <Circle
                    position={"absolute"}
                    size={"33px"}
                    bgColor={"rgba(78, 78, 78, 0.75)"}
                    top={2}
                    right={12}
                    zIndex={1}
                  >
                    <Image src={require("../../../Asset/Icon/pencil.png")} />
                  </Circle>
                  <Circle
                    position={"absolute"}
                    size={"33px"}
                    bgColor={"rgba(78, 78, 78, 0.75)"}
                    top={2}
                    right={2}
                    zIndex={1}
                  >
                    <FiMinus color="white" size={20} />
                  </Circle>
                  <Circle
                    position={"absolute"}
                    size={"33px"}
                    bgColor={"#00C3BA"}
                    top={16}
                    right={"-12"}
                    zIndex={1}
                  >
                    <FiPlus color="white" size={20} />
                  </Circle>
                </Box>
              </HStack>
            </Stack>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Main intro text
              </Text>
              <Textarea h={"200px"} resize={"none"} />
            </Stack>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Main Button link
              </Text>
              <Box borderBottom={"1px solid #E1E4E4"} py={2} px={4}>
                <Text>
                  scroll to <strong>lessons</strong>
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Button size={"lg"} color={"white"} bgColor={"#00C3BA"} mt={-10}>
            SAVE
          </Button>
        </HStack>
        <Stack p={16} w={"full"}>
          <Text fontSize={"20px"} fontWeight={"600"}>
            Matching section
          </Text>
          <Stack spacing={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 1</Text>
                <Text fontWeight={"700"}>Title 1</Text>
              </HStack>
              <Input borderRadius={"xl"} />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 2</Text>
                <Text fontWeight={"700"}>Trainer 1</Text>
              </HStack>
              <HStack h={"full"}>
                <Box boxSize={"200px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
                  <Image />
                </Box>
                <Stack flex={1} justify={"space-between"} h={"full"}>
                  <Input borderRadius={"xl"} />
                  <Textarea h={"140px"} resize={"none"} borderRadius={"xl"} />
                </Stack>
              </HStack>
              <Box borderBottom={"1px solid #E1E4E4"} py={2} px={4}>
                <Text>
                  scroll to <strong>our courses</strong>
                </Text>
              </Box>
              <Text>image spec: 200px*200px 150dpi</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Home;
