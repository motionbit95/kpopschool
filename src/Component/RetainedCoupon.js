import React from "react";
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
import { popmint } from "../App";

const RetainedCoupon = () => {
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
          <Text>Retained Coupon</Text>
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
                <Td textAlign={"center"}>{item.coupon}</Td>
                <Td textAlign={"center"}>{item.discount}</Td>
                <Td textAlign={"center"}>{item.date}</Td>
                <Td textAlign={"center"}>{item.vailable}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default RetainedCoupon;

const headers = ["Coupon", "Discount", "Date of use", "Vailable"];

const data = [
  {
    coupon: "Big Opening",
    discount: "20% for all class",
    date: "20-07-2024",
    vailable: "O",
  },
  {
    coupon: "Black Friday",
    discount: "30% for all class",
    date: "19-07-2024",
    vailable: "O",
  },
  {
    coupon: "New trainer",
    discount: "20% for only Vocal class",
    date: "06-04-2024",
    vailable: "X",
  },
  {
    coupon: "Playvac ticket",
    discount: "10% for Beginner course",
    date: "03-03-2024",
    vailable: "X",
  },
];
