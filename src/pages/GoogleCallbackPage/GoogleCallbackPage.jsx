import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { exchangeCodeForToken } from "../../redux/auth/operations/exchangeCodeForToken.js";

const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, user, error, isLoggedIn } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      dispatch(exchangeCodeForToken(code));
    } else {
      console.error("Ошибка: нет кода авторизации.");
      navigate("/signin");
    }
  }, [searchParams, dispatch, navigate]);

  useEffect(() => {
    console.log(
      "Status:",
      status,
      "User:",
      user,
      "Error:",
      error,
      "IsLoggedIn:",
      isLoggedIn
    );

    if (status === "succeeded" && user) {
      navigate("/user");
    } else if (status === "failed" || !isLoggedIn) {
      console.error("Ошибка при авторизации:", error);
      navigate("/signin");
    }
  }, [status, user, error, isLoggedIn, navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallbackPage;
