import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { host_url } from "../../App";

const InquiryHistory = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [inquirys, setInquiries] = useState({});
  const headers = ["Tag", "Title", "Date", "State"];
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };

  const handleClick = (index) => {
    setSelectedRowIndex(selectedRowIndex === index ? null : index);
  };

  useEffect(() => {
    const getInquiry = async () => {
      fetch(`${host_url}/inquiry/list`)
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

  return (
    <Stack color={"#4E4E4E"}>
      <TableContainer>
        <Box
          pl={10}
          py={4}
          fontSize={"25px"}
          fontWeight={"600"}
          borderBottom={"1px solid #E1E4E4"}
        >
          <Text>Inquiry History</Text>
        </Box>
        <Table variant={"simple"}>
          <Tbody>
            <Tr>
              {headers.map((item) => (
                <Td
                  h={"54px"}
                  color={"#00C3BA"}
                  fontWeight={"500"}
                  textAlign={"center"}
                >
                  {item}
                </Td>
              ))}
            </Tr>
            {inquirys.map((item, index) => (
              <>
                <Tr onClick={() => handleClick(index)}>
                  <Td textAlign={"center"}>{item.tag}</Td>
                  <Td textAlign={"center"}>{item.title}</Td>
                  <Td textAlign={"center"}>
                    {toDate(item.createdAt)
                      .toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                  </Td>
                  <Td textAlign={"center"}>{item.state}</Td>
                </Tr>
                {selectedRowIndex === index && item.details && (
                  <Tr>
                    <Td colSpan={4} textAlign={"start"}>
                      <Stack spacing={8}>
                        <Text whiteSpace={"pre-line"}>{item.details}</Text>
                        {/* 응대 부분 */}
                        {/* <Stack
                          bgColor={"rgba(241, 241, 241, 1)"}
                          p={6}
                          borderRadius={"md"}
                          spacing={4}
                        >
                          <HStack justify={"space-between"}>
                            <Text>{item.manager}</Text>
                            <Text>{item.date}</Text>
                          </HStack>
                          <Text whiteSpace={"pre-line"}>
                            {item.inquiry_request}
                          </Text>
                        </Stack> */}
                      </Stack>
                    </Td>
                  </Tr>
                )}
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default InquiryHistory;
