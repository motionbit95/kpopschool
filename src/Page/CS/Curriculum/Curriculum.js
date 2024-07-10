import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { popmag, popmint } from "../../../App";

const Curriculum = () => {
  const [isHoveredDance, setIsHoveredDance] = useState(false);
  const [isHoveredVocal, setIsHoveredVocal] = useState(false);

  const hoverMousedDance = () => setIsHoveredDance(true);
  const unhoverMousedDance = () => setIsHoveredDance(false);

  const hoverMousedVocal = () => setIsHoveredVocal(true);
  const unhoverMousedVocal = () => setIsHoveredVocal(false);

  const navigate = useNavigate();

  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Flex
          fontWeight={"300"}
          fontSize={"xl"}
          color={"#4E4E4E"}
          align={"center"}
          justify={"flex-end"}
        >
          <Text>Curriculum</Text>
          <FiChevronRight />
          <Text color={popmint}>Intro</Text>
        </Flex>
        <Stack>
          <Box py={6}>
            <Text fontSize={"5xl"} fontWeight={"bold"} color={popmag}>
              Curriculum
            </Text>
          </Box>
          <Text fontSize={"2xl"} fontWeight={"600"}>
            Try different curriculums at K-pop schools
            <br />
            It supports 1:1 and 1:6, VOD
          </Text>
          <SimpleGrid columns={2} gap={16} p={16}>
            <Stack>
              <Box
                borderRadius={"xl"}
                pt={48}
                px={8}
                pb={8}
                position={"relative"}
                overflow={"hidden"}
                cursor={"pointer"}
                onMouseEnter={hoverMousedDance}
                onMouseLeave={unhoverMousedDance}
                onClick={() => {
                  const category = "Dance";
                  const format = "1:1";
                  navigate(`/curriculum/${category}`, {
                    state: { category, format },
                  });
                }}
              >
                <Text
                  fontSize={"4xl"}
                  color={"white"}
                  fontWeight={"bold"}
                  zIndex={2}
                  position={"relative"}
                >
                  Dance
                  <br />
                  Curriculum
                </Text>
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  bgSize={"cover"}
                  borderRadius={"xl"}
                  boxSize={"full"}
                >
                  <Image
                    transition={"all 0.3s ease-in-out"}
                    transform={isHoveredDance ? "scale(1.1)" : "scale(1)"}
                    src={require("../../../Asset/Image/Curriculum_dance.png")}
                  />
                </Box>
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  boxSize={"full"}
                  bgColor={"rgba(0, 0, 0, 0.2)"}
                  zIndex={1}
                />
              </Box>
              <Text>Supports format</Text>
              <ButtonGroup variant={"outline"}>
                <Button
                  color={popmint}
                  borderColor={popmint}
                  onClick={() => {
                    const category = "Dance";
                    const format = "1:1";
                    navigate(`/curriculum/${category}`, {
                      state: { category, format },
                    });
                  }}
                >
                  1:1
                </Button>
                <Button
                  color={popmint}
                  borderColor={popmint}
                  onClick={() => {
                    const category = "Dance";
                    const format = "1:6";
                    navigate(`/curriculum/${category}`, {
                      state: { category, format },
                    });
                  }}
                >
                  1:6
                </Button>
                <Button
                  color={popmint}
                  borderColor={popmint}
                  onClick={() => {
                    const category = "Dance";
                    const format = "VOD";
                    navigate(`/curriculum/${category}`, {
                      state: { category, format },
                    });
                  }}
                >
                  VOD
                </Button>
              </ButtonGroup>
            </Stack>
            <Stack>
              <Box
                borderRadius={"xl"}
                pt={48}
                px={8}
                pb={8}
                position={"relative"}
                overflow={"hidden"}
                cursor={"pointer"}
                onMouseEnter={hoverMousedVocal}
                onMouseLeave={unhoverMousedVocal}
                onClick={() => {
                  const category = "Vocal";
                  const format = "1:1";
                  navigate(`/curriculum/${category}`, {
                    state: { category, format },
                  });
                }}
              >
                <Text
                  fontSize={"4xl"}
                  color={"white"}
                  fontWeight={"bold"}
                  zIndex={2}
                  position={"relative"}
                >
                  Vocal
                  <br />
                  Curriculum
                </Text>
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  bgSize={"cover"}
                  borderRadius={"xl"}
                  boxSize={"full"}
                >
                  <Image
                    transition={"all 0.3s ease-in-out"}
                    transform={isHoveredVocal ? "scale(1.1)" : "scale(1)"}
                    src={require("../../../Asset/Image/Curriculum_vocal.png")}
                  />
                </Box>
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  boxSize={"full"}
                  bgColor={"rgba(0, 0, 0, 0.2)"}
                  zIndex={1}
                />
              </Box>
              <Text>Supports format</Text>
              <ButtonGroup variant={"outline"}>
                <Button
                  color={popmint}
                  borderColor={popmint}
                  onClick={() => {
                    const category = "Vocal";
                    const format = "1:1";
                    navigate(`/curriculum/${category}`, {
                      state: { category, format },
                    });
                  }}
                >
                  1:1
                </Button>
                <Button
                  color={popmint}
                  borderColor={popmint}
                  onClick={() => {
                    const category = "Vocal";
                    const format = "1:6";
                    navigate(`/curriculum/${category}`, {
                      state: { category, format },
                    });
                  }}
                >
                  1:6
                </Button>
                <Button
                  color={popmint}
                  borderColor={popmint}
                  onClick={() => {
                    const category = "Vocal";
                    const format = "VOD";
                    navigate(`/curriculum/${category}`, {
                      state: { category, format },
                    });
                  }}
                >
                  VOD
                </Button>
              </ButtonGroup>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Curriculum;
