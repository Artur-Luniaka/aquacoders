/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import s from "./AddWaterBtn.module.css";
import icons from "../../assets/sprite.svg";
import AddWaterForm from "../AddWaterForm/AddWaterForm.jsx";

const AddWaterBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => setIsModalOpen(true);
  
  return (
    <div>
      <button type="button" className={s.button} onClick={onOpenModal}>
        <svg className={s.plus} width="16" height="16">
          <use href={icons + "#icon-plus"} />
        </svg>
        <p className={s.add_water}>Add water</p>
      </button>
      {isModalOpen && (
        <AddWaterForm onCloseModal={() => setIsModalOpen(false)} />
      )};
    </div>
  );
};

export default AddWaterBtn;
