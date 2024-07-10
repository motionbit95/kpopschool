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
import { host_url, popmint } from "../../../App";

const Policy = () => {
  const [sections, setSection] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    const getPolicy = async () => {
      fetch(`${host_url}/home/get/policy`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setSection(res.sections);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getPolicy();
  }, []);

  const addSection = () => {
    setSection([
      ...sections,
      {
        title: "",
        description: "",
        index: sections.length,
      },
    ]);
  };

  const removeSection = (id) => {
    setSection(sections.filter((section) => section.index !== id));
  };

  const handleSubmit = () => {
    console.log(sections);
    //업로드 구현 필요

    fetch(`${host_url}/home/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "policy",
        sections: sections,
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex w={"100%"} h={"100%"}>
      <Stack w={"100%"} p={16}>
        <HStack justify={"space-between"}>
          <Text fontSize={"20px"} fontWeight={"600"}>
            Terms and Conditions Policy
          </Text>
          <Box>
            <Button color={"white"} bgColor={popmint} onClick={handleSubmit}>
              SAVE
            </Button>
          </Box>
        </HStack>
        <Stack spacing={4}>
          {sections.map((section) => (
            <PolicyForm
              key={section.index}
              data={section}
              onRemove={() => removeSection(section.index)}
              onChange={(data) => {
                let newList = sections;
                newList[section.index] = data;
                setSection(newList);
              }}
            />
          ))}
        </Stack>
        <Stack align={"center"} pt={8}>
          <Circle onClick={addSection} size={"33px"} bgColor={popmint}>
            <FiPlus color="white" size={20} />
          </Circle>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Policy;

const PolicyForm = ({ data, onRemove, onChange }) => {
  const [formInput, setFormInput] = useState({
    title: data?.title || "",
    description: data?.description || "",
  });
  return (
    <Stack spacing={4}>
      <HStack>
        <Text>section {data?.index + 1}</Text>
        <Text fontWeight={"700"}>Title</Text>
      </HStack>
      <Input
        defa={data?.title || ""}
        onChange={(e) => {
          setFormInput({ ...formInput, title: e.target.value });
          onChange({ ...formInput, title: e.target.value });
        }}
        placeholder={`Enter title for section ${data?.index + 1}`}
        defaultValue={data?.title || " "}
      />
      <HStack>
        <Text>section {data?.index + 1}</Text>
        <Text fontWeight={"700"}>Contents</Text>
      </HStack>
      <ToastEditor
        onChange={(html) => {
          setFormInput({ ...formInput, description: html });
          onChange({ ...formInput, description: html });
        }}
        initialValue={data?.description || " "}
      />
      <Stack align={"end"}>
        <Button onClick={onRemove}>Remove</Button>
      </Stack>
    </Stack>
  );
};
