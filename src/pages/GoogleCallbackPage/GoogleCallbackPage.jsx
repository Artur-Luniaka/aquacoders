import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { exchangeCodeForToken } from "../../redux/auth/operations/exchangeCodeForToken.js";
import { getCurrentUser } from "../../redux/auth/operations/getCurrentUser.js";

const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = searchParams.get("code");

  const { status, user, error, isLoggedIn } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (code) {
      const fetch = async () => {
        try {
          await dispatch(exchangeCodeForToken(code)).unwrap();
          await dispatch(getCurrentUser()).unwrap();
        } catch (error) {
          console.error("Error occurred:", error);
        }
      };
      fetch();
    } else {
      navigate("/signin");
    }
  }, [searchParams, dispatch, navigate, code]);

  useEffect(() => {
    if (status === "succeeded" && user) {
      navigate("/user");
    } else if (status === "failed" || !isLoggedIn) {
      navigate("/signin");
    }
  }, [status, user, error, isLoggedIn, navigate]);
  return <div>Loading...</div>;
};

export default GoogleCallbackPage;
