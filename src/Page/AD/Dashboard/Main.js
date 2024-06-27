import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import DashboardTopbar from "../../../Component/DashboardTopbar";

const Main = () => {
  const [sideTab, setSideTab] = useState("HOME");
  const [isdetail, setIsdetail] = useState("");

  const handleSideTab = (tab) => {
    setSideTab(tab);
    setIsdetail("");
  };

  return (
    <Flex>
      <Sidebar
        sideTab={sideTab}
        setSideTab={setSideTab}
        handleSideTab={handleSideTab}
      />
      <Box w={"full"} h={"full"}>
        <DashboardTopbar sideTab={sideTab} isdetail={isdetail} />
        <Dashboard
          sideTab={sideTab}
          setIsdetail={setIsdetail}
          isdetail={isdetail}
        />
      </Box>
    </Flex>
  );
};

export default Main;
