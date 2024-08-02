import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const YourCards = () => {
  const [editIndex, setEditIndex] = useState(-1);
  return (
    <Stack>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Your Cards
      </Text>
      <SimpleGrid columns={2} gap={4}>
        {Cards.map((item, index) => (
          <HStack
            pl={6}
            py={6}
            border={"1px solid #E1E4E4"}
            borderRadius={"md"}
            justify={"space-between"}
            align={"start"}
          >
            <HStack>
              <Box
                w={"115px"}
                h={"72px"}
                bgColor={"rgba(225, 228, 228, 1)"}
                borderRadius={"md"}
              >
                <Image />
              </Box>
              <Stack spacing={0}>
                <HStack
                  fontSize={"22px"}
                  fontWeight={"700"}
                  color={"#4E4E4E"}
                  spacing={0}
                >
                  <Text>{item.name}</Text>
                  {item.number && (
                    <Text>({item.number?.toString().slice(-4)})</Text>
                  )}
                </HStack>
                <Text fontWeight={"500"} color={"#4E4E4E"}>
                  {item.type}
                </Text>
              </Stack>
            </HStack>
            <HStack spacing={0}>
              {editIndex === index && (
                <Box pt={1}>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    color={"rgba(255, 60, 162, 1)"}
                  >
                    delete
                  </Button>
                </Box>
              )}

              <IconButton
                variant={"ghost"}
                size={"sm"}
                _hover={{ bg: "none" }}
                icon={<FiMoreVertical />}
                onClick={() => setEditIndex(editIndex === -1 ? index : -1)}
              />
            </HStack>
          </HStack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default YourCards;

const Cards = [
  {
    name: "VISA",
    number: "**** **** **** 1234",
    cardImage: "",
  },
  {
    name: "PayPal",
    type: "BC Card",
    cardImage: "",
  },
];
