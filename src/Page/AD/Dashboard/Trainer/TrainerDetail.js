import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { host_url, popmag } from "../../../../App";
import ImageUpload from "../../../../Component/ImageUpload";
import ConfirmBox from "../../../../Component/ConfirmBox";
import { popmint } from "../../../../App";

const TrainerDetail = (props) => {
  const [career, setCareer] = useState("");
  const [division, setDivision] = useState("");
  const toDate = (timestamp) => {
    return new Date(timestamp._seconds * 1000);
  };

  const [saveStep, setSaveStep] = useState(0);

  const updateTeacher = (id) => {
    fetch(`${host_url}/teachers/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        career: career,
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        setSaveStep(2);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Flex w={"100%"} h={"100%"}>
      <ConfirmBox
        isOpen={saveStep === 1}
        onClose={() => setSaveStep(0)}
        onConfirm={() => props.setIsdetail(false)}
      >
        <Text>Are you sure you want to cancel editing?</Text>
        <Text color={popmag}>Content is not saved</Text>
      </ConfirmBox>
      <Stack
        px={16}
        pt={16}
        pb={32}
        w={"full"}
        spacing={8}
        justify={"space-between"}
      >
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Trainer Profile
            </Text>
            <HStack>
              <Button
                variant={"outline"}
                borderColor={popmint}
                color={popmint}
                onClick={() => {
                  setSaveStep(1);
                }}
              >
                Back to List
              </Button>
              <Button
                color={"white"}
                bgColor={popmint}
                onClick={() => updateTeacher(props.data.id)}
              >
                SAVE
              </Button>
            </HStack>
          </HStack>
          <Stack>
            <HStack>
              <Text>User code No.</Text>
              <Text>{props.itemNumber}</Text>
            </HStack>
            <HStack spacing={4} w={"40%"}>
              <Box
                boxSize={"160px"}
                height={"100%"}
                aspectRatio={"1"}
                borderRadius={"md"}
                bgColor={"gray.200"}
              >
                {/* <Image src={props.data.profile} /> */}
                <ImageUpload
                  defaultValue={props.data.profile}
                  setImageUrl={(e) => console.log(e)}
                />
              </Box>
              <Stack spacing={4}>
                <Text fontSize={"lg"} fontWeight={"500"}>
                  {`${props.data.name} ${props.data.firstName}`}
                </Text>
                <Stack>
                  {/* <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      ID
                    </Text>
                    <Text></Text>
                  </HStack> */}
                  <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      Email
                    </Text>
                    <Text>{props.data.email}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      Date
                    </Text>
                    <Text>
                      {toDate(props.data.createdAt)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text w={"70px"} color={"#4E4E4E"}>
                      Rating
                    </Text>
                    <Flex gap={1} align={"center"} justify={"center"}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Image
                          key={i}
                          src={
                            i < props.data.rating
                              ? require("../../../../Asset/Icon/starFill.png")
                              : require("../../../../Asset/Icon/starDefault.png")
                          }
                          alt="star"
                          boxSize="18px" // 적절한 크기로 설정
                        />
                      ))}
                    </Flex>
                  </HStack>
                </Stack>
              </Stack>
            </HStack>
            <Stack>
              <Text>Division</Text>
              <Select
                defaultValue={props.data.division}
                onChange={(e) => setDivision(e.target.value)}
              >
                <option value="Vocal">Vocal</option>
                <option value="Dance">Dance</option>
              </Select>
            </Stack>
            <Stack>
              <Text>About Career</Text>
              <Textarea
                resize={"none"}
                h={"200px"}
                p={6}
                fontSize={"lg"}
                defaultValue={props.data.career}
                onChange={(e) => setCareer(e.target.value)}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default TrainerDetail;
