import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Sidebar = (props) => {
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
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"User"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"Trainer"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"Class"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"Payment"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"Coupon"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"Inquiry"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"Policy"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
        <SelectedButton
          Tabname={"FAQ"}
          setSideTab={props.handleSideTab}
          sideTab={props.sideTab}
        />
      </Stack>
    </Stack>
  );
};

export default Sidebar;

const SelectedButton = ({ Tabname, sideTab, setSideTab }) => {
  return (
    <Flex spacing={0} position={"relative"} w={"full"}>
      <Button
        w={"280px"}
        h={"50px"}
        variant={"ghost"}
        fontWeight={"700"}
        fontSize={"xl"}
        color={sideTab === Tabname ? "#FF3CA2" : "black"}
        onClick={() => setSideTab(Tabname)}
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
        bgColor={"#FF3CA2"}
      />
    </Flex>
  );
};
