import { useState, useEffect } from "react";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import s from "./SignInPage.module.css";

const SignInPage = () => {
  const [hideImgBlock, setHideImgBlock] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth >= 1440) {
        setHideImgBlock(true);
      } else {
        setHideImgBlock(false);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <GreyBlock>
        <div className={s.signinContainer}>
          <h2 className={s.signinTitle}>Sign In</h2>
          <form className={s.signinForm}>
            <div className={s.inputGroup}>
              <label htmlFor="email" className={s.label}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={s.input}
              />
            </div>
            <div className={s.inputGroup}>
              <label htmlFor="password" className={s.label}>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className={s.input}
              />
            </div>
            </form>
            <button type="submit" className={s.signinButton}>
              Sign In
            </button>
          
          <p className={s.signupText}>
            Don’t have an account?{" "}
            <a href="#" className={s.signupLink}>
              Sign Up
            </a>
          </p>
        </div>
      </GreyBlock>
      {hideImgBlock && (
        <ImgBlock>
          <h2>Здесь будет контент на картинке,но только для веб версии</h2>
        </ImgBlock>
      )}
    </>
  );
};

export default SignInPage;
