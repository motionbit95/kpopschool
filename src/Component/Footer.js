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
    <Flex bgColor={"rgba(29, 55, 57, 1)"} py={16}>
      <Container minW={"container.xl"}>
        <Stack spacing={16}>
          <HStack justify={"space-between"} align={"flex-start"}>
            <Box boxSize={"400px"}>
              <Image src={require("../Asset/Logo/KpopLogo.png")} alt={""} />
            </Box>
            <Stack
              spacing={3}
              color={"rgba(0, 195, 186, 1)"}
              pt={20}
              fontSize={"lg"}
            >
              <Text>Contact Us</Text>
              <Text>e-mail: cs@musictap.kr</Text>
              <Text whiteSpace={"pre-line"}>
                {`adress: 6F, 15-20, Manmyeong-ro
                8beon-gil, Seo-gu, Daejeon,
                Republic of Korea`}
              </Text>
            </Stack>
          </HStack>
          <Box display={"flex"} justifyContent={"center"}>
            <Text color={"rgba(111, 151, 149, 1)"} fontSize={"lg"}>
              {`@copyright. kpopschool. ${new Date().getFullYear()}. All Rights
            Reserved.`}
            </Text>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Footer;
