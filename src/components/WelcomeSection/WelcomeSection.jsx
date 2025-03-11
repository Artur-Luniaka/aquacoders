import React from "react";
import s from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>Record daily water intake and track</p>
      <h1 className={s.title}>Water consumption tracker</h1>
      <div className={s.btn_container}>
        <button className={s.btn_try}>Try tracker</button>
        <button className={s.btn_sign}>Sign in</button>
      </div>
    </div>
  );
};

export default WelcomeSection;
