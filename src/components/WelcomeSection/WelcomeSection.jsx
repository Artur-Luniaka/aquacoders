import React from "react";
import s from "./WelcomeSection.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LoggedUserBtn from "../LoggedUserBtn/LoggedUserBtn";

const WelcomeSection = () => {
  const logged = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <p className={s.text}>Record daily water intake and track</p>
      <h1 className={s.title}>Water consumption tracker</h1>
      {logged ? (
        <div className={s.btn_container}>
          <LoggedUserBtn />
        </div>
      ) : (
        <div className={s.btn_container}>
          <Link to="/signup" className={s.btn_try}>
            Try tracker
          </Link>
          <Link to="/signin" className={s.btn_sign}>
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
};

export default WelcomeSection;
