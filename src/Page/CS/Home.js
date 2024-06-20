import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TeacherInfo from "./Teachers/TeacherInfo";
import { LessonItem, TeacherItem } from "../../Component/HomeDetail";
import ImageCarousel from "../../Component/ImageCarousel";

const Home = () => {
  const [teacher, setTeacher] = useState([]);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -200; // 여백 추가 (위쪽으로 200px)
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    console.log(host_url);

    const getTeacher = async () => {
      fetch(`${host_url}/teachers/list`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const sortList = res.sort((a, b) => {
            return a.index - b.index;
          });
          setTeacher(sortList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTeacher();
    console.log(teacher);
  }, []);

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
                borderColor={"#FF3CA2"}
                color={"#FF3CA2"}
                onClick={() => scrollToSection("Lessons")}
              >
                VIEW MORE
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Box bgColor={"#E1E4E4"}>
        <Container minW={"container.xl"} py={16}>
          <ImageCarousel />
        </Container>
      </Box>
      <Container minW={"container.xl"} pb={24}>
        <Stack spacing={16}>
          <Stack>
            <Box>
              <Text fontSize={"6xl"} color={"#FFCC00"} fontWeight={"bold"}>
                Teachers
              </Text>
            </Box>
            <TeacherItem teacher={teacher} />
          </Stack>
          <Stack id="Lessons">
            <Box>
              <Text fontSize={"6xl"} color={"#FF3CA2"} fontWeight={"bold"}>
                Lessons
              </Text>
            </Box>
            <LessonItem />
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Home;
