import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.css";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

  return (
    <div className={s.wrapper_btn}>
      <button
        className={`${s.btn_lan} ${activeLang === "en" ? s.active : ""}`}
        onClick={() => changeLanguage("en")}
      >
        <img src="/src/assets/en.png" alt="EN Flag" />
      </button>
      <button
        className={`${s.btn_lan} ${activeLang === "ua" ? s.active : ""}`}
        onClick={() => changeLanguage("ua")}
      >
        <img src="/src/assets/ua.png" alt="EN Flag" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
