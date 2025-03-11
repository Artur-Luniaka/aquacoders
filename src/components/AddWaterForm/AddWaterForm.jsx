import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import SaveButton from "../SaveButton/SaveButton.jsx";
import Modal from "../Modal/Modal.jsx";
import s from "./AddWater.module.css";

const AddWaterForm = ({ onCloseModal }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [waterAmount, setWaterAmount] = useState(50);

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setValue("recordingTime", formattedTime); 
    setValue("waterUsed", 50); 
  }, [setValue]);

  const increaseWater = () => {
    setWaterAmount((prev) => prev + 50);
    setValue("waterUsed", waterAmount + 50);
  };

  const decreaseWater = () => {
    setWaterAmount((prev) => (prev > 0 ? prev - 50 : 0));
    setValue("waterUsed", waterAmount > 0 ? waterAmount - 50 : 0);
  };

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    onCloseModal();
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
        <h3 className={s.title}>Add water</h3>

        <p className={s.text}>Choose a value:</p>

        <div className={s.water_controls}>
          
        <button
            type="button"
            onClick={decreaseWater}
            className={s.water_btn}
          >-
          
        </button>
          <span className={s.water_display}>{waterAmount} ml</span>
        
        <button
            type="button"
            onClick={increaseWater}
            className={s.water_btn}
          >+
          </button>
        </div>

        <label>Recording time:</label>
        <input type="text" {...register("recordingTime")} readOnly />

        <label>Enter the value of the water used:</label>
        <input type="number" {...register("waterUsed")} defaultValue={50} />

        <SaveButton />
      </form>
    </Modal>
  );
};

export default AddWaterForm;

