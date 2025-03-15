import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className={s.btn_lan} onClick={() => changeLanguage("en")}>
        Eng
      </button>
      <button className={s.btn_lan} onClick={() => changeLanguage("ua")}>
        Укр
      </button>
    </div>
  );
};

export default LanguageSwitcher;
