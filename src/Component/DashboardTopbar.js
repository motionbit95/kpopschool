import { Button, HStack, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { auth } from "../Firebase/Config";
import { popmint } from "../App";

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
        <FiChevronRight color={popmint} />
        <Text fontWeight={props.isdetail ? "400" : "600"}>{props.sideTab}</Text>
        {props.isdetail && (
          <>
            <FiChevronRight color={popmint} />
            <Text fontWeight={"600"}>{props.isdetail}</Text>
          </>
        )}
      </HStack>
      <Button size={"lg"} onClick={() => signOut(auth)}>
        LOG OUT
      </Button>
    </HStack>
  );
};

export default DashboardTopbar;
