import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      const exchangeCodeForToken = async () => {
        try {
          console.log("Отправка code на бэкенд:", code);
          const response = await axios.post(
            "http://localhost:3000/users/confirm-oauth",
            {
              code: code,
            }
          );

          if (response.data && response.data.data) {
            const { accessToken, refreshToken, sessionId, user } =
              response.data.data;
            if (accessToken && refreshToken && sessionId && user) {
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              localStorage.setItem("user", JSON.stringify(user));
              navigate("/user");
            } else {
              navigate("/signin");
            }
          }
        } catch (error) {
          console.error("Ошибка при обмене кода на токены:", error);
          navigate("/signin");
        }
      };

      exchangeCodeForToken();
    } else {
      navigate("/signin");
    }
  }, [searchParams, navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallbackPage;
