import React from "react";
import s from "./DailyNorma.module.css";
import { useSelector } from "react-redux";
import { selectDailyNorm } from "../../redux/auth/selectors";

import { useTranslation } from "react-i18next"; //моє

const DailyNorma = () => {
  const { t } = useTranslation(); //моє

  const dailyMm = useSelector(selectDailyNorm);
  const dailyL = dailyMm / 1000;

  return (
    <div className={s.day_norma}>
      <p className={s.liters}>{dailyL.toFixed(1)} L</p>
      <p className={s.text}> {t("home_my")}</p>
    </div>
  );
};

export default DailyNorma;
