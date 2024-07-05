import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Payment = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PaymentData.length / ITEMS_PER_PAGE);

  const [buttonTab, setButtonTab] = useState(0);

  const handleButtonDate = (index) => {
    setButtonTab(index);
  };

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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = PaymentData.slice(startIndex, endIndex);

  return (
    <Flex w={"100%"} h={"100%"} color={"#4E4E4E"}>
      <Stack
        w={"full"}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <Stack>
          <Stack p={16}>
            <Stack align={"end"}>
              <Input w={"25%"} />
              <HStack justify={"end"}>
                <ButtonGroup>
                  <Button
                    onClick={() => handleButtonDate(0)}
                    variant={buttonTab === 0 ? "solid" : "outline"}
                    bgColor={buttonTab === 0 ? "#FFCC00" : "white"}
                    color={buttonTab === 0 ? "white" : "#C0C0C0"}
                    _hover={"none"}
                    _active={"none"}
                  >
                    a week
                  </Button>
                  <Button
                    onClick={() => handleButtonDate(1)}
                    variant={buttonTab === 1 ? "solid" : "outline"}
                    bgColor={buttonTab === 1 ? "#FFCC00" : "white"}
                    color={buttonTab === 1 ? "white" : "#C0C0C0"}
                    _hover={"none"}
                    _active={"none"}
                  >
                    a month
                  </Button>
                  <Button
                    onClick={() => handleButtonDate(2)}
                    variant={buttonTab === 2 ? "solid" : "outline"}
                    bgColor={buttonTab === 2 ? "#FFCC00" : "white"}
                    color={buttonTab === 2 ? "white" : "#C0C0C0"}
                    _hover={"none"}
                    _active={"none"}
                  >
                    3 months
                  </Button>
                </ButtonGroup>
                <Input w={"25%"} />
              </HStack>
            </Stack>
            <HStack
              p={8}
              justify={"space-between"}
              divider={<StackDivider />}
              border={"1px solid #E1E4E4"}
              borderRadius={"md"}
            >
              <Stack
                h={"full"}
                justify={"space-between"}
                align={"center"}
                textAlign={"center"}
              >
                <Text fontSize={"20px"} fontWeight={"500"}>
                  Total
                </Text>
                <Text fontSize={"3xl"} color={"#FF3CA2"} fontWeight={"600"}>
                  868$
                </Text>
                <Stack fontSize={"sm"} fontWeight={"500"} spacing={0}>
                  <Text>24/07/01 - 24/07/09</Text>
                  <Text>VAT 146$ / Pre-tax amount 1040$</Text>
                </Stack>
              </Stack>
              <Stack
                h={"full"}
                justify={"space-between"}
                align={"center"}
                textAlign={"center"}
                spacing={4}
              >
                <Text fontSize={"lg"} fontWeight={"500"}>
                  Income by Course
                </Text>
                <Box w={"185px"} h={"140px"} bgColor={"gray.100"}></Box>
              </Stack>
              <Stack
                h={"full"}
                justify={"space-between"}
                align={"center"}
                textAlign={"center"}
                spacing={4}
              >
                <Text fontSize={"lg"} fontWeight={"500"}>
                  Number of Students by Course
                </Text>
                <Box w={"185px"} h={"140px"} bgColor={"gray.100"}></Box>
              </Stack>
              <Stack
                h={"full"}
                justify={"space-between"}
                align={"center"}
                textAlign={"center"}
                spacing={4}
              >
                <Text fontSize={"lg"} fontWeight={"500"}>
                  Division
                </Text>
                <Box w={"212px"} h={"142px"} bgColor={"gray.100"}></Box>
              </Stack>
            </HStack>
          </Stack>
          <Stack px={16} w={"full"} justify={"space-between"}>
            <Stack pb={16}>
              <HStack justify={"space-between"}>
                <Text fontSize={"20px"} fontWeight={"600"}>
                  Payment List
                </Text>
              </HStack>
              <TableContainer>
                <Table>
                  <Tbody>
                    <Tr fontWeight={"500"} color={"#00C3BA"}>
                      <Td textAlign={"center"}>No.</Td>
                      <Td textAlign={"center"}>Name</Td>
                      {/* <Td textAlign={"center"}>ID</Td> */}
                      <Td textAlign={"center"}>Division</Td>
                      <Td textAlign={"center"}>Course</Td>
                      <Td textAlign={"center"}>Class</Td>
                      <Td textAlign={"center"}>Trainer</Td>
                      <Td textAlign={"center"}>Amount</Td>
                      <Td textAlign={"center"}>Method</Td>
                      <Td textAlign={"center"}>Date</Td>
                    </Tr>
                    {currentData.map((data) => (
                      <Tr>
                        <Td textAlign={"center"}>{`${data.no}.`}</Td>
                        <Td textAlign={"center"}>{data.name}</Td>
                        <Td textAlign={"center"}>{data.id}</Td>
                        <Td textAlign={"center"}>{data.division}</Td>
                        <Td textAlign={"center"}>{data.course}</Td>
                        <Td textAlign={"center"}>{data.class}</Td>
                        <Td textAlign={"center"}>{data.trainer}</Td>
                        <Td textAlign={"center"}>{data.amount}</Td>
                        <Td textAlign={"center"}>{data.method}</Td>
                        <Td textAlign={"center"}>{data.date}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
            <Flex
              mt={4}
              px={16}
              pb={16}
              justifyContent="center"
              alignItems="center"
            >
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
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Payment;

const PaymentData = [
  {
    no: 1,
    name: "username",
    id: "아이디",
    division: "Vocal",
    course: "Beginner",
    class: "Vocal theory",
    trainer: "Mr.Lee",
    amount: "80",
    method: "Credit",
    date: "03-07-2024",
  },
];
