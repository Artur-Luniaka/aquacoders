import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addWaterEntry } from "../../redux/water/operations/postAddWater.js";
import SaveButton from "../SaveButton/SaveButton.jsx";
import icons from "../../assets/sprite.svg";
import s from "./AddWaterForm.module.css";
import Modal from "../Modal/Modal.jsx";
import { changeMonthlyStats } from "../../redux/water/slice.js";

const AddWaterForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: { volume: 50, date: "" },
    mode: "onChange",
  });

  const waterAmount = watch("volume");
  const [timeValue, setTimeValue] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toTimeString().slice(0, 5);
    setTimeValue(formattedTime);
    setValue("date", formattedTime);
  }, [setValue]);

  const handleChangeTime = (event) => {
    let inputTime = event.target.value;
    const timePattern = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
    if (timePattern.test(inputTime)) {
      setTimeValue(inputTime);
      setValue("date", inputTime);
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
      setValue("volume", Number(value));
    } else if (value === "") {
      setValue("volume", 0);
    }
  };

  const extractDate = (isoString) => {
    return isoString.split("T")[0];
  };

  const onSubmit = async (data) => {
    try {
      const now = new Date();
      const [hours, minutes] = data.date.split(":");

      const recordingDateTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes,
        0
      );
      const formattedDate = new Date(
        recordingDateTime.getTime() -
          recordingDateTime.getTimezoneOffset() * 60000
      ).toISOString();

      const requestData = {
        volume: data.volume,
        date: formattedDate,
      };

      await toast.promise(dispatch(addWaterEntry(requestData)).unwrap(), {
        loading: "Adding water entry...",
        success: <b>Water added successfully!</b>,
      });
      dispatch(
        changeMonthlyStats({
          date: extractDate(requestData.date),
          stats: data.volume,
        })
      );
      onCloseModal();
    } catch (e) {
      toast.error(e.message || "Something went wrong. Please try again.");
    }
  };

  const handleClickMinus = (event) => {
    event.preventDefault();
    setValue("volume", Math.max(50, waterAmount - 50));
  };

  const handleClickPlus = (event) => {
    event.preventDefault();
    setValue("volume", Math.min(5000, waterAmount + 50));
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <div className={s.container}>
        <h3 className={s.title}>Add water</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <p className={s.text}>Choose a value:</p>
          <p className={s.label}>Amount of water:</p>
          <div className={s.water_controls}>
            <button
              type="button"
              className={s.water_btn}
              onClick={handleClickMinus}
              disabled={waterAmount <= 50}
            >
              <svg className={s.icon}>
                <use href={icons + "#icon-minus"} />
              </svg>
            </button>

            <p className={s.water_display}>{`${waterAmount} ml`}</p>

            <button
              type="button"
              className={s.water_btn}
              onClick={handleClickPlus}
              disabled={waterAmount >= 5000}
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
            name="date"
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
            name="volume"
            className={s.input}
            {...register("volume")}
            onChange={handleWaterAmountChange}
            value={waterAmount}
            maxLength={4}
            type="number"
          />
          <SaveButton />
        </form>
      </div>
    </Modal>
  );
};

export default AddWaterForm;
