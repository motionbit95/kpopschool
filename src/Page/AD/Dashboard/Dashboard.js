import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import User from "./User/User";
import Trainer from "./Trainer/Trainer";
import Payment from "./Payment";
import Class from "./Class";
import Coupon from "./Coupon/Coupon";
import Inquiry from "./Inquriy";
import Policy from "./Policy";
import FAQ from "./FAQ";
import UserDetail from "./User/UserDetail";
import TrainerDetail from "./Trainer/TrainerDetail";
import CreateCoupon from "./Coupon/CreateCoupon";
import { getTab } from "./Sidebar";

const Dashboard = (props) => {
  const [userList, setUserList] = useState([]);
  const [sideTab, setSideTab] = useState("HOME");
  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    console.log(host_url);

    setSideTab(getTab());

    const getUser = async () => {
      fetch(`${host_url}/users/list`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setUserList(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  useEffect(() => {
    setSideTab(getTab());
  }, [window.location.pathname]);

  return (
    <Flex w={"100%"} h={"100%"}>
      {sideTab === "HOME" && <Home />}
      {sideTab === "User" && (
        <>
          {!props.isdetail && (
            <User setIsdetail={props.setIsdetail} userData={userList} />
          )}
          {props.isdetail && (
            <UserDetail setIsdetail={props.setIsdetail} data={props.data} />
          )}
        </>
      )}
      {sideTab === "Trainer" && (
        <>
          {!props.isdetail && (
            <Trainer setIsdetail={props.setIsdetail} userData={userList} />
          )}
          {props.isdetail && <TrainerDetail />}
        </>
      )}
      {sideTab === "Class" && <Class />}
      {sideTab === "Payment" && <Payment />}
      {sideTab === "Coupon" && (
        <>
          {!props.isdetail && <Coupon setIsdetail={props.setIsdetail} />}
          {props.isdetail && <CreateCoupon />}
        </>
      )}
      {sideTab === "Inquiry" && <Inquiry />}
      {sideTab === "Policy" && <Policy />}
      {sideTab === "FAQ" && <FAQ />}
    </Flex>
  );
};

export default Dashboard;
