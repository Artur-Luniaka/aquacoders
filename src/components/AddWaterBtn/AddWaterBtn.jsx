/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import s from "./AddWaterBtn.module.css";
import icons from "../../assets/sprite.svg";

const AddWaterBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  return (
    <button type="button" className={s.button} onClick={handleClick}>
      <svg className={s.plus} width="16" height="16">
        <use href={icons + "#icon-plus"} />
      </svg>
      <p className={s.add_water}>Add water</p>
    </button>
  );
};

export default AddWaterBtn;
