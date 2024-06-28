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
import React, { useState } from "react";
import ToastEditor from "../../../Component/ToastEditor";
import { FiPlus } from "react-icons/fi";

const FAQ = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      sectionName: "Section 1",
    },
  ]);

  const addSection = () => {
    const newSectionId = sections.length + 1;
    const newSection = {
      id: newSectionId,
      sectionName: `Section ${newSectionId}`,
    };
    setSections([...sections, newSection]);
    setFormData([...formData, { id: newSectionId, question: "", answer: "" }]);
  };

  const removeSection = (id) => {
    const updatedSections = sections.filter((section) => section.id !== id);
    setSections(updatedSections);
    const updatedFormData = formData.filter((data) => data.id !== id);
    setFormData(updatedFormData);
  };

  const [formData, setFormData] = useState([
    {
      id: 1,
      question: "",
      answer: "",
    },
  ]);

  const handleSubmit = () => {
    console.log(formData);
  };

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
          {sections.map((section) => (
            <FAQForm
              key={section.id}
              section={section}
              formData={formData}
              setFormData={setFormData}
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

const FAQForm = ({ section, onRemove, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const updatedFormData = formData.map((data) =>
      data.id === section.id ? { ...data, question: e.target.value } : data
    );
    setFormData(updatedFormData);
  };

  const handleEditorChange = (html) => {
    const updatedFormData = formData.map((data) =>
      data.id === section.id ? { ...data, answer: html } : data
    );
    setFormData(updatedFormData);
  };

  const currentData = formData.find((data) => data.id === section.id);

  return (
    <Stack spacing={4}>
      <HStack>
        <Text>{section.sectionName}</Text>
        <Text fontWeight={"700"}>Question</Text>
      </HStack>
      <Input
        value={currentData?.question || ""}
        onChange={handleInputChange}
        placeholder={`Enter question for ${section.sectionName}`}
      />
      <HStack>
        <Text>{section.sectionName}</Text>
        <Text fontWeight={"700"}>Answer</Text>
      </HStack>
      <ToastEditor onChange={handleEditorChange} />
      {/* <Stack align={"end"}>
        <Button onClick={onRemove}>Remove</Button>
      </Stack> */}
    </Stack>
  );
};
