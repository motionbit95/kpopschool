import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Curriculum = () => {
  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Stack>
          <Box py={6}>
            <Text
              fontSize={"5xl"}
              fontWeight={"bold"}
              color={"rgba(255, 60, 162, 1)"}
            >
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
                bgImage={require("../../Asset/Image/Curriculum_dance.png")}
                bgSize={"cover"}
                bgColor={"black"}
                borderRadius={"xl"}
                pt={48}
                px={8}
                pb={8}
                position={"relative"}
                overflow={"hidden"}
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
                  boxSize={"full"}
                  bgColor={"rgba(0, 0, 0, 0.2)"}
                  zIndex={1}
                />
              </Box>
              <Text>Supports format</Text>
              <ButtonGroup variant={"outline"} colorScheme="green">
                <Button>1:1</Button>
                <Button>1:6</Button>
                <Button>VOD</Button>
              </ButtonGroup>
            </Stack>
            <Stack>
              <Box
                bgImage={require("../../Asset/Image/Curriculum_vocal.png")}
                bgSize={"cover"}
                borderRadius={"xl"}
                pt={48}
                px={8}
                pb={8}
                position={"relative"}
                overflow={"hidden"}
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
                  boxSize={"full"}
                  bgColor={"rgba(0, 0, 0, 0.2)"}
                  zIndex={1}
                />
              </Box>
              <Text>Supports format</Text>
              <ButtonGroup variant={"outline"} colorScheme="green">
                <Button>1:1</Button>
                <Button>1:6</Button>
                <Button>VOD</Button>
              </ButtonGroup>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Curriculum;
