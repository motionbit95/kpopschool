import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TeacherDashboard = () => {
  return (
    <Stack>
      <HStack>
        <HStack
          border={"1px solid #E1E4E4"}
          borderRadius={"md"}
          p={4}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <HStack>
            <Box>
              <Image />
            </Box>
            <Stack>
              <HStack>
                <Text>Jessie</Text>
                <Text>{`vocal trainer`}</Text>
              </HStack>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                columnGap={3}
                maxW={"400px"}
                fontSize={"15px"}
              >
                <GridItem>instructor's rating</GridItem>
                <GridItem fontSize={"17px"} alignContent={"center"}>
                  <Flex gap={1}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Image
                        key={i}
                        src={
                          i < 5
                            ? require("../../Asset/Icon/starFill.png")
                            : require("../../Asset/Icon/starDefault.png")
                        }
                        alt="star"
                        boxSize="18px" // 적절한 크기로 설정
                      />
                    ))}
                  </Flex>
                </GridItem>
                <GridItem>review</GridItem>
                <GridItem fontSize={"17px"}>Text</GridItem>
                <GridItem>current class</GridItem>
                <GridItem fontSize={"17px"}>Text</GridItem>
                <GridItem>current student</GridItem>
                <GridItem fontSize={"17px"}>Text</GridItem>
              </Grid>
            </Stack>
          </HStack>
          <HStack>
            <Stack>
              <Text>Total Class</Text>
              <Text>38</Text>
            </Stack>
            <Stack>
              <Text>Total Student</Text>
              <Text>3560</Text>
            </Stack>
          </HStack>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default TeacherDashboard;
