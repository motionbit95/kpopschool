import {
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const UserInfo = () => {
  return (
    <Stack spacing={8}>
      <HStack>
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
        <SimpleGrid columns={2} rowGap={8} columnGap={8}>
          <Stack>
            <Text fontSize={"lg"}>Name</Text>
            <Input w={"200px"} />
          </Stack>
          <Stack>
            <Text fontSize={"lg"}>First Name</Text>
            <Input w={"200px"} />
          </Stack>
          <Stack>
            <Text fontSize={"lg"}>Email Adress</Text>
            <Input w={"200px"} />
          </Stack>
        </SimpleGrid>
      </Flex>
      <Box>
        <Button>SAVE</Button>
      </Box>
    </Stack>
  );
};

export default UserInfo;
