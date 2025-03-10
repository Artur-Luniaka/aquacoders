import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal.jsx";
import { useForm } from "react-hook-form";
import SaveButton from "../SaveButton/SaveButton.jsx";
import icons from "../../assets/sprite.svg";
import s from "./EditWater.module.css";

const EditWater = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: { amountOfWater: 50, time: "" },
  });

  const amountOfWater = watch("amountOfWater");

  const [timeValue, setTimeValue] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toTimeString().slice(0, 5);
    setTimeValue(formattedTime);
    setValue("time", formattedTime);
  }, [setValue]);

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

  const onSubmit = (data) => {
    const validatedAmount = Math.min(5000, data.amountOfWater);
    setValue("amountOfWater", validatedAmount);
    console.log({ ...data, amountOfWater: validatedAmount });
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
    <Modal>
      <div className={s.container}>
        <h3 className={s.title}>Edit the entered amount of water</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <p className={s.text}>Correct entered data:</p>
          <p className={s.label}>Amount of water:</p>
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
            Recording time:
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
            Enter the value of the water used:
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
