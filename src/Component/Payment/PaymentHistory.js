import {
  Box,
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { popmint } from "../../App";

const PaymentHistory = () => {
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
          <Text>Payment History</Text>
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
            {data.map((item) => (
              <Tr>
                <Td textAlign={"center"}>{`${item.course} course`}</Td>
                <Td textAlign={"center"}>{item.devision}</Td>
                <Td textAlign={"center"}>{item.trainer}</Td>
                <Td textAlign={"center"}>{`${item.month} month`}</Td>
                <Td textAlign={"center"}>{item.price}</Td>
                <Td textAlign={"center"}>{item.payment}</Td>
                <Td textAlign={"center"}>{item.date}</Td>
                <Td
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  py={0}
                  h={"54px"}
                >
                  <Button size={"sm"} fontSize={"13px"}>
                    Receipt
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default PaymentHistory;

const headers = [
  "Course",
  "Devision",
  "Trainer",
  "Month",
  "Price",
  "Payment",
  "Date",
  "Receipt",
];

const data = [
  {
    course: "Professional",
    devision: "Vocal",
    trainer: "Jessie",
    month: "3",
    price: "$99",
    payment: "credit",
    date: "10:36 01-10-2024",
    // receipt: "Receipt",
  },
  {
    course: "Intermediate",
    devision: "Vocal",
    trainer: "Jessie",
    month: "3",
    price: "$90",
    payment: "Paypal",
    date: "08:16 01-08-2024",
    // receipt: "Receipt",
  },
  {
    course: "Beginner",
    devision: "Vocal",
    trainer: "Jessie",
    month: "3",
    price: "$80",
    payment: "credit",
    date: "07:30 01-05-2024",
    // receipt: "Receipt",
  },
  {
    course: "Beginner",
    devision: "Vocal",
    trainer: "Mr.Lee",
    month: "6",
    price: "$80",
    payment: "credit",
    date: "07:30 01-05-2024",
    // receipt: "Receipt",
  },
];
