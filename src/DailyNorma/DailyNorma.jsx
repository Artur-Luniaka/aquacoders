import React from "react";
import css from "./DailyNorma.module.css";

const DailyNorma = () => {
  return (
    <div className={css.day_norma}>
      <p className={css.liters}>1.5 L</p>
      <p className={css.text}> My daily norma</p>
    </div>
  );
};

export default DailyNorma;
