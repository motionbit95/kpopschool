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
import React, { useEffect, useState } from "react";
import { popmint } from "../../App";

const MakeInquiry = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    tag: "",
    title: "",
    content: "",
    file: "",
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
    // 여기서 파일을 업로드하는 추가적인 로직을 구현할 수 있습니다.
  };
  return (
    <Stack spacing={8}>
      <Text fontSize={"25px"} fontWeight={"600"} color={"4E4E4E"}>
        Make an Inquiry
      </Text>
      <Stack spacing={4}>
        <Select
          w={"150px"}
          placeholder="Tag"
          onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
        >
          <option>class</option>
          <option>payment</option>
          <option>ETC</option>
        </Select>
        <Flex gap={2}>
          <Input
            placeholder="Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Text fontSize={"2xl"}>*</Text>
        </Flex>
        <Textarea
          h={"200px"}
          resize={"none"}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        />
        <Input
          placeholder="Attach file"
          type="file"
          onChange={handleFileChange}
        />
        <Text pl={8} color={popmag}>
          * Please attach files no larger than 5 MB
        </Text>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            bgColor={popmint}
            color={"white"}
            size={"lg"}
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MakeInquiry;
