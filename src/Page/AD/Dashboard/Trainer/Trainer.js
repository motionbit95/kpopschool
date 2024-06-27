import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
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

const Trainer = (props) => {
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
      <Stack w={"full"} h={"full"} justify={"space-between"}>
        <Stack p={16}>
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
                {currentData.map((data) => (
                  <Tr
                    onClick={() => {
                      console.log(data);
                      props.setIsdetail("Trainer Profile");
                    }}
                  >
                    <Td textAlign={"center"}>{`${data.no}.`}</Td>
                    <Td textAlign={"center"}>{data.name}</Td>
                    <Td textAlign={"center"}>{data.id}</Td>
                    <Td textAlign={"center"}>{data.email}</Td>
                    <Td textAlign={"center"}>{data.regDate}</Td>
                    <Td display={"flex"} justifyContent={"center"}>
                      <Flex gap={1}>
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
          <Button
            position={"absolute"}
            right={16}
            bgColor={"#00C3BA"}
            color={"white"}
          >
            ADD Trainer
          </Button>
        </Flex>
        {/* )} */}
      </Stack>
    </Flex>
  );
};

export default Trainer;

const userData = [
  {
    no: 1,
    name: "이름",
    id: "아이디",
    email: "이메일",
    regDate: "2022.01.01",
    rating: "4",
  },
];
