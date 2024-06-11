import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Teachers = () => {
  const Teachers1 = [
    {
      id: 1,
      name: "Lee Hwan Ho",
      type: "Vocal Trainer",
      Image: require("../../Asset/Image/Trainer1.png"),
    },
    {
      id: 2,
      name: "Jessie",
      type: "Vocal Trainer",
      Image: require("../../Asset/Image/Trainer1.png"),
    },
  ];

  return (
    <Flex flex={1}>
      <Container minW={"container.xl"}>
        <Box py={6}>
          <Text fontSize={"5xl"} fontWeight={"bold"} color={"#FFCC00"}>
            Teachers
          </Text>
        </Box>
        <Tabs variant={"unstyled"}>
          <TabList gap={12}>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              All Trainer
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              Vocal Trainer
            </Tab>
            <Tab
              px={0}
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"#E1E4E4"}
              _selected={{ color: "#00C3BA" }}
            >
              Dance Trainer
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              {/* 전체 목록 */}
              <Stack spacing={0}>
                <Stack py={8}>
                  <Text fontWeight={"600"} fontSize={"2xl"}>
                    Vocal Trainer
                  </Text>
                  <SimpleGrid columns={4} spacing={4} py={4}>
                    {Teachers1.map((item) => (
                      <TeacherCard item={item} />
                    ))}
                  </SimpleGrid>
                </Stack>
                <Stack py={8}>
                  <Text fontWeight={"600"} fontSize={"2xl"}>
                    Dance Trainer
                  </Text>
                  <SimpleGrid columns={4} spacing={4} py={4}>
                    {Teachers1.map((item) => (
                      <TeacherCard item={item} />
                    ))}
                  </SimpleGrid>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel>
              {/* 보컬 강사 */}
              <SimpleGrid columns={4} spacing={4} py={4}>
                {Teachers1.map((item) => (
                  <TeacherCard item={item} />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              {/* 댄스 강사 */}
              <SimpleGrid columns={4} spacing={4} py={4}>
                {Teachers1.map((item) => (
                  <TeacherCard item={item} />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default Teachers;

const TeacherCard = (props) => {
  return (
    <Stack spacing={1}>
      <AspectRatio
        ratio={1}
        key={props.item.id}
        w={"250px"}
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        onClick={() => {
          console.log(props.item.id);
          // 리플레이스 시 뒤로가기가 안되는 이슈로 href로 이동 후 data를 id에 맞게 가져와야합니다.
          window.location.href = `/teachers/${props.item.id}`;
          // window.location.replace(`/teachers/${props.item.id}`);
        }}
      >
        <Image
          src={props.item.Image}
          alt={""}
          borderRadius={"xl"}
          objectFit={"cover"}
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </AspectRatio>
      <Text fontSize={"2xl"} fontWeight={"600"}>
        {props.item.name}
      </Text>
      <Text fontSize={"lg"}>{props.item.type}</Text>
    </Stack>
  );
};
