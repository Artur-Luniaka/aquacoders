/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import s from "./AddWaterBtn.module.css";
import icons from "../../assets/sprite.svg";
import AddWaterForm from "../AddWaterForm/AddWaterForm.jsx";

import { useTranslation } from "react-i18next"; //моє

const AddWaterBtn = () => {
  const { t } = useTranslation(); //моє

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <button type="button" className={s.button} onClick={onOpenModal}>
        <svg className={s.plus} width="16" height="16">
          <use href={icons + "#icon-plus"} />
        </svg>
        <p className={s.add_water}>{t("add_title")}</p>
      </button>
      {isModalOpen && (
        <AddWaterForm onCloseModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default AddWaterBtn;
