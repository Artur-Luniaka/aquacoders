import { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const ResetPassPage = lazy(() => import("./pages/ResetPassPage/ResetPassPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

import "./i18n.js"; //моє

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <PublicRoute redirectTo="/user" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute redirectTo="/user" component={<SignInPage />} />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/signin" component={<UserPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/reset-password" element={<ResetPassPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
