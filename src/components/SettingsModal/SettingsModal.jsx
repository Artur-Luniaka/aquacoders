import { useForm } from "react-hook-form";
// import { useState } from "react";
import Modal from "../../components/Modal/Modal.jsx";
import SaveButton from "../../components/SaveButton/SaveButton.jsx";
import css from "./SettingsModal.module.css";

const SettingsForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      weight: "",
      sportTime: "",
      gender: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Modal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        enctype="multipart/form-data"
        className={css.form}
      >
        <div className={css.upload_box}>
          <img
            src="../../assets/Customer1_mob@1x.webp"
            alt="Avatar"
            className={css.avatar}
          />
          <label for="file-upload" className={css.uploadLabel}>
            <span className={css.icon_box}>
              <svg className={css.icon} width="18" height="18">
                <use href="/src/assets/sprite.svg#icon-diagram"></use>
              </svg>
              Upload a photo
            </span>
          </label>
          <input
            type="file"
            id="file-upload"
            name="photo"
            accept="image/*"
            className={css.input_hide_upload}
          />
        </div>
        <div className={css.radioGroup}>
          <span className={css.radio_title}>Your gender identify</span>
          <label className={css.radioLabel}>
            <input
              type="radio"
              value="woman"
              {...register("gender")}
              className={css.radioInput}
            />
            <span className={css.customRadio}></span> Woman
          </label>
          <label className={css.radioLabel}>
            <input
              type="radio"
              value="man"
              {...register("gender")}
              className={css.radioInput}
            />
            <span className={css.customRadio}></span> Man
          </label>
        </div>

        <label className={css.radio_title}>Your name</label>
        <input
          type="text"
          placeholder="Your name"
          {...register("name")}
          className={css.input}
        />
        <label className={css.radio_title}>Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={css.input}
        />

        <span className={css.radio_title}>My daily norma</span>
        <div className={css.box_formula}>
          <div className={css.title_formula}>For woman:</div>
          <div className={css.formula}>V=(M*0,03) + (T*0,4)</div>
        </div>
        <div className={css.box_formula}>
          <div className={css.title_formula}>For man:</div>
          <div className={css.formula}>V=(M*0,04) + (T*0,6)</div>
        </div>
        <p>
          <span>*</span>V is the volume of the water norm in liters per day, M
          is your body weight, T is the time of active sports, or another type
          of activity commensurate in terms of loads (in the absence of these,
          you must set 0)
        </p>
        <span>
          <span className={css.green}>!</span>Active time in hours
        </span>
        <input
          type="number"
          placeholder="Your weight in kilograms"
          {...register("weight")}
          className={css.input}
        />
        <input
          type="number"
          placeholder="The time of active participation in sports"
          {...register("sportTime")}
          className={css.input}
        />

        <p className={css.resultText}>
          The required amount of water in liters per day:{" "}
          <span className={css.result}>1.8 L</span>
        </p>
        <input
          type="text"
          placeholder="Write down how much water you will drink"
          className={css.input}
        />

        <SaveButton />
      </form>
    </Modal>
  );
};

export default SettingsForm;
