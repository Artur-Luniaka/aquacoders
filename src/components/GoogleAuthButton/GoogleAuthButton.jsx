import { useState, useEffect } from "react";
import axios from "axios";

const GoogleAuthButton = () => {
  const [googleAuthURL, setGoogleAuthURL] = useState(null);

  useEffect(() => {
    const getGoogleAuthURL = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/get-oauth-url"
        );
        setGoogleAuthURL(response.data.data.url);
      } catch (error) {
        console.error("Ошибка при получении Google Auth URL:", error);
      }
    };

    getGoogleAuthURL();
  }, []);

  const handleGoogleSignIn = () => {
    if (googleAuthURL) {
      window.location.assign(googleAuthURL);
    } else {
      console.log("Google Auth URL не получен");
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign In with Google</button>;
};

export default GoogleAuthButton;
