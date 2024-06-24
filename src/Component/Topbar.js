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
import { signOut } from "firebase/auth";
import { auth, db } from "../Firebase/Config";
import { getCheckoutUrl, getIsPayment } from "../Firebase/StripePayment";
import { collection, onSnapshot } from "firebase/firestore";

const Topbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const Nav = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMousehover = (buttonId) => () => {
    setHoveredButton(buttonId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      }
    });
  }, [location]);

  const handleMouseleave = () => {
    setHoveredButton(null);
  };

  const handleLogout = () => {
    if (isLogin) {
      signOut(auth).then(() => {
        Nav("/signin");
      });
    }
  };

  /************** 하단 부분을 결제창으로 이동시키기 **************/
  const handleTest = async () => {
    if (isLogin) {
      // const user = auth.currentUser;
      // 테스트 product ID : price_1PV3ZUGcRvPNh5Hm56ZrKdfe
      const productId = "price_1PV3ZUGcRvPNh5Hm56ZrKdfe";
      let checkoutUrl = await getCheckoutUrl(productId);
      console.log(checkoutUrl);
      window.location.href = checkoutUrl;
    }
  };

  useEffect(() => {
    // 결제 성공 여부 확인
    const getIsPaied = async () => {
      let isPaied = false;
      // 테스트 product ID : price_1PV3ZUGcRvPNh5Hm56ZrKdfe
      isPaied = await getIsPayment("TEST_ID");
      console.log(isPaied);
      if (isPaied) {
        Nav("/payment/result");
      }

      return;
    };
    if (isLogin) {
      getIsPaied();
    }
  }, [isLogin]);

  /*******************************************************/

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
                <Button
                  variant={"solid"}
                  bgColor={"#E1E4E4"}
                  color={"white"}
                  onClick={handleLogout}
                >
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
              <Button onClick={handleTest}>TEST</Button>
            </ButtonGroup>
          </HStack>
        </Container>
      </Flex>
    </Stack>
  );
};

export default Topbar;
