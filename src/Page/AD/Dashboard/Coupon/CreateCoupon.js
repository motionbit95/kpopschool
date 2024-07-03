import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ToastEditor from "../../../../Component/ToastEditor";

const CreateCoupon = () => {
  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack px={16} pt={16} pb={32} w={"full"} spacing={16}>
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Coupon Issuance
            </Text>
            <Box>
              <Button bgColor={"#00C3BA"} color={"white"} fontWeight={"bold"}>
                ISSUANCE
              </Button>
            </Box>
          </HStack>
          <HStack w={"full"} spacing={6}>
            <Box w="320px" h="156px" bgColor={"gray.200"} borderRadius={"md"}>
              <Image src={""} />
            </Box>
            <Stack flex={1}>
              <HStack>
                <Text w={"180px"}>Title</Text>
                <Input w={"300px"} borderRadius={"lg"} />
              </HStack>
              <HStack>
                <Text w={"180px"}>Discount details</Text>
                <Input w={"120px"} borderRadius={"lg"} />
                <Select w={"70px"} borderRadius={"lg"} ml={2}>
                  <option>%</option>
                  <option>$</option>
                </Select>
              </HStack>
              <HStack spacing={12}>
                <HStack>
                  <Text w={"180px"}>Deadline for download</Text>
                  <Input w={"125px"} borderRadius={"lg"} />
                  <Text>-</Text>
                  <Input w={"125px"} borderRadius={"lg"} />
                </HStack>
                <HStack>
                  <Text pr={4}>Date of use</Text>
                  <Input w={"125px"} borderRadius={"lg"} />
                  <Text>-</Text>
                  <Input w={"125px"} borderRadius={"lg"} />
                </HStack>
              </HStack>
            </Stack>
          </HStack>
        </Stack>
        <ToastEditor />
      </Stack>
    </Flex>
  );
};

export default CreateCoupon;
