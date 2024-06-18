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
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Cummunity = () => {
  const [FAQs, setFAQs] = useState([]);
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const [communityIndex, setCommunityIndex] = useState(0);
  useEffect(() => {
    if (location.state && location.state.communityIndex !== undefined) {
      setCommunityIndex(location.state.communityIndex);
    }
  }, [location.state]);

  const handleTabChange = (index) => {
    setCommunityIndex(index);
  };

  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    console.log(host_url);

    const getFAQs = async () => {
      fetch(`${host_url}/faq/list`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const sortList = res.sort((a, b) => {
            return a.index - b.index;
          });
          setFAQs(sortList);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getEvents = async () => {
      fetch(`${host_url}/event/list`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const sortList = res.sort((a, b) => {
            return a.index - b.index;
          });
          setEvents(sortList);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getFAQs();
    getEvents();
  }, []);

  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Box py={6}>
          <Text fontSize={"5xl"} fontWeight={"bold"} color={"#00B2FF"}>
            Cummunity
          </Text>
        </Box>
        <Tabs
          variant={"unstyled"}
          index={communityIndex}
          onChange={handleTabChange}
        >
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
                h={"600px"}
              >
                <TabList
                  flexDirection={"column"}
                  w={"500px"}
                  overflowY={"scroll"}
                  pr={2}
                  gap={4}
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "transparent", // 트랙의 배경을 투명하게 설정
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#888", // 스크롤바 색상
                      borderRadius: "10px", // 스크롤바 모서리 둥글게
                      border: "none", // 스크롤바 보더 제거
                    },
                  }}
                >
                  {events.map((event, id) => (
                    <Tab p={0} key={id}>
                      <Stack align={"start"}>
                        <Box borderRadius={"xl"} overflow={"hidden"}>
                          <Image src={event.thumbnail} alt={""} />
                        </Box>
                        <Text>{event.title}</Text>
                      </Stack>
                    </Tab>
                  ))}
                </TabList>
                <TabPanels borderLeft={"1px solid #E1E4E4"} h={"full"} pl={2}>
                  {events.map((event, id) => (
                    <TabPanel key={id} p={0} h={"full"}>
                      <Stack h={"full"} spacing={4}>
                        <Box w={"full"} overflow={"hidden"} borderRadius={"xl"}>
                          <Image w={"full"} src={event.thumbnail} alt={""} />
                        </Box>
                        <Stack spacing={8} align={"center"}>
                          <Box w={"full"}>
                            <Text
                              fontSize={"4xl"}
                              color={"#00C3BA"}
                              fontWeight={"600"}
                            >
                              {event.title}
                            </Text>
                          </Box>
                          <Box w={"60%"}>
                            <Text color={"#4E4E4E"} fontSize={"lg"}>
                              {event.description}
                            </Text>
                          </Box>
                        </Stack>
                      </Stack>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel p={0} pb={24}>
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
