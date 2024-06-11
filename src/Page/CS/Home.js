import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Topbar from "../../Component/Topbar";

const Home = () => {
  return (
    <Flex flex={1} h={"100vh"} direction={"column"}>
      <Container minW={"container.xl"}>
        <Stack spacing={16}>
          <Stack direction={{ base: "column", md: "row" }}>
            <Box flex={1} borderRadius={"20"} overflow={"hidden"}>
              <Image src={require("../../Asset/Image/banner 1.png")} alt={""} />
            </Box>
          </Stack>
          <Stack spacing={4}>
            <Text fontSize={"xl"}>
              We will help you turn your dream of becoming a K-pop star into
              reality! Shine on stage like a K-pop star through
              <br />
              classes taught by original vocal and dance trainers who have
              nurtured your favorite K-pop stars. K-pop School offers
              <br />
              the chance to acquire the skills and charms of internationally
              acclaimed K-pop artists. Real-time video classes and
              <br />
              VOD content make learning easy and fun anytime, anywhere. Start
              your K-pop journey right now.
            </Text>
            <Box>
              <Button variant={"outline"} colorScheme="red">
                VIEW MORE
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Home;
