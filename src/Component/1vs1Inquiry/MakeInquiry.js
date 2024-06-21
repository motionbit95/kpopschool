import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const MakeInquiry = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // 여기서 파일을 업로드하는 추가적인 로직을 구현할 수 있습니다.
  };
  return (
    <Stack spacing={8}>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Make an Inquiry
      </Text>
      <Stack spacing={4}>
        <Select w={"150px"} placeholder="Tag">
          <option>class</option>
          <option>payment</option>
          <option>ETC</option>
        </Select>
        <Flex gap={2}>
          <Input placeholder="Title" />
          <Text fontSize={"2xl"}>*</Text>
        </Flex>
        <Textarea h={"200px"} resize={"none"} />
        <Input placeholder="Attach file" type="file" />
        <Text pl={8} color={"#FF3CA2"}>
          * Please attach files no larger than 5 MB
        </Text>
        <Box display={"flex"} justifyContent={"center"}>
          <Button bgColor={"#00C3BA"} color={"white"} size={"lg"}>
            SUBMIT
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MakeInquiry;
