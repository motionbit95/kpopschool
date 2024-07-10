import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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
import { host_url, popmag } from "../../../../App";
import ConfirmBox from "../../../../Component/ConfirmBox";
import MessageBox from "../../../../Component/MessageBox";
import { popmint } from "../../../../App";

const UserDetail = (props) => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [inquirys, setInquiries] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [userDeleteStep, setUserDeleteStep] = useState(0);
  useEffect(() => {
    const getInquiry = async () => {
      fetch(`${host_url}/inquiry/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [
            {
              field: "uid",
              operator: "==",
              value: props.data.id,
            },
          ],
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

  const getReview = async () => {
    fetch(`${host_url}/review/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [
          {
            field: "userId",
            operator: "==",
            value: props.data.id,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("review", res);
        setReviewList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReview();
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
  const [openInquiry, setOpenInquiry] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const handleOpenPayment = () => {
    setOpenPayment(!openPayment);
  };
  const handleOpenInquiry = () => {
    setOpenInquiry(!openInquiry);
  };
  const handleOpenReview = () => {
    setOpenReview(!openReview);
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <ConfirmBox
        isOpen={userDeleteStep === 1}
        onClose={() => {}}
        onConfirm={() => {
          console.log("삭제되었습니다.");
          setUserDeleteStep(2);
          // 유저 삭제
          fetch(`${host_url}/users/deleteAuth/${props.data.id}`)
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <Text>Do you really want to </Text>
        <Text color={popmag}>delete information?</Text>
      </ConfirmBox>
      <MessageBox
        isOpen={userDeleteStep === 2}
        onClose={() => {
          setUserDeleteStep(0);
          window.location.reload();
        }}
      >
        <Text>Member information has been</Text>
        <Text color={popmag}>deleted</Text>
      </MessageBox>
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
                borderColor={popmint}
                color={popmint}
                onClick={() => props.setIsdetail(false)}
              >
                Back to List
              </Button>
            </Box>
          </HStack>
          <Stack>
            <HStack>
              <Text>User code No.</Text>
              <Text>{props.data.id}</Text>
            </HStack>
            <HStack justify={"space-between"} spacing={8}>
              <HStack spacing={4} w={"40%"}>
                <Box boxSize={"160px"} borderRadius={"md"} bgColor={"gray.200"}>
                  <Image src={props.data.profile} />
                </Box>
                <Stack spacing={4}>
                  <Text fontSize={"lg"} fontWeight={"500"}>
                    {`${props.data.name} ${
                      props.data.firstName ? props.data.firstName : ""
                    }`}
                  </Text>
                  <Stack>
                    {/* <HStack>
                      <Text w={"70px"} color={"#4E4E4E"}>
                        ID
                      </Text>
                      <Text></Text>
                    </HStack> */}
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
                  <Text color={"gray.500"}>Birthday</Text>
                  <Text>{props.data.birthday}</Text>
                </HStack>
                <HStack gap={4}>
                  <Text color={"gray.500"}>Other class experience</Text>
                  <Text>{props.data.experience}</Text>
                </HStack>
                <Stack>
                  <Text color={"gray.500"}>
                    K-pop genre or artist you are interested in
                  </Text>
                  <Text>{props.data.interest}</Text>
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
                  <Tr fontWeight={"500"} color={popmint}>
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
        </Stack>
        <Stack spacing={16}>
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
                      <Tr fontWeight={"500"} color={popmint}>
                        <Td textAlign={"center"}>Tag</Td>
                        <Td textAlign={"center"}>Title</Td>
                        <Td textAlign={"center"}>Date</Td>
                        <Td textAlign={"center"}>State</Td>
                      </Tr>
                      {inquirys.map((data) => (
                        <Tr cursor={"pointer"} onClick={handleOpenInquiry}>
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
                {openInquiry && (
                  <InquiryModal
                    isOpen={handleOpenInquiry}
                    onClose={handleOpenInquiry}
                    // inquiryData={inquiryData}
                  />
                )}
              </Stack>
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
                      <Tr fontWeight={"500"} color={popmint}>
                        <Td textAlign={"center"}>Division</Td>
                        <Td textAlign={"center"}>Detail</Td>
                        <Td textAlign={"center"}>Date</Td>
                        <Td textAlign={"center"}>Rating</Td>
                      </Tr>
                      {reviewList.map((data) => (
                        <>
                          <Tr cursor={"pointer"} onClick={handleOpenReview}>
                            <Td textAlign={"center"}>Trainer</Td>
                            <Td
                              textAlign={"center"}
                              maxW={"250px"}
                              overflow={"hidden"}
                              textOverflow={"ellipsis"}
                            >
                              {data.comment}
                            </Td>
                            <Td textAlign={"center"}>
                              {toDate(data.createdAt)
                                .toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })
                                .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                            </Td>
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
                          {openReview && (
                            <ReviewModal
                              isOpen={handleOpenReview}
                              onClose={() => window.location.reload()}
                              data={data}
                              // ReviewUserData
                            />
                          )}
                        </>
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
            </Stack>
          </HStack>
          <Box display={"flex"} justifyContent={"end"}>
            <Button
              color={"white"}
              bgColor={popmag}
              onClick={() => setUserDeleteStep(1)}
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
            <Stack
              divider={<StackDivider borderColor={popmint} />}
              pt={4}
              py={8}
            >
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
                    <Text color={popmag}>{`$${data.price}`}</Text>
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

const InquiryModal = (props) => {
  return (
    <>
      <Modal size={"3xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody p={0}>
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
                  <Text></Text>
                </HStack>
                <HStack>
                  <Text>Title</Text>
                  <Text></Text>
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
    </>
  );
};

const ReviewModal = (props) => {
  const [userData, setUserData] = useState({});
  const toDate = (timestamp) => {
    if (timestamp) return new Date(timestamp._seconds * 1000);
    else return new Date();
  };

  useEffect(() => {
    console.log(props.data);

    const getUserInfo = async () => {
      fetch(`${host_url}/users/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: props.data.userId,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setUserData(res);
        });
    };

    getUserInfo();
  }, []);

  const [modalState, setModalState] = useState({
    isConfirm: false,
    isInfo: false,
  });

  const confirmDelete = () => {
    setModalState({
      ...modalState,
      isConfirm: true,
    });
  };

  const handleDelete = async () => {
    fetch(`${host_url}/review/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.data.id,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          setModalState({
            ...modalState,
            isConfirm: false,
            isInfo: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ConfirmBox
        isOpen={modalState.isConfirm}
        onClose={() => setModalState({ ...modalState, isConfirm: false })}
        onConfirm={handleDelete}
      >
        <Text>Do you really want to</Text>
        <Text color={popmag}>delete comments?</Text>
      </ConfirmBox>
      <MessageBox isOpen={modalState.isInfo} onClose={() => props.onClose()}>
        <Text>Comment has been </Text>
        <Text color={popmag}>deleted</Text>
      </MessageBox>
      <Modal size={"3xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody px={0}>
            <Stack>
              <HStack
                p={4}
                borderY={"1px solid #E1E4E4"}
                justify={"space-around"}
                fontSize={"15px"}
              >
                <Text fontWeight={"500"}>
                  {userData?.name ? userData?.name : ""}
                </Text>
                <Text>
                  {toDate(userData?.createdAt)
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                </Text>
                <Text>{userData?.email}</Text>
              </HStack>
              <Stack p={4} spacing={4}>
                <Grid gap={4} templateColumns="repeat(2, 1fr)" maxW={"210px"}>
                  <GridItem>Division</GridItem>
                  <GridItem>Trainer</GridItem>
                  <GridItem>Rating</GridItem>
                  <GridItem>
                    <HStack gap={1} alignItems={"center"}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Image
                          key={i}
                          src={
                            i < props.data.rating
                              ? require("../../../../Asset/Icon/starFill.png")
                              : require("../../../../Asset/Icon/starDefault.png")
                          }
                          alt="star"
                          w={"18px"}
                          h={"18px"}
                        />
                      ))}
                    </HStack>
                  </GridItem>
                </Grid>
                <Text>{props.data.comment}</Text>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button color={"white"} bg={popmag} onClick={confirmDelete}>
              DELETE
            </Button>
          </ModalFooter>
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
