import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { popyellow, popblue, popmint, popmag, host_url } from "../../../App";

const Inquiry = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const [popupOpen, setPopupOpen] = useState(false);
  const [inquirydata, setInquirydata] = useState([]);
  const handleOpeninquiry = (data) => {
    setPopupOpen(true);
    setInquirydata(data);
  };

  const [inquiryList, setInquiryList] = useState([]);

  const totalPages = Math.ceil(inquiryList.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = inquiryList.slice(startIndex, endIndex);

  useEffect(() => {
    const getInquiry = async () => {
      fetch(`${host_url}/inquiry/list`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setInquiryList(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getInquiry();
  }, []);

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack
        w={"full"}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <Stack p={16}>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Inquiry List
            </Text>
            <Input w={"300px"} />
          </HStack>
          <TableContainer>
            <Table>
              <Tbody>
                <Tr fontWeight={"500"} color={popmint}>
                  <Td textAlign={"center"}>No.</Td>
                  <Td textAlign={"center"}>Tag</Td>
                  <Td textAlign={"center"}>Title</Td>
                  <Td textAlign={"center"}>Date</Td>
                  <Td textAlign={"center"}>State</Td>
                </Tr>
                {currentData.map((data, index) => (
                  <Tr onClick={() => handleOpeninquiry(data)}>
                    <Td textAlign={"center"}>{`${index + 1}.`}</Td>
                    <Td textAlign={"center"}>{data.tag}</Td>
                    <Td textAlign={"center"}>{data.title}</Td>
                    <Td textAlign={"center"}>{data.date}</Td>
                    <Td
                      textAlign={"center"}
                      color={
                        data.state === "completed"
                          ? popmag
                          : data.state === "waiting for"
                          ? popyellow
                          : "black"
                      }
                    >
                      {data.state}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <InquiryModal
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            data={inquirydata}
          />
          {/* {InquiryData.length > ITEMS_PER_PAGE && ( */}
          <Flex mt={4} justifyContent="center" alignItems="center">
            <IconButton
              icon={<ChevronLeftIcon fontSize={"30px"} />}
              onClick={handlePrevPage}
              isDisabled={currentPage === 1}
              variant={"outline"}
              color={popmint}
              borderColor={popmint}
            />
            <ButtonGroup ml={4} mr={4}>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  color={"white"}
                  bg={currentPage === index + 1 ? popmint : "#E1E4E4"}
                >
                  {index + 1}
                </Button>
              ))}
            </ButtonGroup>
            <IconButton
              icon={<ChevronRightIcon fontSize={"30px"} />}
              isDisabled={currentPage === totalPages}
              onClick={handleNextPage}
              color={popmint}
              variant={"outline"}
              borderColor={popmint}
            />
          </Flex>
          {/* )} */}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Inquiry;

const InquiryModal = (props) => {
  const data = props.data;

  const [reply, setReply] = useState("");

  const handleSubmit = () => {
    console.log(reply);

    fetch(`${host_url}/inquiry/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        reply: reply,
        state: "completed",
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        props.onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      isCentered
      size={"3xl"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={6}>
            <HStack
              borderY={"1px solid #E1E4E4"}
              py={4}
              px={2}
              justify={"space-between"}
            >
              <Text color={"#4E4E4E"}>Jane Deo</Text>
              <Text color={"#4E4E4E"}>Jane_DOoee</Text>
              <Text color={"#4E4E4E"}>{data.date}</Text>
              <Text color={"#4E4E4E"}>email</Text>
            </HStack>
            <Stack spacing={4}>
              <HStack>
                <Text w={"70px"}>Tag</Text>
                <Text>{data.tag}</Text>
              </HStack>
              <HStack>
                <Text w={"70px"}>Title</Text>
                <Text>{data.title}</Text>
              </HStack>
              <Text whiteSpace={"pre-line"} fontWeight={"300"}>
                {data.details}
              </Text>
            </Stack>
            {data.state === "completed" && (
              <Stack p={6} borderRadius={"md"} bgColor={"#E1E4E4"}>
                <Text>{data.reply}</Text>
              </Stack>
            )}
            {data.state === "waiting for" && (
              <Stack spacing={6} py={6}>
                <Textarea
                  bgColor={"#F1F1F1"}
                  resize={"none"}
                  height={"200px"}
                  border={"none"}
                  placeholder={"put text"}
                  onChange={(e) => setReply(e.target.value)}
                ></Textarea>
                <Center>
                  <Button
                    bgColor={popmint}
                    color={"white"}
                    w={"fit-content"}
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </Button>
                </Center>
              </Stack>
            )}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const InquiryData = [
  {
    no: 1,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "Waiting for",
  },
  {
    no: 2,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 3,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 4,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 5,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 6,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 7,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 8,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 9,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 10,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
  {
    no: 11,
    tag: "payment",
    title: "dumy",
    date: "12-05-2024",
    state: "completed",
  },
];
