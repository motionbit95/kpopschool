import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import DashboardTopbar from "../../../Component/DashboardTopbar";

const Main = () => {
  const [sideTab, setSideTab] = useState("HOME");
  const [isdetail, setIsdetail] = useState({ view: "", data: "" });

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
      <Box w={"full"} h={"full"} position={"relative"}>
        <DashboardTopbar sideTab={sideTab} isdetail={isdetail.view} />
        <Dashboard
          sideTab={sideTab}
          setIsdetail={setIsdetail}
          isdetail={isdetail.view}
          data={isdetail.data}
        />
      </Box>
    </Flex>
  );
};

export default Main;
