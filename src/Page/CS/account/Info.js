import {
  Box,
  Button,
  Center,
  Checkbox,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { host_url, popmag, popmint } from "../../../App";
import { auth } from "../../../Firebase/Config";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    // email: "",
    // timezone: "",
    // firstName: "",
    // name: "",
    // birthday: "",
    // interest: "",
    // frequency: "",
  });

  const [agree, setAgree] = useState({
    terms: false,
    consent: false,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user.email);
      setUser({
        email: user.email,
        id: user.uid,
      });
    });
  }, []);

  const handleSubmit = () => {
    if (agree.terms && agree.consent) {
      console.log(user);
      if (!user.timezone) {
        alert("Please select your timezone");
        return;
      }

      if (!user.firstName) {
        alert("Please enter your first name");
        return;
      }

      if (!user.name) {
        alert("Please enter your last name");
        return;
      }

      if (!user.birthday) {
        alert("Please enter your birthday");
        return;
      }

      if (!user.gender) {
        alert("Please enter your gender");
        return;
      }

      console.log(user);

      fetch(`${host_url}/users/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          navigate("/signin");
        })
        .catch((err) => {
          console.log(err);
        });

      // 유저 저장합니다.
    } else {
      alert("Please agree to our terms and conditions");
    }
  };
  return (
    <Center minH={"100vh"}>
      <Stack align={"center"} spacing={3}>
        <Box boxSize={"200px"} mb={-4}>
          <Image src={require("../../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Stack align={"center"}>
          <Text color={popmag} fontSize={"20px"} fontWeight={"600"}>
            Welcome to K-POP SCHOOL!
          </Text>
          <Text color={"#4E4E4E"} fontSize={"20px"}>
            here some information you need to fill in
          </Text>
        </Stack>
        <Stack spacing={3}>
          <Grid templateColumns={"repeat(3, 1fr)"} columnGap={8} rowGap={3}>
            <GridItem>
              <Stack>
                <HStack>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    Time Zone
                  </Text>
                  <Text fontSize={"15px"} color={"#C0C0C0"}>
                    Class time is set to PT
                  </Text>
                  <Text color={popmag}>*</Text>
                </HStack>
                <Input
                  placeholder="Time Zone"
                  onChange={(e) =>
                    setUser({ ...user, timezone: e.target.value })
                  }
                />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <HStack>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    Name
                  </Text>
                  <Text fontSize={"15px"} color={"#C0C0C0"}>
                    What's your name?
                  </Text>
                  <Text color={popmag}>*</Text>
                </HStack>
                <Input
                  placeholder="First Name"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack h={"full"} justify={"end"}>
                <Input
                  placeholder="Last Name"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <HStack>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    Birthday
                  </Text>
                  <Text fontSize={"15px"} color={"#C0C0C0"}>
                    Date of Birth
                  </Text>
                  <Text color={popmag}>*</Text>
                </HStack>
                <Input
                  placeholder="MM/DD/YY"
                  onChange={(e) =>
                    setUser({ ...user, birthday: e.target.value })
                  }
                />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <HStack>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    Email Address
                  </Text>
                  <Text color={popmag}>*</Text>
                </HStack>
                <Input
                  placeholder="Email Address"
                  disabled
                  value={user?.email}
                />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <HStack>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    Gender
                  </Text>
                  <Text color={popmag}>*</Text>
                </HStack>
                <Select
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                >
                  <option value={"ETC"}>ETC</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </Select>
              </Stack>
            </GridItem>
          </Grid>
          <HStack spacing={8}>
            <Stack flex={5}>
              <Text fontSize={"20px"} fontWeight={"500"}>
                What K-POP genre or artist are you interested in?
              </Text>
              <Input
                placeholder="Fill the text"
                onChange={(e) => setUser({ ...user, interest: e.target.value })}
              />
            </Stack>
            <Stack flex={4}>
              <Text fontSize={"20px"} fontWeight={"500"}>
                Have you ever taken a music or dance class?
              </Text>
              <Select
                onChange={(e) =>
                  setUser({ ...user, frequency: e.target.value })
                }
              >
                <option value={"At all"}>At all</option>
                <option value={"less than 3 months"}>less than 3 months</option>
                <option value={"less than 6 months"}>less than 6 months</option>
                <option value={"less than 1 year"}>less than 1 year</option>
                <option value={"Over 1 year"}>Over 1 year</option>
              </Select>
            </Stack>
          </HStack>
          <Stack>
            <HStack>
              <Checkbox
                colorScheme="teal"
                onChange={(e) =>
                  setAgree({ ...agree, terms: e.target.checked })
                }
              />
              <Text fontSize={"20px"} fontWeight={"500"}>
                Agree to Terms of Use and Privacy Policy
              </Text>
              <Text color={popmag}>*</Text>
            </HStack>
            <HStack>
              <Checkbox
                colorScheme="teal"
                onChange={(e) =>
                  setAgree({ ...agree, consent: e.target.checked })
                }
              />
              <Text fontSize={"20px"} fontWeight={"500"}>
                marketing consent
              </Text>
              <Text color={popmag}>*</Text>
            </HStack>
          </Stack>
        </Stack>
        <Button
          color={"white"}
          bgColor={popmint}
          isDisabled={!agree.terms || !agree.consent}
          onClick={handleSubmit}
        >
          SAVE
        </Button>
      </Stack>
    </Center>
  );
};

export default Info;
