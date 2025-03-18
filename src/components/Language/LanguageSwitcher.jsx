import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.css";
import { setLang } from "../../redux/common/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectLang } from "../../redux/common/selectors.js";
import { useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const activeLang = useSelector(selectLang);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setLang(lng));
  };

  useEffect(() => {
    if (activeLang === "ua") {
      i18n.changeLanguage("ua");
      dispatch(setLang("ua"));
    }
  }, [dispatch, activeLang, i18n]);

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
