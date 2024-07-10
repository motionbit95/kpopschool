import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { host_url, popmag } from "../../../../App";

export const toDate = (timestamp) => {
  let date = new Date().toISOString().slice(0, 10).replaceAll("-", "/");
  try {
    date = new Date(timestamp._seconds * 1000)
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "/");
  } catch (err) {
    console.log(err);
    if (timestamp?.includes("T")) {
      date = timestamp.split("T")[0].replaceAll("-", "/");
    }
  }
  return date;
};

const Coupon = (props) => {
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
                spacing={6}
              >
                <Box
                  w={"330px"}
                  h={"140px"}
                  // bgColor={popmint}
                  borderRadius={"md"}
                  overflow={"hidden"}
                >
                  <Image
                    w={"full"}
                    h={"full"}
                    objectFit={"cover"}
                    src={data.thumbnail}
                  ></Image>
                </Box>
                <Stack w={"100%"}>
                  <HStack justify={"space-between"}>
                    <Text>{data.title}</Text>
                    <Text>publication Date {toDate(data.createdAt)}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"200px"}>Discount details</Text>
                    <Text>
                      {data.discountAmount} {data.discountType} sale
                    </Text>
                  </HStack>
                  <HStack>
                    <Text w={"200px"}>Deadline for download</Text>
                    <Text>~{toDate(data.deadline_end)}</Text>
                  </HStack>
                  <HStack justify={"space-between"}>
                    <HStack>
                      <Text w={"200px"}>Date of use</Text>
                      <Text>
                        {toDate(data.use_start)} ~ {toDate(data.use_end)}
                      </Text>
                    </HStack>
                    <Box display={"flex"} justifyContent={"flex-end"}>
                      <Button
                        color={"white"}
                        bgColor={popmag}
                        onClick={() => deleteCoupon(data.id)}
                      >
                        DELETE
                      </Button>
                    </Box>
                  </HStack>
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
