import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
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
import { host_url, popblue } from "../../../../App";
import { popmint } from "../../../../App";
import MessageBox from "../../../../Component/MessageBox";

const Trainer = (props) => {
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [userData, setUserData] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  const filteredData = useMemo(
    () => props.userData.filter((data) => data.isTeacher),
    [props.userData]
  );

  const [exceptData, setExceptData] = useState([]);

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    setUserData(props.userData);
    setExceptData(props.userData.filter((data) => !data.isTeacher));
  }, [props.userData]);

  useEffect(() => {
    // console.log(filteredData);
    // console.log("exceptData", exceptData);
    let teachers = [];
    filteredData.forEach((data, index) => {
      console.log(data.id);
      fetch(`${host_url}/teachers/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: data.id }),
      })
        .then(async (res) => await res.json())
        .then(async (res) => {
          teachers.push({ ...data, ...res });
          if (index === filteredData.length - 1) {
            setTeachers(teachers);
          }
        })
        .catch(async (err) => {
          console.log(err);
        });
    });
  }, [filteredData]);

  const handleDetailClick = (data, itemNumber) => {
    console.log(data, itemNumber);
    props.setIsdetail({
      view: "Trainer Profile",
      data: data,
      itemNumber: itemNumber,
    });
  };
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

  const [keyword, setKeyword] = useState("");

  const searchData = () => {
    if (keyword === "") {
      setUserData(filteredData);
    } else {
      // filteredData를 변경하지 않고 복사해서 사용
      let temp = filteredData.filter((data) => {
        return (
          data.name.toLowerCase().includes(keyword.toLowerCase()) ||
          data.email.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      setTeachers(temp);
    }
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"full"} px={16} pt={16} pb={32}>
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Trainer List
            </Text>
            <InputGroup maxW={"300px"}>
              <Input
                placeholder="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  aria-label="search"
                  size={"sm"}
                  icon={<SearchIcon />}
                  onClick={() => {
                    searchData();
                  }}
                />
              </InputRightElement>
            </InputGroup>
          </HStack>
          <TableContainer>
            <Table>
              <Tbody>
                <Tr fontWeight={"500"} color={popmint}>
                  <Td textAlign={"center"}>No.</Td>
                  <Td textAlign={"center"}>Name</Td>
                  {/* <Td textAlign={"center"}>ID</Td> */}
                  <Td textAlign={"center"}>Email</Td>
                  <Td textAlign={"center"}>Registration Date</Td>
                  <Td textAlign={"center"}>Rating</Td>
                </Tr>
                {teachers.map((data, index) => {
                  const itemNumber =
                    (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

                  return (
                    <Tr
                      cursor={"pointer"}
                      onClick={() => handleDetailClick(data, itemNumber)}
                    >
                      <Td textAlign={"center"}>{itemNumber}</Td>
                      <Td textAlign={"center"}>{data.name}</Td>
                      {/* <Td textAlign={"center"}></Td> */}
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
          <Button
            position={"absolute"}
            right={16}
            bgColor={popmint}
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
        userData={exceptData}
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
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    setUserData(props.userData);
  }, [props.userData]);

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

  const [modalState, setModalState] = useState({
    isAdded: false,
  });

  const addTeacher = () => {
    selectedItem.forEach((id) => {
      fetch(`${host_url}/users/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isTeacher: true,
          id: id,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          // console.log(res);
          // props.onClose();
        })
        .catch((err) => {
          console.log(err);
        });

      fetch(`${host_url}/teachers/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          profile: userData.find((user) => user.id === id).profile,
          name: userData.find((user) => user.id === id).name,
          category: "",
          career: "",
          review: 0,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          // console.log(res);
          // props.onClose();
          setModalState({
            ...modalState,
            isAdded: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <>
      <Modal size={"5xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <MessageBox isOpen={modalState.isAdded} onClose={props.onClose}>
          <Text>Addition</Text>
          <Text color={popblue}>completed successfully</Text>
        </MessageBox>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Stack py={4}>
              <Stack align={"center"} justify={"center"}>
                <Input w={"70%"} placeholder="Search" />
              </Stack>
              <TableContainer>
                <Table>
                  <Tbody>
                    <Tr fontWeight={"500"} color={popmint}>
                      <Td textAlign={"center"}>No.</Td>
                      <Td align="center">
                        <Checkbox
                          colorScheme="teal"
                          onChange={() => {
                            if (selectedItem.length === userData.length) {
                              setSelectedItem([]);
                            } else {
                              setSelectedItem(userData.map((data) => data.id));
                            }
                          }}
                        />
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
                            <Checkbox
                              isChecked={selectedItem.includes(data.id)}
                              colorScheme="teal"
                              onChange={() => {
                                if (selectedItem.includes(data.id)) {
                                  setSelectedItem(
                                    selectedItem.filter((id) => id !== data.id)
                                  );
                                } else {
                                  setSelectedItem([...selectedItem, data.id]);
                                }
                              }}
                            />
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
              <Stack align={"center"} mt={16}>
                <Button
                  color={"white"}
                  bgColor={"#00B2FF"}
                  onClick={() => addTeacher()}
                >
                  ADD
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
