import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { host_url, popmint } from "../../../../App";

const User = (props) => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [userData, setUserData] = useState(props?.userData || []);

  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [keyword, setKeyword] = useState("");
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };

  useEffect(() => {
    setUserData(props?.userData || []);
  }, [props?.userData]);

  useEffect(() => {
    setTotalPages(Math.ceil(userData.length / ITEMS_PER_PAGE));
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setCurrentData(userData.slice(startIndex, endIndex));
  }, [userData, currentPage]);

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

  const handleDetailClick = (data, itemNumber) => {
    console.log(data, itemNumber);
    props.setIsdetail({
      view: "User Profile",
      data: data,
      itemNumber: itemNumber,
    });
  };

  const searchData = () => {
    if (keyword === "") {
      setUserData(props?.userData);
    } else {
      // filteredData를 변경하지 않고 복사해서 사용
      let temp = props?.userData.filter((data) => {
        return (
          data.name.toLowerCase().includes(keyword.toLowerCase()) ||
          data.email.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      setUserData(temp);
    }
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"full"} justify={"space-between"} px={16} pt={16} pb={32}>
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              User List
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
                  <Td textAlign={"center"}>Trainer</Td>
                  <Td textAlign={"center"}>Name</Td>
                  {/* <Td textAlign={"center"}>ID</Td> */}
                  <Td textAlign={"center"}>Email</Td>
                  <Td textAlign={"center"}>Registration Date</Td>
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
                      <Td textAlign={"center"}>{data.isTeacher ? "O" : "-"}</Td>
                      <Td textAlign={"center"}>{`${data.name} ${
                        data.firstName ? " " + data.firstName : ""
                      }`}</Td>
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
        </Flex>
        {/* )} */}
      </Stack>
    </Flex>
  );
};

export default User;
