import { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
