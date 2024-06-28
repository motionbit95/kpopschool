import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Input,
  Stack,
  StackDivider,
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
  };

  const removeSection = (id) => {
    const updatedSections = sections.filter((section) => section.id !== id);
    setSections(updatedSections);
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"100%"} p={16}>
        <HStack justify={"space-between"}>
          <Text fontSize={"20px"} fontWeight={"600"}>
            Terms and Conditions Policy
          </Text>
          <Box>
            <Button color={"white"} bgColor={"#00C3BA"}>
              SAVE
            </Button>
          </Box>
        </HStack>
        <Stack spacing={4}>
          {sections.map((section) => (
            <PolicyForm
              key={section.id}
              section={section}
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

const PolicyForm = ({ section, onRemove }) => {
  return (
    <Stack spacing={4}>
      <HStack>
        <Text>{section.sectionName}</Text>
        <Text fontWeight={"700"}>Title</Text>
      </HStack>
      <Input placeholder={`Enter question for ${section.sectionName}`} />
      <HStack>
        <Text>{section.sectionName}</Text>
        <Text fontWeight={"700"}>Contents</Text>
      </HStack>
      <ToastEditor
        onChange={(value) => {
          console.log(value);
        }}
      />
      {/* 삭제 버튼 임시 */}
      {/* <Stack align={"end"}>
        <Button onClick={onRemove}>{section.sectionName} Remove</Button>
      </Stack> */}
    </Stack>
  );
};
