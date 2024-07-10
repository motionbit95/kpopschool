import { Stack, StackDivider, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { host_url } from "../../App";

const Information = () => {
  const [section, setSection] = useState([]);
  useEffect(() => {
    const getPolicy = async () => {
      fetch(`${host_url}/home/get/policy`)
        .then((res) => res.json())
        .then((res) => {
          setSection(res.sections);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getPolicy();
  }, []);
  return (
    <Stack
      color={"#4E4E4E"}
      divider={<StackDivider borderColor="gray.200" />}
      spacing={8}
    >
      {section.map((section, index) => (
        <Stack spacing={3} pl={10}>
          <Text fontSize={"25px"} fontWeight={"600"}>
            {section.title}
          </Text>
          <Text whiteSpace={"pre-line"}>{section.description}</Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default Information;
