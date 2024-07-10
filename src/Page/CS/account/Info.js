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
import React from "react";

const Info = () => {
  return (
    <Center minH={"100vh"}>
      <Stack align={"center"} spacing={3}>
        <Box boxSize={"200px"} mb={-4}>
          <Image src={require("../../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Stack align={"center"}>
          <Text color={"#FF3CA2"} fontSize={"20px"} fontWeight={"600"}>
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
                  <Text color={"#FF3CA2"}>*</Text>
                </HStack>
                <Input />
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
                  <Text color={"#FF3CA2"}>*</Text>
                </HStack>
                <Input placeholder="First Name" />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack h={"full"} justify={"end"}>
                <Input placeholder="Last Name" />
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
                  <Text color={"#FF3CA2"}>*</Text>
                </HStack>
                <Input placeholder="MM/DD/YY" />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <HStack>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    Email Address
                  </Text>
                  <Text color={"#FF3CA2"}>*</Text>
                </HStack>
                <Input placeholder="Email Address" />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <HStack>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    Gender
                  </Text>
                  <Text color={"#FF3CA2"}>*</Text>
                </HStack>
                <Select>
                  <option>ETC</option>
                  <option>Man</option>
                  <option>Woman</option>
                </Select>
              </Stack>
            </GridItem>
          </Grid>
          <HStack spacing={8}>
            <Stack flex={5}>
              <Text fontSize={"20px"} fontWeight={"500"}>
                What K-POP genre or artist are you interested in?
              </Text>
              <Input placeholder="Fill the text" />
            </Stack>
            <Stack flex={4}>
              <Text fontSize={"20px"} fontWeight={"500"}>
                Have you ever taken a music or dance class?
              </Text>
              <Select>
                <option>At all</option>
                <option>less than 3 months</option>
                <option>less than 6 months</option>
                <option>less than 1 year</option>
                <option>Over 1 year</option>
              </Select>
            </Stack>
          </HStack>
          <Stack>
            <HStack>
              <Checkbox />
              <Text fontSize={"20px"} fontWeight={"500"}>
                Agree to Terms of Use and Privacy Policy
              </Text>
              <Text color={"#FF3CA2"}>*</Text>
            </HStack>
            <HStack>
              <Checkbox />
              <Text fontSize={"20px"} fontWeight={"500"}>
                marketing consent
              </Text>
              <Text color={"#FF3CA2"}>*</Text>
            </HStack>
          </Stack>
        </Stack>
        <Button color={"white"} bgColor={"#00C3BA"}>
          SAVE
        </Button>
      </Stack>
    </Center>
  );
};

export default Info;
