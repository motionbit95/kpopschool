import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Cummunity = () => {
  const events = [
    {
      name: "event1",
      image: require("../../Asset/Image/event1.png"),
      title: "title1",
      discription: "description1",
    },
    {
      name: "event1",
      image: require("../../Asset/Image/event1.png"),
      title: "title1",
      discription: "description1",
    },
    {
      name: "event1",
      image: require("../../Asset/Image/event1.png"),
      title: "title1",
      discription: "description1",
    },
    {
      name: "event1",
      image: require("../../Asset/Image/event1.png"),
      title: "title1",
      discription: "description1",
    },
  ];
  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Box py={6}>
          <Text fontSize={"5xl"} fontWeight={"bold"} color={"#00B2FF"}>
            Curriculum
          </Text>
        </Box>
        <Tabs variant={"unstyled"}>
          <TabList gap={12}>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              event
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              FAQ
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <Tabs
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
              >
                <TabList
                  flexDirection={"column"}
                  w={"400px"}
                  h={"600px"}
                  overflowY={"scroll"}
                  pr={2}
                  gap={4}
                >
                  {events.map((item, id) => (
                    <Tab p={0} key={id}>
                      <Stack align={"start"}>
                        <Box borderRadius={"xl"} overflow={"hidden"}>
                          <Image src={item.image} alt={""} />
                        </Box>
                        <Text>{item.name}</Text>
                      </Stack>
                    </Tab>
                  ))}
                </TabList>
                <TabPanels>
                  {events.map((item, id) => (
                    <TabPanel key={id} p={0}>
                      <Stack>
                        <Box w={"full"}>
                          <Image src={item.image} alt={""} />
                        </Box>
                        <Text>{item.title}</Text>
                        <Box>
                          <Text>{item.discription}</Text>
                        </Box>
                      </Stack>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel p={0}>
              <Box py={6} display={"flex"} justifyContent={"flex-end"}>
                <InputGroup w={"500px"}>
                  <Input />
                  <InputRightElement>
                    <Icon as={FiSearch} color={"#E1E4E4"} />
                  </InputRightElement>
                </InputGroup>
              </Box>

              <Stack borderY={"1px solid #00C3BA"}>
                <Accordion allowToggle>
                  {FAQs.map((faq, id) => (
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex={1} textAlign={"left"}>
                          <Text>{faq.question}</Text>
                        </Box>
                        <AccordionIcon color={"#00B2FF"} />
                      </AccordionButton>
                      <AccordionPanel>{faq.answer}</AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default Cummunity;

export const FAQs = [
  {
    id: 1,
    question: "How do I pay?",
    answer: "1",
  },
  {
    id: 2,
    question: "Video playback error",
    answer: "2",
  },
  {
    id: 3,
    question: "AI playback error",
    answer: "3",
  },
  {
    id: 4,
    question: "When the loading screen lasts more than 1 minute during payment",
    answer: "4",
  },
  {
    id: 5,
    question: "Changing lesson course",
    answer: "5",
  },
  {
    id: 6,
    question: "Class refund information",
    answer: "6",
  },
];
