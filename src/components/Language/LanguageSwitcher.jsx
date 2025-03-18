import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.css";
import enFlag from "/src/assets/en.png";
import uaFlag from "/src/assets/ua.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const activeLang = localStorage.getItem("lang") || "en";

  const changeLanguage = (lng) => {
    if (activeLang !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("lang", lng);
    }
  };

  return (
    <div className={s.wrapper_btn}>
      <button
        className={`${s.btn_lan} ${activeLang === "en" ? s.active : ""}`}
        onClick={() => changeLanguage("en")}
      >
        <img src={enFlag} alt="EN Flag" />
      </button>
      <button
        className={`${s.btn_lan} ${activeLang === "ua" ? s.active : ""}`}
        onClick={() => changeLanguage("ua")}
      >
        <img src={uaFlag} alt="UA Flag" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
