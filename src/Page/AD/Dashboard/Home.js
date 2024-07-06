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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
        pb={16}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <HStack p={16} justify={"space-between"} spacing={16} align={"start"}>
          <Stack spacing={8} w={"full"}>
            <Stack pb={8}>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Banners
              </Text>
              <HStack spacing={6} justify={"space-between"}>
                {/* 등록된 이미지 */}
                <Box
                  w={"50%"}
                  h={"200px"}
                  position={"relative"}
                  borderRadius={"xl"}
                  overflow={"hidden"}
                  bgColor={"white"}
                  Image
                  bgImage={require("../../../Asset/Image/banner 1.png")}
                  bgSize={"contain"}
                  bgRepeat={"no-repeat"}
                >
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
                </Box>
                {/* 등록할 이미지 */}
                <Box
                  w={"50%"}
                  h={"200px"}
                  position={"relative"}
                  borderRadius={"xl"}
                  bgImage={require("../../../Asset/Image/checker.png")}
                  bgSize={"contain"}
                  bgRepeat={"no-repeat"}
                >
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
                    top={8}
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
              <Textarea h={"200px"} resize={"none"} borderRadius={"xl"} />
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
              <TrainerSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 3</Text>
                <Text fontWeight={"700"}>Trainer 2</Text>
              </HStack>
              <TrainerSection />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 4</Text>
                <Text fontWeight={"700"}>Title 2</Text>
              </HStack>
              <Input borderRadius={"xl"} />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 5</Text>
                <Text fontWeight={"700"}>Trainer 3</Text>
              </HStack>
              <TrainerSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 6</Text>
                <Text fontWeight={"700"}>Trainer 4</Text>
              </HStack>
              <TrainerSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 7</Text>
                <Text fontWeight={"700"}>Trainer 5</Text>
              </HStack>
              <TrainerSection />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 8</Text>
                <Text fontWeight={"700"}>Title 3</Text>
              </HStack>
              <Input borderRadius={"xl"} />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 9</Text>
                <Text fontWeight={"700"}>Vocal Division</Text>
              </HStack>
              <CurriculumSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 10</Text>
                <Text fontWeight={"700"}>Dance Division</Text>
              </HStack>
              <CurriculumSection />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 11</Text>
                <Text fontWeight={"700"}>Title 4</Text>
              </HStack>
              <Input borderRadius={"xl"} />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 12</Text>
                <Text fontWeight={"700"}>Begginer Course</Text>
              </HStack>
              <CurriculumSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 13</Text>
                <Text fontWeight={"700"}>Intermediate Course</Text>
              </HStack>
              <CurriculumSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 14</Text>
                <Text fontWeight={"700"}>Advanced Course</Text>
              </HStack>
              <CurriculumSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 15</Text>
                <Text fontWeight={"700"}>Professional Course</Text>
              </HStack>
              <CurriculumSection />
            </Stack>
          </Stack>
          <Stack spacing={8} pt={8}>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 16</Text>
                <Text fontWeight={"700"}>Promotion</Text>
              </HStack>
              <PromotionSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 17</Text>
                <Text fontWeight={"700"}>With us</Text>
              </HStack>
              <PromotionSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 18</Text>
                <Text fontWeight={"700"}>Lesson 1:1</Text>
              </HStack>
              <LessonSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 19</Text>
                <Text fontWeight={"700"}>Lesson 1:6</Text>
              </HStack>
              <LessonSection />
            </Stack>
            <Stack spacing={3}>
              <HStack fontSize={"lg"} spacing={8}>
                <Text>section 20</Text>
                <Text fontWeight={"700"}>Lesson VOD</Text>
              </HStack>
              <LessonSection />
            </Stack>
          </Stack>
        </Stack>
        <Stack p={16}>
          <Text>Course Description</Text>
          <Tabs>
            <TabList justifyContent={"center"} borderBottomColor={"#00C3BA"}>
              <Tab
                px={20}
                color={"#E1E4E4"}
                borderBottomColor={"#E1E4E4"}
                _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
              >
                Vocal
              </Tab>
              <Tab
                px={20}
                color={"#E1E4E4"}
                borderBottomColor={"#E1E4E4"}
                _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
              >
                Dance
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <VocalTab />
              </TabPanel>
              <TabPanel px={0}>
                <DanceTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Home;

const TrainerSection = () => {
  return (
    <Stack spacing={3}>
      <HStack h={"full"}>
        <Box boxSize={"200px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
          <Image />
        </Box>
        <Stack flex={1} justify={"space-between"} h={"full"}>
          <Input borderRadius={"xl"} />
          <Textarea h={"140px"} resize={"none"} borderRadius={"xl"} />
        </Stack>
      </HStack>
      <LinkTo />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const CurriculumSection = () => {
  return (
    <Stack spacing={3}>
      <HStack>
        <Box boxSize={"200px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
          <Image />
        </Box>
        <Textarea flex={1} h={"full"} resize={"none"} borderRadius={"xl"} />
      </HStack>
      <LinkTo />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const PromotionSection = () => {
  return (
    <Stack spacing={3}>
      <Box w={"full"} h={"300px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
        <Image />
      </Box>
      <LinkTo />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const LessonSection = () => {
  return (
    <Stack spacing={3}>
      <HStack>
        <Box boxSize={"200px"} borderRadius={"md"} bgColor={"#E1E4E4"}>
          <Image />
        </Box>
        <Textarea flex={1} h={"full"} resize={"none"} borderRadius={"xl"} />
      </HStack>
      <LinkTo />
      <Text>image spec: 200px*200px 150dpi</Text>
    </Stack>
  );
};

const LinkTo = () => {
  return (
    <Box borderBottom={"1px solid #E1E4E4"} py={2} px={4}>
      <Text>
        scroll to <strong>our courses</strong>
      </Text>
    </Box>
  );
};

const VocalTab = () => {
  return (
    <Stack>
      <HStack fontSize={"lg"} spacing={8}>
        <Text>section 1</Text>
        <Text fontWeight={"700"}>1:1</Text>
      </HStack>
      <Input borderRadius={"xl"} />
      <HStack spacing={6}>
        <Text>Month</Text>
        <Input w={"50px"} />
        <Text>Session</Text>
        <Input w={"50px"} />
      </HStack>
      <Textarea resize={"none"} borderRadius={"xl"} h={"auto"} />
    </Stack>
  );
};

const DanceTab = () => {
  return (
    <Stack>
      <HStack fontSize={"lg"} spacing={8}>
        <Text>section 1</Text>
        <Text fontWeight={"700"}>1:1</Text>
      </HStack>
    </Stack>
  );
};
