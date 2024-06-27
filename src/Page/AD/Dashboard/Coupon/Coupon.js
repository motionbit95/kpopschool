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
import React from "react";

const Coupon = (props) => {
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
              >
                CREATE
              </Button>
            </Box>
          </HStack>
          <Stack>
            <HStack
              justify={"space-between"}
              border={"1px solid #E1E4E4"}
              borderRadius={"md"}
              p={4}
            >
              <HStack>
                <Box
                  w={"200px"}
                  h={"100px"}
                  bgColor={"#00C3BA"}
                  borderRadius={"md"}
                  overflow={"hidden"}
                >
                  <Image></Image>
                </Box>
                <Stack>
                  <Text>60% SUPER SALE</Text>
                  <HStack>
                    <Text>Discount details</Text>
                    <Text>60% sale</Text>
                  </HStack>
                  <HStack>
                    <Text>Deadline for download</Text>
                    <Text>~2024/07/09</Text>
                  </HStack>
                  <HStack>
                    <Text>Date of use</Text>
                    <Text>2024/07/09 ~ 2024/07/12</Text>
                  </HStack>
                </Stack>
              </HStack>
              <Stack h={"full"} justify={"space-between"}>
                <Text>publication Date 2024/07/09</Text>
                <Box display={"flex"} justifyContent={"flex-end"}>
                  <Button>DELETE</Button>
                </Box>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Coupon;
