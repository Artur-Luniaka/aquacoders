import React from "react";
import s from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div>
      <p className={s.text}>Record daily water intake and track</p>
      <h1 className={s.title}>Water consumption tracker</h1>
      <button className={s.btntry}>Try tracker</button>
      <button className={s.btnsign}>Sign in</button>
    </div>
  );
};

export default WelcomeSection;
