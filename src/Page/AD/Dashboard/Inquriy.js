import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
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
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Inquiry = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(InquiryData.length / ITEMS_PER_PAGE);

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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = InquiryData.slice(startIndex, endIndex);
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
                <Tr fontWeight={"500"} color={"#00C3BA"}>
                  <Td textAlign={"center"}>No.</Td>
                  <Td textAlign={"center"}>Tag</Td>
                  <Td textAlign={"center"}>Title</Td>
                  <Td textAlign={"center"}>Date</Td>
                  <Td textAlign={"center"}>State</Td>
                </Tr>
                {currentData.map((data) => (
                  <Tr onClick={() => handleOpeninquiry(data)}>
                    <Td textAlign={"center"}>{`${data.no}.`}</Td>
                    <Td textAlign={"center"}>{data.tag}</Td>
                    <Td textAlign={"center"}>{data.title}</Td>
                    <Td textAlign={"center"}>{data.date}</Td>
                    <Td
                      textAlign={"center"}
                      color={
                        data.state === "completed"
                          ? "#FF3CA2"
                          : data.state === "Waiting for"
                          ? "#FFCC00"
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
              color={"#00C3BA"}
              borderColor={"#00C3BA"}
            />
            <ButtonGroup ml={4} mr={4}>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  color={"white"}
                  bg={currentPage === index + 1 ? "#00C3BA" : "#E1E4E4"}
                >
                  {index + 1}
                </Button>
              ))}
            </ButtonGroup>
            <IconButton
              icon={<ChevronRightIcon fontSize={"30px"} />}
              isDisabled={currentPage === totalPages}
              onClick={handleNextPage}
              color={"#00C3BA"}
              variant={"outline"}
              borderColor={"#00C3BA"}
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
  return (
    <Modal size={"3xl"} isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <HStack
              borderY={"1px solid #E1E4E4"}
              py={4}
              px={2}
              justify={"space-between"}
            >
              <Text color={"#4E4E4E"}>Jane Deo</Text>
              <Text color={"#4E4E4E"}>Jane_DOoee</Text>
              <Text color={"#4E4E4E"}>21-07-2024</Text>
              <Text color={"#4E4E4E"}>email</Text>
            </HStack>
            <Stack>
              <HStack>
                <Text>Tag</Text>
                <Text>{data.tag}</Text>
              </HStack>
              <HStack>
                <Text>Title</Text>
                <Text>{data.title}</Text>
              </HStack>
            </Stack>
            <Stack>
              <Text>I accidentally paid for another teacher's course.</Text>
              <Text>Please refund that portion.</Text>
              <Text>I paid for Mr. Lee's Advanced Course.</Text>
            </Stack>
            <Stack p={6} borderRadius={"md"} bgColor={"#E1E4E4"}></Stack>
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
