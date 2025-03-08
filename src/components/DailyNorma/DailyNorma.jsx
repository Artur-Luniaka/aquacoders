import React from "react";
import s from "./DailyNorma.module.css";

const DailyNorma = () => {
  return (
    <div className={s.day_norma}>
      <p className={s.liters}>1.5 L</p>
      <p className={s.text}> My daily norma</p>
    </div>
  );
};

export default DailyNorma;
