import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SaveButton from "../SaveButton/SaveButton.jsx";
import icons from "../../assets/sprite.svg";
import s from "./EditWater.module.css";
import Modal from "../Modal/Modal.jsx";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateWaterRecord } from "../../redux/water/operations/updateWaterRecord.js";
import { changeMonthlyStats } from "../../redux/water/slice.js";

import { useTranslation } from "react-i18next"; //моє

const EditWater = ({ onCloseModal, record }) => {
  const { t } = useTranslation(); //моє

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      amountOfWater: record?.volume || 50,
      time: record?.date
        ? new Date(record.date).toTimeString().slice(0, 5)
        : "",
    },
  });

  const dispatch = useDispatch();

  const amountOfWater = watch("amountOfWater");

  const [timeValue, setTimeValue] = useState(record.date.slice(11, 16) || "");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toTimeString().slice(0, 5);
    setValue("time", formattedTime);
  }, [setValue, record]);

  const handleChangeTime = (event) => {
    let inputTime = event.target.value;

    const timePattern = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
    if (timePattern.test(inputTime)) {
      const [hours, minutes] = inputTime.split(":");

      if (Number(hours) <= 23 && Number(minutes) <= 59) {
        setTimeValue(inputTime);
        setValue("time", inputTime);
      } else {
        setTimeValue(inputTime);
      }
    } else {
      setTimeValue(inputTime);
    }
  };

  const handleWaterAmountChange = (event) => {
    let value = event.target.value;

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    if (/^\d+$/.test(value) && Number(value) <= 5000) {
      setValue("amountOfWater", Number(value));
    } else if (value === "") {
      setValue("amountOfWater", 0);
    }
  };

  const onSubmit = async (data) => {
    if (!record?._id) {
      toast.error("Invalid record ID. Please try again.");
      return;
    }

    const validatedAmount = Math.min(5000, data.amountOfWater);
    const formattedDate = new Date(record.date)
      .toISOString()
      .replace(/\.\d{3}Z$/, ".000+00:00");

    const updateTime = (isoString, timeString) => {
      const [hours, minutes] = timeString.split(":").map(Number);
      const date = new Date(isoString);
      date.setUTCHours(hours, minutes, 0, 0);
      return date.toISOString();
    };

    const extractDate = (isoString) => {
      return isoString.split("T")[0];
    };

    try {
      await toast.promise(
        dispatch(
          updateWaterRecord({
            id: record._id,
            volume: validatedAmount,
            date: updateTime(formattedDate, timeValue),
          })
        ).unwrap(),
        {
          loading: <p>{t("others_proc")}</p>,
          success: <p>{t("others_suc_up")}</p>,
        }
      );
      dispatch(
        changeMonthlyStats({
          date: extractDate(updateTime(formattedDate, timeValue)),
          stats: validatedAmount - record.volume,
        })
      );
      onCloseModal();
    } catch (e) {
      toast.error(e.message || "Something went wrong. Please try again.");
    }
  };

  const handleClickMinus = (event) => {
    event.preventDefault();
    setValue("amountOfWater", Math.max(50, amountOfWater - 50));
  };

  const handleClickPlus = (event) => {
    event.preventDefault();
    setValue("amountOfWater", Math.min(5000, amountOfWater + 50));
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <div className={s.container}>
        <h3 className={s.title}>{t("edit_title")}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <p className={s.text}>{t("edit_cor")}</p>
          <p className={s.label}>{t("edit_amount")}</p>
          <div className={s.water_and_buttons}>
            <button
              type="button"
              className={s.button}
              onClick={handleClickMinus}
              disabled={amountOfWater <= 50}
            >
              <svg className={s.icon}>
                <use href={icons + "#icon-minus"} />
              </svg>
            </button>

            <p className={s.water_amount}>{`${amountOfWater} ml`}</p>
            <button
              type="button"
              className={s.button}
              onClick={handleClickPlus}
              disabled={amountOfWater >= 5000}
            >
              <svg className={s.icon}>
                <use href={icons + "#icon-plus"} />
              </svg>
            </button>
          </div>

          <label className={s.label} htmlFor="time">
            {t("edit_rec")}
          </label>

          <input
            id="time"
            name="time"
            className={s.input}
            value={timeValue}
            placeholder="--:--"
            onChange={handleChangeTime}
            inputMode="numeric"
            maxLength={5}
          />

          <label className={s.amount} htmlFor="yourInput">
            {t("edit_enter")}
          </label>
          <input
            id="yourInput"
            name="yourInput"
            className={s.input}
            {...register("amountOfWater")}
            onChange={handleWaterAmountChange}
            value={amountOfWater}
            maxLength={4}
            type="number"
          />
          <SaveButton />
        </form>
      </div>
    </Modal>
  );
};

export default EditWater;
