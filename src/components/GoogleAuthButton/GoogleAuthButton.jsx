import { useState, useEffect } from "react";
import aqua from "../../redux/aqua.js";
import s from "./GoogleAuthButton.module.css";
import { useTranslation } from "react-i18next";

const GoogleAuthButton = () => {
  const [googleAuthURL, setGoogleAuthURL] = useState(null);
  const { t } = useTranslation(); //моє

  useEffect(() => {
    const getGoogleAuthURL = async () => {
      try {
        const response = await aqua.get("/users/get-oauth-url");
        setGoogleAuthURL(response.data.data.url);
      } catch (error) {
        console.error("Google Auth URL:", error);
      }
    };

    getGoogleAuthURL();
  }, []);

  const handleGoogleSignIn = () => {
    if (googleAuthURL) {
      window.location.assign(googleAuthURL);
    }
  };

  return (
    <div className={s.box}>
      <button onClick={handleGoogleSignIn} className={s.login_with_google_btn}>
        {t("google")}
      </button>
    </div>
  );
};

export default GoogleAuthButton;
