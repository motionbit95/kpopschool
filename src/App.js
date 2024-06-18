import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/CS/Home";
import { Center } from "@chakra-ui/layout";
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

function App() {
  const isAdmin = window.location.pathname.includes("/admin");
  return (
    <>
      {/* <Center minH={window.innerHeight}> */}
      {isAdmin ? (
        <>
          {/* AD 페이지 */}
          <BrowserRouter>
            <Routes>
              {/* 임시 */}
              {/* <Route path="/admin" element={<Main />} /> */}
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <>
          {/* CS 페이지 */}
          <BrowserRouter>
            {!window.location.pathname.includes("signin") &&
              !window.location.pathname.includes("signup") && <Topbar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/teachers/*" element={<TeacherDetail />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/curriculum/*" element={<CurriculumDetail />} />
              <Route path="/community" element={<Cummunity />} />
              <Route path="/mypage" element={<MyPage />} />

              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            {!window.location.pathname.includes("signin") &&
              !window.location.pathname.includes("signup") && <Footer />}
          </BrowserRouter>
        </>
      )}
      {/* </Center> */}
    </>
  );
}

export default App;
