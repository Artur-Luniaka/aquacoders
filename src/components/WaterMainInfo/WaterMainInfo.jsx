/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import css from "./WaterMainInfo.module.css";
import icons from "../../assets/sprite.svg";
export const WaterMainInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={css.day_norma}>
        <p className={css.liters}>1.5 L</p>
        <p className={css.text}> My daily norma</p>
      </div>
      <button type="button" className={css.button} onClick={handleClick}>
        <svg className={css.plus} width="16" height="16">
          <use href={`${icons}#icon-plus`} />
        </svg>
        <p className={css.add_water}>Add water</p>
      </button>
    </>
  );
};
