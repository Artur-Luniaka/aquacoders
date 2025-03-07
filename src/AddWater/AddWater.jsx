/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import css from "./AddWater.module.css";
import icons from "../assets/sprite.svg";

const AddWater = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  return (
    <button type="button" className={css.button} onClick={handleClick}>
      <svg className={css.plus} width="16" height="16">
        <use href={`${icons}#icon-plus`} />
      </svg>
      <p className={css.add_water}>Add water</p>
    </button>
  );
};

export default AddWater;
