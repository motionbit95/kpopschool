import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Topbar = () => {
  const isLogin = false;
  const location = useLocation();
  const Nav = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMousehover = (buttonId) => () => {
    setHoveredButton(buttonId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleMouseleave = () => {
    setHoveredButton(null);
  };

  return (
    <Stack spacing={0} mb={48}>
      <Flex
        py={2}
        position={"fixed"}
        w={"100%"}
        bgColor={"white"}
        zIndex={9999}
      >
        <Container minW={"container.xl"}>
          <HStack justifyContent={"space-between"}>
            <HStack onClick={() => Nav("/")} cursor={"pointer"}>
              <Box boxSize={"140px"}>
                <Image src={require("../Asset/Logo/KpopLogo.png")} alt={""} />
              </Box>
              <Box>
                <Image src={require("../Asset/Logo/LogoTitle.png")} alt={""} />
              </Box>
            </HStack>
            <ButtonGroup size={"lg"} variant={"ghost"} borderRadius={0}>
              <Button
                onClick={() => Nav("/teachers")}
                w={"140px"}
                bgColor={"white"}
                borderRadius={0}
                _hover={{ color: "#00C3BA" }}
                color={
                  location.pathname.startsWith("/teachers")
                    ? "#00C3BA"
                    : "black"
                }
              >
                Teachers
              </Button>
              <Stack
                position={"relative"}
                onMouseEnter={handleMousehover("1")}
                onMouseLeave={handleMouseleave}
              >
                <Button
                  onClick={() => Nav("/curriculum")}
                  w={"140px"}
                  bgColor={"white"}
                  borderRadius={0}
                  _hover={{ color: "#00C3BA" }}
                  color={
                    location.pathname.startsWith("/curriculum")
                      ? "#00C3BA"
                      : "black"
                  }
                >
                  Curriculum
                </Button>
                {hoveredButton === "1" && (
                  <>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={12}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const category = "Vocal";
                        const format = "1:1";
                        Nav(`/curriculum/${category}`, {
                          state: { category, format },
                        });
                      }}
                    >
                      Vocal
                    </Button>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={24}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const category = "Dance";
                        const format = "1:1";
                        Nav(`/curriculum/${category}`, {
                          state: { category, format },
                        });
                      }}
                    >
                      Dance
                    </Button>
                  </>
                )}
              </Stack>
              <Stack
                position={"relative"}
                onMouseEnter={handleMousehover("2")}
                onMouseLeave={handleMouseleave}
              >
                <Button
                  _hover={{ color: "#00C3BA" }}
                  w={"140px"}
                  bgColor={"white"}
                  borderRadius={0}
                  color={
                    location.pathname.startsWith("/community")
                      ? "#00C3BA"
                      : "black"
                  }
                  onClick={() => {
                    const communityIndex = 0;
                    Nav(`/community`, {
                      state: { communityIndex },
                    });
                  }}
                >
                  Community
                </Button>
                {hoveredButton === "2" && (
                  <>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={12}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const communityIndex = 0;
                        Nav(`/community`, {
                          state: { communityIndex },
                        });
                      }}
                    >
                      Event
                    </Button>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={24}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const communityIndex = 1;
                        Nav(`/community`, {
                          state: { communityIndex },
                        });
                      }}
                    >
                      FAQ
                    </Button>
                  </>
                )}
              </Stack>
              <Stack
                position={"relative"}
                w={"140px"}
                onMouseEnter={handleMousehover("3")}
                onMouseLeave={handleMouseleave}
              >
                <Button
                  _hover={{ color: "#00C3BA" }}
                  bgColor={"white"}
                  borderRadius={0}
                  color={
                    location.pathname.startsWith("/mypage")
                      ? "#00C3BA"
                      : "black"
                  }
                  onClick={() => {
                    const myPageIndex = 0;
                    Nav(`/mypage`, {
                      state: { myPageIndex },
                    });
                  }}
                >
                  My Page
                </Button>
                {hoveredButton === "3" && (
                  <>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={12}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const myPageIndex = 0;
                        Nav(`/mypage`, {
                          state: { myPageIndex },
                        });
                      }}
                    >
                      My lesson
                    </Button>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={24}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const myPageIndex = 1;
                        Nav(`/mypage`, {
                          state: { myPageIndex },
                        });
                      }}
                    >
                      Payment
                    </Button>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={36}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const myPageIndex = 2;
                        Nav(`/mypage`, {
                          state: { myPageIndex },
                        });
                      }}
                    >
                      Coupon
                    </Button>
                    <Button
                      w={"full"}
                      position={"absolute"}
                      bgColor={"white"}
                      borderRadius={0}
                      top={48}
                      _hover={{ color: "#00C3BA" }}
                      onClick={() => {
                        const myPageIndex = 3;
                        Nav(`/mypage`, {
                          state: { myPageIndex },
                        });
                      }}
                    >
                      1:1 inquiry
                    </Button>
                  </>
                )}
              </Stack>
              {isLogin ? (
                <Button variant={"solid"} bgColor={"#E1E4E4"} color={"white"}>
                  LOG OUT
                </Button>
              ) : (
                <Button
                  variant={"solid"}
                  color={"white"}
                  bgColor={"#00C3BA"}
                  onClick={() => Nav("/signin")}
                >
                  LOG IN
                </Button>
              )}
            </ButtonGroup>
          </HStack>
        </Container>
      </Flex>
    </Stack>
  );
};

export default Topbar;
