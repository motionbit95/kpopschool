import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ToastEditor from "../../../../Component/ToastEditor";
import ImageUpload from "../../../../Component/ImageUpload";
import { host_url } from "../../../../App";

const CreateCoupon = () => {
  const [formData, setFormData] = React.useState({});
  function parseDate(dateString) {
    // 문자열을 분리하여 일, 월, 년도 부분을 추출합니다.
    const [day, month, year] = dateString.split("/").map(Number);

    // 년도를 네 자리로 변환합니다.
    const fullYear = year < 50 ? 2000 + year : 1900 + year;

    // Date 객체를 생성합니다.
    return new Date(fullYear, month - 1, day); // 월은 0부터 시작하므로 month에서 1을 뺍니다.
  }

  const getEventIndex = () => {
    fetch(`${host_url}/event/list`)
      .then((res) => res.json())
      .then((res) => {
        setFormData({
          ...formData,
          index: res.pop().index + 1,
          discountType: "%",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEventIndex();
  }, []);

  const addCoupon = () => {
    console.log(formData);
    fetch(`${host_url}/event/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.id) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack px={16} pt={16} pb={32} w={"full"} spacing={16}>
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"600"}>
              Coupon Issuance
            </Text>
            <Box>
              <Button
                bgColor={"#00C3BA"}
                color={"white"}
                fontWeight={"bold"}
                onClick={addCoupon}
              >
                ISSUANCE
              </Button>
            </Box>
          </HStack>
          <HStack w={"full"} spacing={6}>
            <Box w="320px" h="156px" bgColor={"gray.200"} borderRadius={"md"}>
              <ImageUpload
                setImageUrl={(url) =>
                  setFormData({ ...formData, thumbnail: url })
                }
              />
            </Box>
            <Stack flex={1}>
              <HStack>
                <Text w={"180px"}>Title</Text>
                <Input
                  w={"300px"}
                  borderRadius={"lg"}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </HStack>
              <HStack>
                <Text w={"180px"}>Discount details</Text>
                <Input
                  w={"120px"}
                  borderRadius={"lg"}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      discountAmount: e.target.value,
                    });
                  }}
                />
                <Select
                  w={"70px"}
                  borderRadius={"lg"}
                  ml={2}
                  defaultValue={"%"}
                  onChange={(e) =>
                    setFormData({ ...formData, discountType: e.target.value })
                  }
                >
                  <option value={"%"}>%</option>
                  <option value={"dollor"}>$</option>
                </Select>
              </HStack>
              <HStack spacing={12}>
                <HStack>
                  <Text w={"180px"}>Deadline for download</Text>
                  <Input
                    placeholder="DD/MM/YY"
                    w={"125px"}
                    borderRadius={"lg"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        deadline_start: parseDate(e.target.value),
                      });
                    }}
                  />
                  <Text>-</Text>
                  <Input
                    placeholder="DD/MM/YY"
                    w={"125px"}
                    borderRadius={"lg"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        deadline_end: parseDate(e.target.value),
                      });
                    }}
                  />
                </HStack>
                <HStack>
                  <Text pr={4}>Date of use</Text>
                  <Input
                    placeholder="DD/MM/YY"
                    w={"125px"}
                    borderRadius={"lg"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        use_start: parseDate(e.target.value),
                      });
                    }}
                  />
                  <Text>-</Text>
                  <Input
                    placeholder="DD/MM/YY"
                    w={"125px"}
                    borderRadius={"lg"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        use_end: parseDate(e.target.value),
                      });
                    }}
                  />
                </HStack>
              </HStack>
            </Stack>
          </HStack>
        </Stack>
        <ToastEditor
          initialValue={" "}
          onChange={(html) => {
            setFormData({ ...formData, description: html });
          }}
        />
      </Stack>
    </Flex>
  );
};

export default CreateCoupon;
