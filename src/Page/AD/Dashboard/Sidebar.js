import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { popmag } from "../../../App";

export const getTab = () => {
  return window.location.pathname.split("/").pop() === "admin"
    ? "HOME"
    : window.location.pathname.split("/").pop();
};

const Sidebar = (props) => {
  const [sideTab, setSideTab] = useState("HOME");
  useEffect(() => {
    setSideTab(getTab());
  }, [window.location.pathname]);
  return (
    <Stack
      minH={"100vh"}
      py={8}
      bgColor={"#F1F1F1"}
      align={"center"}
      borderRight={"2px solid #FF3CA2"}
    >
      <Box boxSize={"140px"}>
        <Image src={require("../../../Asset/Logo/KpopLogo.png")} />
      </Box>
      <Stack>
        <SelectedButton
          Tabname={"HOME"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"User"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"Trainer"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"Class"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"Payment"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"Coupon"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"Inquiry"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"Policy"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
        <SelectedButton
          Tabname={"FAQ"}
          setSideTab={props.handleSideTab}
          sideTab={sideTab}
        />
      </Stack>
    </Stack>
  );
};

export default Sidebar;

const SelectedButton = ({ Tabname, sideTab, setSideTab }) => {
  const navigate = useNavigate();
  return (
    <Flex spacing={0} position={"relative"} w={"full"}>
      <Button
        w={"280px"}
        h={"50px"}
        variant={"ghost"}
        fontWeight={"700"}
        fontSize={"xl"}
        color={sideTab === Tabname ? popmag : "black"}
        onClick={() => {
          setSideTab(Tabname);
          navigate(`/admin/${Tabname}`);
        }}
        _hover={"none"}
        _focus={"none"}
        _active={"none"}
      >
        {Tabname}
      </Button>
      <Box
        display={sideTab === Tabname ? "block" : "none"}
        position={"absolute"}
        right={0}
        w={2}
        h={"full"}
        bgColor={popmag}
      />
    </Flex>
  );
};
