import { Link } from "react-router-dom";
import s from "./LoggedUserBtn.module.css";

import { useTranslation } from "react-i18next"; //моє

const LoggedUserBtn = () => {
  const { t } = useTranslation(); //моє

  return (
    <button className={s.btn}>
      <Link className={s.link} to="/user">
        {t("main_go")}
      </Link>
    </button>
  );
};

export default LoggedUserBtn;
