import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const UserDetail = (props) => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PaymentData.length / ITEMS_PER_PAGE);
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
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

  useEffect(() => {
    console.log(props.data, props.itemNumber);
  }, []);

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
              User Profile
            </Text>
            <Box>
              <Button
                variant={"outline"}
                borderColor={"#00C3BA"}
                color={"#00C3BA"}
                onClick={() => props.setIsdetail(false)}
              >
                Back to List
              </Button>
            </Box>
          </HStack>
          <Stack>
            <HStack>
              <Text>User code No.</Text>
              <Text>{props.itemNumber}</Text>
            </HStack>
            <HStack justify={"space-between"} spacing={8}>
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
                        Payment
                      </Text>
                      <Text></Text>
                    </HStack>
                  </Stack>
                </Stack>
              </HStack>
              <Stack
                w={"60%"}
                p={4}
                border={"1px solid #E1E4E4"}
                borderRadius={"md"}
              >
                <HStack gap={4}>
                  <Text color={"#4E4E4E"}>Birthday</Text>
                  {/* <Text>DD/MM/YY</Text> */}
                </HStack>
                <HStack gap={4}>
                  <Text color={"#4E4E4E"}>Other class experience</Text>
                  {/* <Text>At all</Text> */}
                </HStack>
                <Stack>
                  <Text color={"#4E4E4E"}>
                    K-pop genre or artist you are interested in
                  </Text>
                  {/* <Text>
                    i love electronic dance genre like shinee, BTS, Seventeen.
                    also Black Pink’s chocela stages are so amazing to aprove me
                  </Text> */}
                </Stack>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
        <Stack>
          <Stack>
            <HStack justify={"space-between"}>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Payment List
              </Text>
            </HStack>
            <TableContainer>
              <Table>
                <Tbody>
                  <Tr fontWeight={"500"} color={"#00C3BA"}>
                    <Td textAlign={"center"}>course</Td>
                    <Td textAlign={"center"}>devision</Td>
                    <Td textAlign={"center"}>trainer</Td>
                    <Td textAlign={"center"}>month</Td>
                    <Td textAlign={"center"}>price</Td>
                    <Td textAlign={"center"}>payment</Td>
                    <Td textAlign={"center"}>date</Td>
                    <Td textAlign={"center"}>receipt</Td>
                  </Tr>
                  {currentData.map((data) => (
                    <Tr>
                      <Td textAlign={"center"}>{`${data.course} course`}</Td>
                      <Td textAlign={"center"}>{data.devision}</Td>
                      <Td textAlign={"center"}>{data.trainer}</Td>
                      <Td textAlign={"center"}>{`${data.month} month`}</Td>
                      <Td textAlign={"center"}>{`$${data.price}`}</Td>
                      <Td textAlign={"center"}>{data.payment}</Td>
                      <Td textAlign={"center"}>{data.date}</Td>
                      <Td textAlign={"center"}>
                        <Button variant={"outline"} borderColor={"black"}>
                          Receipt
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Stack>
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
        </Stack>
        <Stack>
          <HStack spacing={16} justify={"space-between"}>
            <Stack w={"50%"}>
              <Stack>
                <HStack justify={"space-between"}>
                  <Text fontSize={"20px"} fontWeight={"600"}>
                    Inquiry List
                  </Text>
                </HStack>
                <TableContainer>
                  <Table>
                    <Tbody>
                      <Tr fontWeight={"500"} color={"#00C3BA"}>
                        <Td textAlign={"center"}>Tag</Td>
                        <Td textAlign={"center"}>Title</Td>
                        <Td textAlign={"center"}>Date</Td>
                        <Td textAlign={"center"}>State</Td>
                      </Tr>
                      {currentData.map((data) => (
                        <Tr>
                          <Td
                            textAlign={"center"}
                          >{`${data.course} course`}</Td>
                          <Td textAlign={"center"}>{data.devision}</Td>
                          <Td textAlign={"center"}>{data.trainer}</Td>
                          <Td textAlign={"center"}>{`${data.month} month`}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>
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
            </Stack>
            <Stack w={"50%"}>
              <Stack>
                <HStack justify={"space-between"}>
                  <Text fontSize={"20px"} fontWeight={"600"}>
                    Review List
                  </Text>
                </HStack>
                <TableContainer>
                  <Table>
                    <Tbody>
                      <Tr fontWeight={"500"} color={"#00C3BA"}>
                        <Td textAlign={"center"}>Tag</Td>
                        <Td textAlign={"center"}>Title</Td>
                        <Td textAlign={"center"}>Date</Td>
                        <Td textAlign={"center"}>State</Td>
                      </Tr>
                      {currentData.map((data) => (
                        <Tr>
                          <Td
                            textAlign={"center"}
                          >{`${data.course} course`}</Td>
                          <Td textAlign={"center"}>{data.devision}</Td>
                          <Td textAlign={"center"}>{data.trainer}</Td>
                          <Td textAlign={"center"}>{`${data.month} month`}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>
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
            </Stack>
          </HStack>
          <Box display={"flex"} justifyContent={"end"}>
            <Button borderRadius={"xl"} color={"white"} bgColor={"#FF3CA2"}>
              Delete Member
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default UserDetail;

const PaymentData = [
  {
    course: "Professional",
    devision: "Vocal",
    trainer: "Trainer Name",
    month: "3",
    price: "99",
    payment: "credit",
    date: "08:36 21-07-2024",
    receipt: true,
  },
];
