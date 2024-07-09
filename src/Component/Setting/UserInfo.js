import {
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const UserInfo = () => {
  return (
    <Stack spacing={8} color={"#4E4E4E"}>
      <HStack spacing={8} fontSize={"24px"} fontWeight={"600"}>
        <Box boxSize={"100px"} position={"relative"}>
          <Avatar size={"full"} />
          <Circle
            position={"absolute"}
            size={"30px"}
            bgColor={"#00C3BA"}
            bottom={0}
            right={0}
          >
            <Image src={require("../../Asset/Icon/pencil.png")} />
          </Circle>
        </Box>
        <Text>User Name</Text>
      </HStack>
      <Flex>
        <Grid templateColumns={"repeat(2, 1fr)"} rowGap={8} columnGap={16}>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Name
              </Text>
              <Input focusBorderColor="#00C3BA" />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                First Name
              </Text>
              <Input focusBorderColor="#00C3BA" />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Email Address
              </Text>
              <Input focusBorderColor="#00C3BA" />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Birthday
              </Text>
              <Input focusBorderColor="#00C3BA" placeholder="DD/MM/YY" />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Other class experience
              </Text>
              <Select>
                <option value="1">At all</option>
                <option value="2">1</option>
                <option value="3">2</option>
              </Select>
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
      <Stack>
        <Text fontSize={"20px"} fontWeight={"600"}>
          K-pop genre or artist you are interested in
        </Text>
        <Input
          focusBorderColor="#00C3BA"
          w={"484px"}
          placeholder="Fill the text"
        />
      </Stack>
      <Box>
        <Button color={"white"} bgColor={"#00C3BA"}>
          SAVE
        </Button>
      </Box>
    </Stack>
  );
};

export default UserInfo;
