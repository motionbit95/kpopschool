import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const DashboardTopbar = (props) => {
  return (
    <HStack
      justify={"space-between"}
      p={16}
      position={"sticky"}
      top={0}
      bg={"white"}
      zIndex={111}
    >
      <HStack>
        <Text>Dashboard</Text>
        <FiChevronRight color="#00C3BA" />
        <Text fontWeight={props.isdetail ? "400" : "600"}>{props.sideTab}</Text>
        {props.isdetail && (
          <>
            <FiChevronRight color="#00C3BA" />
            <Text fontWeight={"600"}>{props.isdetail}</Text>
          </>
        )}
      </HStack>
      <Button size={"lg"}>LOG OUT</Button>
    </HStack>
  );
};

export default DashboardTopbar;
