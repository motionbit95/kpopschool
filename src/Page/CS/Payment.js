import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Radio,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { state } = location;
  const { item, teacher } = state;

  const [openCoupon, setOpenCoupon] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  useEffect(() => {
    console.log(item, teacher);
  }, [item, teacher]);
  return (
    <Flex flex={1} direction={"column"} color={"#4E4E4E"}>
      <Container minW={"container.xl"}>
        <HStack py={16} spacing={8} align={"start"} position={"relative"}>
          <Stack
            w={"full"}
            spacing={8}
            divider={<StackDivider borderColor={"#00C3BA"} />}
          >
            <Stack
              p={8}
              border={"1px solid #E1E4E4"}
              borderRadius={"lg"}
              spacing={4}
            >
              <Text fontSize={"3xl"} fontWeight={"600"}>
                Order details
              </Text>
              <HStack>
                <Box
                  w={"259px"}
                  h={"176px"}
                  borderRadius={"md"}
                  overflow={"hidden"}
                  bgImage={`url(${item.image})`}
                  bgSize={"cover"}
                  bgPosition={"center"}
                />
                <Stack fontSize={"lg"}>
                  <HStack>
                    <Text w={"60px"}>Class</Text>
                    <Text>{`${item.title}`}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"60px"}>Trainer</Text>
                    <Text>{teacher.name}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"60px"}>Course</Text>
                    <Text>{`${item.difficulty} course`}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"60px"}>Divison</Text>
                    <Text>{item.category}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"60px"}>GMT</Text>
                    <Text></Text>
                  </HStack>
                </Stack>
              </HStack>
              <Text
                fontSize={"2xl"}
                fontWeight={"700"}
                textAlign={"right"}
                color={"#FF3CA2"}
              >{`$${item.price}`}</Text>
            </Stack>
            <Stack spacing={3}>
              <HStack justify={"space-between"}>
                <HStack>
                  <Image
                    src={require("../../Asset/Icon/Mypage_Icon/icon6.png")}
                  />
                  <Text fontSize={"2xl"} fontWeight={"600"}>
                    Coupon
                  </Text>
                </HStack>
                <Text>Retained N</Text>
              </HStack>
              <Stack
                px={6}
                py={2}
                border={"1px solid #E1E4E4"}
                borderRadius={"xl"}
              >
                <HStack justify={"space-between"}>
                  <Flex gap={1}>
                    <Text>There is </Text>
                    <Text color={"#00C3BA"}>coupon </Text>
                    <Text>available</Text>
                  </Flex>
                  <ChevronRightIcon
                    color={"#00C3BA"}
                    boxSize={"20px"}
                    onClick={() => setOpenCoupon(!openCoupon)}
                  />
                </HStack>
                {openCoupon && (
                  <Stack>
                    <Text>쿠폰 리스트</Text>
                  </Stack>
                )}
              </Stack>
              <HStack justify={"end"}>
                <Radio />
                <Text>Always apply the maximum discount</Text>
              </HStack>
            </Stack>
            <Stack spacing={3}>
              <HStack>
                <Image
                  src={require("../../Asset/Icon/Mypage_Icon/icon5.png")}
                />
                <Text fontSize={"2xl"} fontWeight={"600"}>
                  Payment
                </Text>
              </HStack>
              <Stack
                px={6}
                py={2}
                border={"1px solid #E1E4E4"}
                borderRadius={"xl"}
              >
                <HStack justify={"space-between"}>
                  <Text>VISA</Text>
                  <ChevronRightIcon
                    color={"#00C3BA"}
                    boxSize={"20px"}
                    onClick={() => setOpenPayment(!openPayment)}
                  />
                </HStack>
                {openPayment && (
                  <Stack>
                    <Text>카드 리스트</Text>
                  </Stack>
                )}
              </Stack>
              <Stack borderTop={"1px solid #E1E4E4"} py={4}>
                <HStack justify={"space-between"} align={"start"}>
                  <Stack>
                    <Text>
                      Provision of personal information to a third party
                    </Text>
                    <Text>
                      I have checked the above and agree to the payment
                    </Text>
                  </Stack>
                  <ChevronRightIcon />
                </HStack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            border={"1px solid #E1E4E4"}
            borderRadius={"lg"}
            p={6}
            minW={"400px"}
            spacing={6}
            position={"sticky"}
            top={48}
          >
            <HStack>
              <Image />
              <Text fontSize={"2xl"} fontWeight={"600"}>
                SUM
              </Text>
            </HStack>
            <Stack border={"1px solid #E1E4E4"} borderRadius={"lg"} spacing={0}>
              <HStack justify={"space-between"} p={4}>
                <Text>Items</Text>
                <Text>1</Text>
              </HStack>
              <hr />
              <Stack p={4}>
                <HStack justify={"space-between"}>
                  <Text>Class</Text>
                  <Text>{`${item.title}`}</Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Trainer</Text>
                  <Text>{teacher.name}</Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Course</Text>
                  <Text>{`${item.difficulty} course`}</Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Divison</Text>
                  <Text>{item.category}</Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>GMT</Text>
                  <Text></Text>
                </HStack>
              </Stack>
            </Stack>
            <HStack justify={"space-between"}>
              <Text>Order Amount</Text>
              <Text>{`$${item.price}`}</Text>
            </HStack>
            <hr />
            <HStack justify={"space-between"}>
              <Text>Total</Text>
              <Text>{`$${item.price}`}</Text>
            </HStack>
            <Stack p={4} alignContent={"center"} justifyContent={"center"}>
              <Button>PLACE ORDER</Button>
            </Stack>
          </Stack>
        </HStack>
      </Container>
    </Flex>
  );
};

export default Payment;
