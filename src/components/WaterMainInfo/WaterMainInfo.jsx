import React, { useState } from "react";
import css from "./WaterMainInfo.module.css";

export const WaterMainInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={css.container}>
      <div className={css.dayNorma}>
        <p className={css.liters}>1.5 L</p>
        <p className={css.text}> My daily norma</p>
      </div>

      <button type="button" className={css.button} onClick={handleClick}>
        <p className={css.plus}>+</p>

        <p className={css.addWater}>Add water</p>
      </button>
    </div>
  );
};
