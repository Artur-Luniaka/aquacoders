import s from "./SaveButton.module.css";

import { useTranslation } from "react-i18next"; //моє

const SaveButton = () => {
  const { t } = useTranslation(); //моє

  return (
    <button className={s.btn} type="submit">
      {t("sett_save")}
    </button>
  );
};

export default SaveButton;
