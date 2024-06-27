import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
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
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";

const User = (props) => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(userData.length / ITEMS_PER_PAGE);

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
  const currentData = userData.slice(startIndex, endIndex);

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"full"} justify={"space-between"}>
        <Stack p={16}>
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
                  <Td textAlign={"center"}>ID</Td>
                  <Td textAlign={"center"}>Email</Td>
                  <Td textAlign={"center"}>Registration Date</Td>
                </Tr>
                {currentData.map((data) => (
                  <Tr
                    onClick={() => {
                      console.log(data);
                      props.setIsdetail("User Profile");
                    }}
                  >
                    <Td textAlign={"center"}>{`${data.no}.`}</Td>
                    <Td textAlign={"center"}>{data.trainer}</Td>
                    <Td textAlign={"center"}>{data.name}</Td>
                    <Td textAlign={"center"}>{data.id}</Td>
                    <Td textAlign={"center"}>{data.email}</Td>
                    <Td textAlign={"center"}>{data.regDate}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
        {/* {userData.length > ITEMS_PER_PAGE && ( */}
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
        {/* )} */}
      </Stack>
    </Flex>
  );
};

export default User;

const userData = [
  {
    no: 1,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 2,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 3,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 4,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 5,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 6,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 7,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 8,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 9,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 10,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
  {
    no: 11,
    trainer: "O",
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
  },
];
