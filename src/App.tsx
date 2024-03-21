import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./contexts/AppContext/AppContext";
import { Main } from "reso-ui";

import HomePage from "./Pages/Home/HomePage";
import NotFoundPage from "./Pages/Error/NotFoundPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AppNavbar from "./Containers/AppNavbar/AppNavbar";
import UnauthorizedPage from "./Pages/Error/UnauthorizedPage";
import MyPage from "./Pages/MyProtectedPage/MyPage";
import { useServerSocket } from "./hooks/useServerSocket";

// protect
import protectPage from "./wrappers/protectPage";
const MyPageProtected = protectPage(MyPage);

function App() {
  const { serverSocketConnected } = useContext(AppContext);

  useServerSocket();

  console.log("Server side socket connected:", serverSocketConnected);
  return (
    <BrowserRouter>
      <AppNavbar />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<RegisterPage />} />
          <Route path="/auth/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/mypage" element={<MyPageProtected />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
