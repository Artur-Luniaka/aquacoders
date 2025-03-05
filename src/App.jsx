import { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
