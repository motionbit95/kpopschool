import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ToastEditor from "../../../Component/ToastEditor";
import { FiPlus } from "react-icons/fi";
import { host_url } from "../../../App";

const FAQ = () => {
  const [formData, setFormData] = useState([]);

  const addSection = () => {
    setFormData([
      ...formData,
      {
        question: "",
        answer: "",
        index: formData.length,
      },
    ]);
  };

  const updateSection = (idx, updatedData) => {
    const updatedFormData = formData.map((data, i) =>
      i === idx ? { ...data, ...updatedData } : data
    );
    setFormData(updatedFormData);
  };

  const removeSection = (id) => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      fetch(`${host_url}/faq/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          if (res === "success") {
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    // 리스트 업데이트하기
    formData.map((data) => {
      fetch(`${host_url}/faq/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          if (res === "none") {
            // 생성
            fetch(`${host_url}/faq/add`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.text())
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    // faq 리스트 받아오기
    fetch(`${host_url}/faq/list`)
      .then((res) => res.json())
      .then((res) => {
        setFormData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"100%"} p={16}>
        <HStack justify={"space-between"}>
          <Text fontSize={"20px"} fontWeight={"600"}>
            FAQ List
          </Text>
          <Box>
            <Button color={"white"} bgColor={"#00C3BA"} onClick={handleSubmit}>
              SAVE
            </Button>
          </Box>
        </HStack>
        <Stack spacing={4}>
          {formData.map((section, index) => (
            <FAQForm
              key={index}
              section={index}
              formData={section}
              updateSection={(data) => updateSection(index, data)}
              onRemove={() => removeSection(section.id)}
            />
          ))}
        </Stack>
        <Stack align={"center"} pt={8}>
          <Circle onClick={addSection} size={"33px"} bgColor={"#00C3BA"}>
            <FiPlus color="white" size={20} />
          </Circle>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default FAQ;

const FAQForm = ({ section, onRemove, formData, updateSection }) => {
  const handleInputChange = (e) => {
    // 질문을 업데이트 합니다.
    updateSection({ ...formData, question: e.target.value });
  };

  const handleEditorChange = (html) => {
    // 응답을 업데이트 합니다.
    updateSection({ ...formData, answer: html });
  };

  return (
    <Stack spacing={4}>
      <HStack>
        <Text>{`section ${section + 1}`}</Text>
        <Text fontWeight={"700"}>Question</Text>
      </HStack>
      <HStack>
        <Input
          // value={formData?.question || ""}
          defaultValue={formData?.question || ""}
          onChange={handleInputChange}
          placeholder={`Enter question for section ${section + 1}`}
        />
        <Stack align={"end"}>
          <Button onClick={onRemove}>REMOVE</Button>
        </Stack>
      </HStack>
      <HStack>
        <Text>{`section ${section + 1}`}</Text>
        <Text fontWeight={"700"}>Answer</Text>
      </HStack>
      <ToastEditor
        onChange={handleEditorChange}
        initialValue={formData?.answer || " "}
      />
    </Stack>
  );
};
