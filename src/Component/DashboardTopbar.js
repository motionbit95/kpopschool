import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const DashboardTopbar = (props) => {
  return (
    <HStack justify={"space-between"} p={16}>
      <HStack>
        <Text>Dashboard</Text>
        <FiChevronRight color="#00C3BA" />
        <Text>{props.sideTab}</Text>
        {props.isdetail && (
          <>
            <FiChevronRight color="#00C3BA" />
            <Text>{props.isdetail}</Text>
          </>
        )}
      </HStack>
      <Button size={"lg"}>LOG OUT</Button>
    </HStack>
  );
};

export default DashboardTopbar;
