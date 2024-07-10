import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import DashboardTopbar from "../../../Component/DashboardTopbar";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/Config";

const Main = () => {
  const navigate = useNavigate();
  const [sideTab, setSideTab] = useState("HOME");
  const [isdetail, setIsdetail] = useState({
    view: "",
    data: "",
    itemNumber: 0,
  });

  const handleSideTab = (tab) => {
    setSideTab(tab);
    setIsdetail("");
  };

  // admin 로그인 확인
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/admin/login");
      } else {
        if (user.uid !== "uGpljAk5EXMNh4M7mLHKbcLNAD72") {
          // admin 계정
          // admin@kpopschool.com
          // test1234!
          navigate("/admin/login");
        }
      }
    });
  }, []);

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
          itemNumber={isdetail.itemNumber}
        />
      </Box>
    </Flex>
  );
};

export default Main;
