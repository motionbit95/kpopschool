import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { host_url } from "../../../../App";

const Trainer = (props) => {
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [userData, setUserData] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    setUserData(props.userData);
    console.log(filteredData);
  }, [props.userData]);

  const handleDetailClick = (data, itemNumber) => {
    console.log(data, itemNumber);
    props.setIsdetail({
      view: "Trainer Profile",
      data: data,
      itemNumber: itemNumber,
    });
  };

  const filteredData = useMemo(
    () => userData.filter((data) => data.isTeacher),
    [userData]
  );
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

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
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"full"} px={16} pt={16} pb={32}>
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Trainer List
            </Text>
            <Input w={"300px"} />
          </HStack>
          <TableContainer>
            <Table>
              <Tbody>
                <Tr fontWeight={"500"} color={"#00C3BA"}>
                  <Td textAlign={"center"}>No.</Td>
                  <Td textAlign={"center"}>Name</Td>
                  <Td textAlign={"center"}>ID</Td>
                  <Td textAlign={"center"}>Email</Td>
                  <Td textAlign={"center"}>Registration Date</Td>
                  <Td textAlign={"center"}>Rating</Td>
                </Tr>
                {currentData.map((data, index) => {
                  const itemNumber =
                    (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

                  return (
                    <Tr
                      cursor={"pointer"}
                      onClick={() => handleDetailClick(data, itemNumber)}
                    >
                      <Td textAlign={"center"}>{itemNumber}</Td>
                      <Td textAlign={"center"}>{data.name}</Td>
                      <Td textAlign={"center"}></Td>
                      <Td textAlign={"center"}>{data.email}</Td>
                      <Td textAlign={"center"}>
                        {toDate(data.createdAt)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                      </Td>
                      <Td>
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
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
        {/* {userData.length > ITEMS_PER_PAGE && ( */}
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
          <Button
            position={"absolute"}
            right={16}
            bgColor={"#00C3BA"}
            color={"white"}
            onClick={() => setPopupOpen(true)}
          >
            ADD Trainer
          </Button>
        </Flex>
      </Stack>
      <AddTrainerModal
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        userData={props.userData}
      />
    </Flex>
  );
};

export default Trainer;

const AddTrainerModal = (props) => {
  const [userData, setUserData] = useState(props.userData);
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(userData.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };

  const currentData = userData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  // 이거 맞나?
  // useEffect(() => {
  //   const AddUser = async () => {
  //     fetch(`${host_url}/users/add`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         isTeacher: true,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setUserData(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   AddUser();
  // }, []);

  return (
    <>
      <Modal size={"5xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Stack py={4}>
              <Input />
              <TableContainer>
                <Table>
                  <Tbody>
                    <Tr fontWeight={"500"} color={"#00C3BA"}>
                      <Td textAlign={"center"}>No.</Td>
                      <Td align="center">
                        <Checkbox />
                      </Td>
                      <Td textAlign={"center"}>Name</Td>
                      {/* <Td textAlign={"center"}>ID</Td> */}
                      <Td textAlign={"center"}>Email</Td>
                      <Td textAlign={"center"}>Registration Date</Td>
                    </Tr>
                    {currentData.map((data, index) => {
                      const itemNumber =
                        (currentPage - 1) * ITEMS_PER_PAGE + index + 1;
                      return (
                        <Tr cursor={"pointer"}>
                          <Td textAlign={"center"}>{itemNumber}</Td>
                          <Td align="center">
                            <Checkbox />
                          </Td>
                          <Td textAlign={"center"}>{data.name}</Td>
                          {/* <Td textAlign={"center"}>{data.snsId}</Td> */}
                          <Td textAlign={"center"}>{data.email}</Td>
                          <Td textAlign={"center"}>
                            {toDate(data.createdAt)
                              .toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              })
                              .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
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
              <Stack align={"center"} mt={4}>
                <Button>ADD</Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
