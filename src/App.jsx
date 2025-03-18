import { lazy } from "react";
import "./App.css";
import "./redux/aqua.js";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useSelector } from "react-redux";
import { selectRefresh } from "./redux/common/selectors.js";
import Refresh from "./components/Refresh/Refresh.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const ResetPassPage = lazy(() => import("./pages/ResetPassPage/ResetPassPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const GoogleCallbackPage = lazy(() =>
  import("./pages/GoogleCallbackPage/GoogleCallbackPage.jsx")
);

const App = () => {
  const refresh = useSelector(selectRefresh);
  return (
    <>
      <Layout>
        {refresh && (
          <div className="refresh">
            <Refresh />
          </div>
        )}
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
          <Route path="/confirm-oauth" element={<GoogleCallbackPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/reset-password" element={<ResetPassPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
