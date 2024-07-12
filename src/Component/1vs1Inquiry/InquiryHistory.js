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
import { host_url, popmag, popmint, popyellow } from "../../App";

const InquiryHistory = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [inquirydata, setInquirydata] = useState([]);
  const headers = ["Tag", "Title", "Date", "State"];
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };

  const handleClick = (index) => {
    setSelectedRowIndex(selectedRowIndex === index ? null : index);
  };

  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    // console.log(host_url);

    const getInquirys = async () => {
      // 필터링은 검색을 통해서 진행한다.
      fetch(`${host_url}/inquiry/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [
            // 유저 uid 검색해서 가져와야 한다.
          ],
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          setInquirydata(res);
        })
        .catch((err) => {
          // console.log(err);
          console.log("데이터가 없습니다");
          setInquirydata([]);
        });
    };

    getInquirys();
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
                  color={popmint}
                  fontWeight={"500"}
                  textAlign={"center"}
                >
                  {item}
                </Td>
              ))}
            </Tr>
            {inquirydata.map((item, index) => (
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
                  <Td
                    textAlign={"center"}
                    color={item.state === "completed" ? popmag : popyellow}
                  >
                    {item.state}
                  </Td>
                </Tr>
                {selectedRowIndex === index && item.details && (
                  <Tr>
                    <Td p={8} colSpan={4} textAlign={"start"}>
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
