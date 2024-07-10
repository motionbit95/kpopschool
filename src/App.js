import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Page/CS/Home";
import Topbar from "./Component/Topbar";
import Teachers from "./Page/CS/Teachers/Teachers";
import Curriculum from "./Page/CS/Curriculum/Curriculum";
import Cummunity from "./Page/CS/Cummunity";
import MyPage from "./Page/CS/MyPage";
import TeacherDetail from "./Page/CS/Teachers/TeacherDetail";
import CurriculumDetail from "./Page/CS/Curriculum/CurriculumDetail";
import Footer from "./Component/Footer";
import Login from "./Page/CS/account/Login";
import SignUp from "./Page/CS/account/SignUp";
import SignOut from "./Page/CS/account/SignOut";
import { useEffect, useState } from "react";
import Program from "./Page/CS/Teachers/Program";
import Payment from "./Page/CS/Payment";
import PaymentResult from "./Page/CS/PaymentResult";
import CurriculumList from "./Page/CS/Curriculum/CurriculumList";
import Test from "./Page/AD/AdminLogin/Test";
import AdminLogin from "./Page/AD/AdminLogin";
import Main from "./Page/AD/Dashboard/Main";
import UserInfo from "./Component/Setting/UserInfo";
import Info from "./Page/CS/account/Info";

export const host_url =
  window.location.hostname === "localhost" ? "http://localhost:8080" : "";

export const popyellow = "#FFCC00";
export const popblue = "#00B2FF";
export const popmint = "#00C3BA";
export const popmag = "#FF3CA2";

function App() {
  const isAdmin = window.location.pathname.includes("/admin");
  const location = useLocation();
  const [showTopbarFooter, setShowTopbarFooter] = useState(true);

  useEffect(() => {
    const hidePaths = ["/signin", "/signup", "/signout"];
    const shouldShow = !hidePaths.some((path) =>
      location.pathname.includes(path)
    );
    setShowTopbarFooter(shouldShow);
  }, [location]);

  return (
    <>
      {/* <Center minH={window.innerHeight}> */}
      {isAdmin ? (
        <>
          {/* AD 페이지 */}
          <>
            <Routes>
              {/* 임시 */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/*" element={<Main />} />
            </Routes>
          </>
        </>
      ) : (
        <>
          {/* CS 페이지 */}
          <>
            {showTopbarFooter && <Topbar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/teachers/*" element={<TeacherDetail />} />
              <Route path="/curriculum/program/*" element={<Program />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/curriculum/*" element={<CurriculumDetail />} />
              <Route path="/curriculum/list" element={<CurriculumList />} />
              <Route path="/community" element={<Cummunity />} />
              <Route path="/mypage" element={<MyPage />} />

              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signup/info" element={<Info />} />
              <Route path="/signout" element={<SignOut />} />
              <Route path="/payment/result" element={<PaymentResult />} />

              <Route path="/test" element={<Test />} />
            </Routes>
            {showTopbarFooter && <Footer />}
          </>
        </>
      )}
      {/* </Center> */}
    </>
  );
}

export default App;
