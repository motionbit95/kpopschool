import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex bgColor={"rgba(29, 55, 57, 1)"} pt={12} pb={16} w={"full"}>
      <Container maxW={"container.xl"}>
        <Stack spacing={24}>
          <HStack justify={"space-between"} align={"flex-start"}>
            <Box boxSize={"160px"}>
              <Image src={require("../Asset/Logo/KpopLogo.png")} alt={""} />
            </Box>
            <Stack
              spacing={3}
              color={"rgba(0, 195, 186, 1)"}
              // pt={20}
              fontSize={"lg"}
              fontWeight={"600"}
            >
              <Text>Contact Us</Text>
              <Text>Email: svc@phyllis.kr</Text>
              <Text whiteSpace={"pre-line"}>
                {`adress: Room 506, 5F, 54, Daejong-
                ro 488beon-gil, Jung-gu, Daejeon, 
                Republic of Korea`}
              </Text>
            </Stack>
          </HStack>
          <Box display={"flex"} justifyContent={"center"}>
            <Text color={"rgba(111, 151, 149, 1)"} fontSize={"lg"}>
              {`@copyright. kpopschool. 2024. All Rights
            Reserved.`}
            </Text>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Footer;
