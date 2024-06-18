import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

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
            <Tr color={"#00C3BA"} fontWeight={"500"}>
              <Td>Course</Td>
              <Td>Devision</Td>
              <Td>Trainer</Td>
              <Td>Month</Td>
              <Td>Price</Td>
              <Td>PayMent</Td>
              <Td>Date</Td>
              <Td>Receipt</Td>
            </Tr>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <Tr>
                <Td>Course</Td>
                <Td>Devision</Td>
                <Td>Trainer</Td>
                <Td>Month</Td>
                <Td>Price</Td>
                <Td>PayMent</Td>
                <Td>Date</Td>
                <Td>Receipt</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default PaymentHistory;
