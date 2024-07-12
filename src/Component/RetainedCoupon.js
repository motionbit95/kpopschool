import React, { useEffect, useState } from "react";
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
import { host_url, popmint } from "../App";

const RetainedCoupon = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 이벤트 데이터를 가지고 옵니다.
    fetch(`${host_url}/event/list`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const currentDate = new Date();

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
            {list.map((item) => (
              <Tr>
                <Td textAlign={"center"}>{item.title}</Td>
                <Td
                  textAlign={"center"}
                >{`${item.discountAmount} ${item.discountType} 
                ${item.discountclass}
                `}</Td>
                <Td textAlign={"center"}>
                  {/* {item.use_end} */}
                  {/* {toDate(item.use_end)} */}
                </Td>
                <Td textAlign={"center"}>
                  {/* {toDate(item.use_end) < currentDate ? "X" : "O"} */}
                </Td>
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
    title: "Big Opening",
    discountAmount: "20",
    discountType: "%",
    discountclass: "for all class",
    use_end: "20-07-2024",
    vailable: "O",
  },
  {
    title: "Black Friday",
    discountAmount: "30",
    discountType: "%",
    discountclass: "for all class",
    use_end: "19-07-2024",
    vailable: "O",
  },
  {
    title: "New trainer",
    discountAmount: "20",
    discountType: "%",
    discountclass: "for only Vocal class",
    use_end: "06-04-2024",
    vailable: "X",
  },
  {
    title: "Playvac ticket",
    discountAmount: "10",
    discountType: "%",
    discountclass: "10% for Beginner course",
    use_end: "03-03-2024",
    vailable: "X",
  },
];
