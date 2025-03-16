import React from "react";
import s from "./WelcomeSection.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LoggedUserBtn from "../LoggedUserBtn/LoggedUserBtn";

import { useTranslation } from "react-i18next"; //моє

const WelcomeSection = () => {
  const { t } = useTranslation(); //моє

  const logged = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <p className={s.text}>{t("main_text")}</p>
      <h1 className={s.title}>{t("main_title")}</h1>
      {logged ? (
        <div className={s.btn_container}>
          <LoggedUserBtn />
        </div>
      ) : (
        <div className={s.btn_container}>
          <Link to="/signup" className={s.btn_try}>
            {t("main_try")}
          </Link>
          <Link to="/signin" className={s.btn_sign}>
            {t("main_sing")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default WelcomeSection;
