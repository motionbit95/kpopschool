import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Topbar = () => {
  const isLogin = true;
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("selectedButton") || "";
  });

  useEffect(() => {
    localStorage.setItem("selectedButton", selected);
  }, [selected]);

  const handleButtonClick = (buttonName, url = null) => {
    setSelected(buttonName);
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <Container minW={"container.xl"}>
      <HStack id="header" py={4} justifyContent={"space-between"}>
        <HStack onClick={() => handleButtonClick("home", "/")}>
          <Box boxSize={"120px"}>
            <Image src={require("../Asset/Logo/K-popLogo.png")} alt={""} />
          </Box>
          <Box>
            <Image src={require("../Asset/Logo/LogoTitle.png")} alt={""} />
          </Box>
        </HStack>
        <ButtonGroup size={"lg"} variant={"ghost"}>
          <Button
            onClick={() => handleButtonClick("teachers", "/teachers")}
            color={selected === "teachers" ? "#00C3BA" : "black"}
          >
            Teachers
          </Button>
          <Button
            onClick={() => handleButtonClick("curriculum", "/curriculum")}
            color={selected === "curriculum" ? "#00C3BA" : "black"}
          >
            Curriculum
          </Button>
          <Button
            onClick={() => handleButtonClick("cummunity", "/cummunity")}
            color={selected === "cummunity" ? "#00C3BA" : "black"}
          >
            Cummunity
          </Button>
          <Button
            onClick={() => handleButtonClick("mypage", "/mypage")}
            color={selected === "mypage" ? "#00C3BA" : "black"}
          >
            My Page
          </Button>
          {isLogin ? (
            <Button variant={"solid"} bgColor={"#E1E4E4"} color={"white"}>
              LOG OUT
            </Button>
          ) : (
            <Button variant={"solid"} colorScheme={"teal"}>
              LOG IN
            </Button>
          )}
        </ButtonGroup>
      </HStack>
    </Container>
  );
};

export default Topbar;
