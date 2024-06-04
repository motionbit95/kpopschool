import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/CS/Home";
import { Center } from "@chakra-ui/layout";

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
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
      {/* </Center> */}
    </>
  );
}

export default App;
