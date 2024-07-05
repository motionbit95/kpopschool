import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
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
import React, { useEffect, useState } from "react";
import { host_url } from "../../../../App";

const UserDetail = (props) => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [inquirys, setInquiries] = useState([]);
  useEffect(() => {
    const getInquiry = async () => {
      fetch(`${host_url}/inquiry/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [],
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setInquiries(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getInquiry();
    console.log(inquirys);
  }, []);

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
  const totalPages = Math.ceil(PaymentData.length / ITEMS_PER_PAGE);

  const [openPayment, setOpenPayment] = useState(false);
  const [openinquiry, setOpeninquiry] = useState(false);
  const handleOpenPayment = () => {
    setOpenPayment(!openPayment);
  };
  const handleOpeninquiry = () => {
    setOpeninquiry(!openinquiry);
  };

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
                    <Tr cursor={"pointer"} onClick={handleOpenPayment}>
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
            {openPayment && (
              <PaymentModal
                isOpen={handleOpenPayment}
                onClose={handleOpenPayment}
                userData={props.data}
                PaymentData={PaymentData}
              />
            )}
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
          <HStack spacing={16} justify={"space-between"} align={"start"}>
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
                      {inquirys.map((data) => (
                        <Tr cursor={"pointer"} onClick={handleOpeninquiry}>
                          <Td textAlign={"center"}>{data.tag}</Td>
                          <Td textAlign={"center"}>{data.title}</Td>
                          <Td textAlign={"center"}>
                            {toDate(data.createdAt)
                              .toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              })
                              .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                          </Td>
                          <Td textAlign={"center"}>{data.state}</Td>
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
                        <Td textAlign={"center"}>Division</Td>
                        <Td textAlign={"center"}>Detail</Td>
                        <Td textAlign={"center"}>Date</Td>
                        <Td textAlign={"center"}>Rating</Td>
                      </Tr>
                      {ReviewData.map((data) => (
                        <Tr>
                          <Td textAlign={"center"}>{data.devision}</Td>
                          <Td textAlign={"center"}>{data.detail}</Td>
                          <Td textAlign={"center"}>{data.date}</Td>
                          <Td textAlign={"center"}>
                            <Flex
                              gap={1}
                              w={"100%"}
                              align={"center"}
                              justify={"center"}
                            >
                              {Array.from({ length: 5 }, (_, i) => (
                                <Image
                                  key={i}
                                  src={
                                    i < data.rating
                                      ? require("../../../../Asset/Icon/starFill.png")
                                      : require("../../../../Asset/Icon/starDefault.png")
                                  }
                                  alt="star"
                                  boxSize="18px" // 적절한 크기로 설정
                                />
                              ))}
                            </Flex>
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
          </HStack>
          <Box display={"flex"} justifyContent={"end"}>
            <Button
              borderRadius={"xl"}
              color={"white"}
              bgColor={"#FF3CA2"}
              onClick={() => alert("Delete User Button")}
            >
              Delete Member
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default UserDetail;

const PaymentModal = (props) => {
  const userData = props.userData;
  const PaymentData = props.PaymentData;
  return (
    <>
      <Modal size={"3xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody p={0}>
            <Stack divider={<StackDivider borderColor="#00C3BA" />}>
              <Stack spacing={4} py={4} px={8}>
                <Stack>
                  <HStack fontWeight={"500"}>
                    <Text>Order Number</Text>
                    <Text>202407215136</Text>
                  </HStack>
                  <HStack>
                    <Text color={"#4E4E4E"}>Order Date</Text>
                    <Text>21-07-2024</Text>
                  </HStack>
                  <HStack>
                    <Text color={"#4E4E4E"}>Payment method</Text>
                    <Text>Credit</Text>
                  </HStack>
                </Stack>
                <Stack>
                  <Text fontWeight={"500"}>Order information</Text>
                  <Text color={"#4E4E4E"}>{userData.name}</Text>
                  <Text color={"#4E4E4E"}>{userData.email}</Text>
                  {/* <Text color={"#4E4E4E"}>{userData.snsId}</Text> */}
                </Stack>
              </Stack>
              <Stack py={4} px={8}>
                <Text>Order details</Text>
                {PaymentData.map((data) => (
                  <HStack
                    borderY={"1px solid #E1E4E4"}
                    py={4}
                    px={2}
                    justify={"space-between"}
                  >
                    <Text color={"#4E4E4E"}>{`${data.course} course`}</Text>
                    <Text color={"#4E4E4E"}>{data.devision}</Text>
                    <Text color={"#4E4E4E"}>{data.trainer}</Text>
                    <Text color={"#4E4E4E"}>{`${data.month} month`}</Text>
                    <Text color={"#FF3CA2"}>{`$${data.price}`}</Text>
                  </HStack>
                ))}
                <HStack>
                  <Text color={"#4E4E4E"}>Order state</Text>
                  <Text>Order completed</Text>
                </HStack>
                <HStack>
                  <Text color={"#4E4E4E"}>Quantity</Text>
                  <Text>1 class</Text>
                </HStack>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const inquiryModal = (props) => {
  return (
    <>
      <Modal size={"3xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody p={0}>
            <Stack>
              <Stack py={4} px={8}>
                {PaymentData.map((data) => (
                  <HStack
                    borderY={"1px solid #E1E4E4"}
                    py={4}
                    px={2}
                    justify={"space-between"}
                  >
                    <Text color={"#4E4E4E"}>{`${data.course} course`}</Text>
                    <Text color={"#4E4E4E"}>{data.devision}</Text>
                    <Text color={"#4E4E4E"}>{data.trainer}</Text>
                    <Text color={"#4E4E4E"}>{`${data.month} month`}</Text>
                    <Text color={"#FF3CA2"}>{`$${data.price}`}</Text>
                  </HStack>
                ))}
                <HStack>
                  <Text color={"#4E4E4E"}>Order state</Text>
                  <Text>Order completed</Text>
                </HStack>
                <HStack>
                  <Text color={"#4E4E4E"}>Quantity</Text>
                  <Text>1 class</Text>
                </HStack>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

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

const InquiryData = [
  {
    tag: "Class",
    title: "video quality",
    date: "21-07-2024",
    state: "Waiting for",
  },
];

const ReviewData = [
  {
    devision: "Trainer",
    detail: "I can feel that trainer is working ...",
    date: "21-07-2024",
    rating: "5",
  },
];
