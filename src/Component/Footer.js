import { Container, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex>
      <Container minW={"container.xl"}>
        <Stack dir="row" justify={"space-between"}>
          <Text>로고</Text>
          <Stack>
            <Text>Contact Us</Text>
            <Text>e-mail: cs@musictap.kr</Text>
            <Text whitespace={"pre-wrap"}>
              {`adress: 6F, 15-20, Manmyeong-ro
              8beon-gil, Seo-gu, Daejeon,
              Republic of Korea`}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Footer;
