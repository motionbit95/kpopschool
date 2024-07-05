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

const Policy = () => {
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
    setFormData([...formData, { id: newSectionId, title: "", contents: "" }]);
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
      title: "",
      contents: "",
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
            Terms and Conditions Policy
          </Text>
          <Box>
            <Button color={"white"} bgColor={"#00C3BA"} onClick={handleSubmit}>
              SAVE
            </Button>
          </Box>
        </HStack>
        <Stack spacing={4}>
          {sections.map((section) => (
            <PolicyForm
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

export default Policy;

const PolicyForm = ({ section, onRemove, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const updatedFormData = formData.map((data) =>
      data.id === section.id ? { ...data, title: e.target.value } : data
    );
    setFormData(updatedFormData);
  };

  const handleEditorChange = (html) => {
    const updatedFormData = formData.map((data) =>
      data.id === section.id ? { ...data, contents: html } : data
    );
    setFormData(updatedFormData);
  };

  const currentData = formData.find((data) => data.id === section.id);

  return (
    <Stack spacing={4}>
      <HStack>
        <Text>{section.sectionName}</Text>
        <Text fontWeight={"700"}>Title</Text>
      </HStack>
      <Input
        defa={currentData?.title || ""}
        onChange={handleInputChange}
        placeholder={`Enter title for ${section.sectionName}`}
      />
      <HStack>
        <Text>{section.sectionName}</Text>
        <Text fontWeight={"700"}>Contents</Text>
      </HStack>
      <ToastEditor
        onChange={handleEditorChange}
        initialValue={currentData?.contents || " "}
      />
      <Stack align={"end"}>
        <Button onClick={onRemove}>Remove</Button>
      </Stack>
    </Stack>
  );
};
