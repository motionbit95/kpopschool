import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { host_url } from "../../../../App";

const Coupon = (props) => {
  const [list, setList] = useState([]);

  const toDate = (timestamp) => {
    let date = new Date().toISOString().slice(0, 10).replaceAll("-", "/");
    try {
      date = new Date(timestamp._seconds * 1000)
        .toISOString()
        .slice(0, 10)
        .replaceAll("-", "/");
    } catch (err) {
      console.log(err);
      date = timestamp.split("T")[0].replaceAll("-", "/");
    }
    return date;
  };

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

  const deleteCoupon = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this coupon?")) {
      fetch(`${host_url}/event/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          if (res === "success") {
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack
        w={"full"}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <Stack p={16}>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Coupon List
            </Text>
            <Box>
              <Button
                mt={-10}
                onClick={() => props.setIsdetail({ view: "Coupon Issuance" })}
                color={"white"}
                bgColor={"#00B2FF"}
              >
                CREATE
              </Button>
            </Box>
          </HStack>
          {list.map((data) => (
            <Stack>
              <HStack
                justify={"space-between"}
                border={"1px solid #E1E4E4"}
                borderRadius={"md"}
                p={4}
              >
                <HStack spacing={6}>
                  <Box
                    w={"330px"}
                    h={"140px"}
                    bgColor={"#00C3BA"}
                    borderRadius={"md"}
                    overflow={"hidden"}
                  >
                    <Image w={"full"} h={"full"} src={data.thumbnail}></Image>
                  </Box>
                  <Stack>
                    <Text>{data.title}</Text>
                    <HStack>
                      <Text>Discount details</Text>
                      <Text>
                        {data.discountAmount} {data.discountType} sale
                      </Text>
                    </HStack>
                    <HStack>
                      <Text>Deadline for download</Text>
                      <Text>~{toDate(data.deadline_end)}</Text>
                    </HStack>
                    <HStack>
                      <Text>Date of use</Text>
                      <Text>
                        {toDate(data.use_start)} ~ {toDate(data.use_end)}
                      </Text>
                    </HStack>
                  </Stack>
                </HStack>
                <Stack h={"full"} justify={"space-between"}>
                  <Text>publication Date {toDate(data.createdAt)}</Text>
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    <Button
                      color={"white"}
                      bgColor={"#FF3CA2"}
                      onClick={() => deleteCoupon(data.id)}
                    >
                      DELETE
                    </Button>
                  </Box>
                </Stack>
              </HStack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Coupon;
