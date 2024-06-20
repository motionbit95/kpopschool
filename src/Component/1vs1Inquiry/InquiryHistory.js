import React, { useState } from "react";
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

const InquiryHistory = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedRowIndex(selectedRowIndex === index ? null : index);
  };
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
            {data.map((item, index) => (
              <>
                <Tr onClick={() => handleClick(index)}>
                  <Td textAlign={"center"}>{item.tag}</Td>
                  <Td textAlign={"center"}>{item.title}</Td>
                  <Td textAlign={"center"}>{item.date}</Td>
                  <Td textAlign={"center"}>{item.state}</Td>
                </Tr>
                {selectedRowIndex === index && item.inquiry && (
                  <Tr>
                    <Td colSpan={4} textAlign={"start"}>
                      <Stack spacing={8}>
                        <Text whiteSpace={"pre-line"}>{item.inquiry}</Text>
                        <Stack
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
                        </Stack>
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

const headers = ["Tag", "Title", "Date", "State"];

const data = [
  {
    tag: "class",
    title: "video quailty",
    date: "20-07-2024",
    state: "Waiting for",
    inquiry:
      "I accidentally paid for another teacher's course.\nPlease refund that portion.\nI paid for Mr. Lee's Advanced Course.",
    manager: "Manager",
    inquiry_request:
      "hello. When I checked the student's payment history, I found that the payment was made on July 19th.\nWe have provided a refund for Mr. Lee's Advanced Course Emotion Song, but the payment date may be delayed by 2-3 days due to the credit card company's requirements for refunds.",
  },
  {
    tag: "payment",
    title: "wrong paid",
    date: "19-07-2024",
    state: "completed",
  },
  {
    tag: "ETC",
    title: "restore deleted coupon",
    date: "06-04-2024",
    state: "completed",
  },
  {
    tag: "ETC",
    title: "dumy",
    date: "03-03-2024",
    state: "completed",
  },
];
