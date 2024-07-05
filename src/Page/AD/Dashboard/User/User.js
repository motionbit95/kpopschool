import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const User = (props) => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [userData] = useState(props?.userData || []);

  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };

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

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"full"} justify={"space-between"} px={16} pt={16} pb={32}>
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              User List
            </Text>
            <Input w={"300px"} />
          </HStack>

          <TableContainer>
            <Table>
              <Tbody>
                <Tr fontWeight={"500"} color={"#00C3BA"}>
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
                      <Td
                        textAlign={"center"}
                      >{`${data.name} ${data.firstName}`}</Td>
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
    </Flex>
  );
};

export default User;
