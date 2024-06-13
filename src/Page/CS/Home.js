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
import { TeacherCard } from "./Teachers/Teachers";

const Home = () => {
  return (
    <Flex flex={1} direction={"column"} gap={24}>
      <Container minW={"container.xl"}>
        <Stack spacing={16}>
          <Stack direction={{ base: "column", md: "row" }}>
            <Box flex={1} borderRadius={"20"} overflow={"hidden"}>
              <Image src={require("../../Asset/Image/banner 1.png")} alt={""} />
            </Box>
          </Stack>
          <Stack spacing={12}>
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
              <Button
                fontSize={"2xl"}
                px={24}
                py={8}
                variant={"outline"}
                colorScheme="red"
              >
                VIEW MORE
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Box bgColor={"#E1E4E4"}>
        <Container
          minW={"container.xl"}
          overflowX={"scroll"}
          py={16}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex gap={2}>
            {Supporters.map((src) => (
              <Image src={src} alt={""} key={src} w={"280px"} />
            ))}
          </Flex>
        </Container>
      </Box>
      <Container minW={"container.xl"}>
        <Stack spacing={16}>
          <Stack>
            <Box>
              <Text fontSize={"5xl"} color={"#FFCC00"}>
                Teachers
              </Text>
            </Box>
            <Stack spacing={4}>
              <Text fontSize={"3xl"} fontWeight={"600"} color={"#00C3BA"}>
                {`Vocal Trainer`}
              </Text>
              {/* <TeacherCard /> */}
            </Stack>
          </Stack>
          <Stack>
            <Box>
              <Text fontSize={"5xl"} color={"#FFCC00"}>
                Lessons
              </Text>
            </Box>
            <Stack spacing={4}>
              <Text fontSize={"3xl"} fontWeight={"600"} color={"#00C3BA"}>
                {`Vocal`}
              </Text>
              {/* <TeacherCard /> */}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Home;

const Supporters = [
  require("../../Asset/Supporters/강동대학교.png"),
  require("../../Asset/Supporters/계성고.png"),
  require("../../Asset/Supporters/대전민예총.png"),
  require("../../Asset/Supporters/대전시립합창단.png"),
  require("../../Asset/Supporters/대평중.png"),
  require("../../Asset/Supporters/목원대학교.png"),
  require("../../Asset/Supporters/백제예대.png"),
  require("../../Asset/Supporters/서나무기획사.png"),
  require("../../Asset/Supporters/서울예대.png"),
  require("../../Asset/Supporters/서일대학교.png"),
  require("../../Asset/Supporters/여주대학교.png"),
  require("../../Asset/Supporters/우송정보대학.png"),
  require("../../Asset/Supporters/청운대학교.png"),
  require("../../Asset/Supporters/포항공과대학.png"),
];
