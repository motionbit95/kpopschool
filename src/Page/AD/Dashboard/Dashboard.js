import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Home from "./Home";
import User from "./User/User";
import Trainer from "./Trainer/Trainer";
import Payment from "./Payment";
import Class from "./Class";
import Coupon from "./Coupon";
import Inquiry from "./Inquriy";
import Policy from "./Policy";
import FAQ from "./FAQ";
import UserDetail from "./User/UserDetail";
import TrainerDetail from "./Trainer/TrainerDetail";

const Dashboard = (props) => {
  return (
    <Flex w={"100%"} h={"100%"}>
      {props.sideTab === "HOME" && <Home />}
      {props.sideTab === "User" && (
        <>
          {!props.isdetail && <User setIsdetail={props.setIsdetail} />}
          {props.isdetail && <UserDetail />}
        </>
      )}
      {props.sideTab === "Trainer" && (
        <>
          {!props.isdetail && <Trainer setIsdetail={props.setIsdetail} />}
          {props.isdetail && <TrainerDetail />}
        </>
      )}
      {props.sideTab === "Class" && <Class />}
      {props.sideTab === "Payment" && <Payment />}
      {props.sideTab === "Coupon" && <Coupon />}
      {props.sideTab === "Inquiry" && <Inquiry />}
      {props.sideTab === "Policy" && <Policy />}
      {props.sideTab === "FAQ" && <FAQ />}
    </Flex>
  );
};

export default Dashboard;
