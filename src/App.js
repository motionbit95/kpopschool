import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/CS/Home";
import { Center } from "@chakra-ui/layout";
import Topbar from "./Component/Topbar";
import Teachers from "./Page/CS/Teachers";
import Curriculum from "./Page/CS/Curriculum";
import Cummunity from "./Page/CS/Cummunity";
import MyPage from "./Page/CS/MyPage";
import TeacherDetail from "./Page/CS/TeacherDetail";

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
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/teachers/*" element={<TeacherDetail />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/community" element={<Cummunity />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
      {/* </Center> */}
    </>
  );
}

export default App;
