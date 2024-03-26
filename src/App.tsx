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
import withAuth from "./wrappers/withAuth";
const MyPageProtected = withAuth(MyPage);

// helmet
import withMetaHelmet from "./wrappers/withMetaHelmet";
const HomePageWithMeta = withMetaHelmet(HomePage, {
  title: "Home - My React App",
  description: "Welcome to the React App"
});
const LoginPageWithMeta = withMetaHelmet(LoginPage, {
  title: "Log In - My React App",
  description: "Log in to the App"
});
const RegisterPageWithMeta = withMetaHelmet(RegisterPage, {
  title: "Sign Up - My React App",
  description: "User registration page"
});

function App() {
  const { serverSocketConnected } = useContext(AppContext);

  useServerSocket();

  console.log("Server side socket connected:", serverSocketConnected);
  return (
    <BrowserRouter>
      <AppNavbar />
      <Main>
        <Routes>
          <Route path="/" element={<HomePageWithMeta />} />
          <Route path="/auth/login" element={<LoginPageWithMeta />} />
          <Route path="/auth/signup" element={<RegisterPageWithMeta />} />
          <Route path="/auth/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/mypage" element={<MyPageProtected />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
