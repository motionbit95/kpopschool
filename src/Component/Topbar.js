import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Topbar = () => {
  const isLogin = true;
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(location.pathname.substr(1)); // Remove leading "/"
  }, [location]);

  const handleButtonClick = (buttonName) => {
    setSelected(buttonName);
  };

  return (
    <Container minW={"container.xl"}>
      <HStack id="header" py={4} justifyContent={"space-between"}>
        <HStack as={Link} to="/" onClick={() => handleButtonClick("home")}>
          <Box boxSize={"120px"}>
            <Image src={require("../Asset/Logo/K-popLogo.png")} alt={""} />
          </Box>
          <Box>
            <Image src={require("../Asset/Logo/LogoTitle.png")} alt={""} />
          </Box>
        </HStack>
        <ButtonGroup size={"lg"} variant={"ghost"}>
          <Button
            as={Link}
            to="/teachers"
            onClick={() => handleButtonClick("teachers")}
            color={
              location.pathname.startsWith("/teachers") ? "#00C3BA" : "black"
            }
          >
            Teachers
          </Button>
          <Button
            as={Link}
            to="/curriculum"
            onClick={() => handleButtonClick("curriculum")}
            color={
              location.pathname.startsWith("/curriculum") ? "#00C3BA" : "black"
            }
          >
            Curriculum
          </Button>
          <Button
            as={Link}
            to="/community"
            onClick={() => handleButtonClick("community")}
            color={
              location.pathname.startsWith("/community") ? "#00C3BA" : "black"
            }
          >
            Community
          </Button>
          <Button
            as={Link}
            to="/mypage"
            onClick={() => handleButtonClick("mypage")}
            color={
              location.pathname.startsWith("/mypage") ? "#00C3BA" : "black"
            }
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
