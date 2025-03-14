import React from "react";
import s from "./DailyNorma.module.css";
import { useSelector } from "react-redux";
import { selectDailyNorm } from "../../redux/auth/selectors";

const DailyNorma = () => {
  const dailyMm = useSelector(selectDailyNorm);
  const dailyL = dailyMm / 1000;

  return (
    <div className={s.day_norma}>
      <p className={s.liters}>{dailyL.toFixed(1)} L</p>
      <p className={s.text}> My daily norma</p>
    </div>
  );
};

export default DailyNorma;
