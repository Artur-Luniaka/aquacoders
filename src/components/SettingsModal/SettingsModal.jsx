import { useForm } from "react-hook-form";
// import { useState } from "react";
import Modal from "../../components/Modal/Modal.jsx";
import SaveButton from "../../components/SaveButton/SaveButton.jsx";
import css from "./SettingsModal.module.css";
import clsx from "clsx";

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
      <h2 className={css.title_modal}>Setting</h2>
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
        <div className={css.content_box}>
          <div className={css.part_content}>
            <div className={css.radio_gender}>
              <span className={css.radio_title}>Your gender identify</span>
              <div className={css.radio_group}>
                <label for="weight-woman" className={css.radio_label}>
                  <input
                    type="radio"
                    value="woman"
                    id="weight-woman"
                    {...register("gender")}
                    className={css.radio_input}
                  />
                  <span className={css.custom_radio}></span> Woman
                </label>
                <label for="weight-man" className={css.radio_label}>
                  <input
                    type="radio"
                    value="man"
                    id="weight-man"
                    {...register("gender")}
                    className={css.radio_input}
                  />
                  <span className={css.custom_radio}></span> Man
                </label>
              </div>
            </div>
            <div className={css.input_box}>
              <label for="name" className={css.radio_title}>
                Your name
              </label>
              <input
                type="text"
                placeholder="Your name"
                id="name"
                {...register("name")}
                className={css.input}
              />
              <label for="email" className={css.radio_title}>
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                {...register("email")}
                className={css.input}
              />
            </div>
            <div className={css.daily_box}>
              <label className={css.radio_title}>My daily norma</label>
              <div className={css.box_formula}>
                <p className={css.title_formula}>For woman:</p>
                <div className={css.formula}>V=(M*0,03) + (T*0,4)</div>
              </div>
              <div className={css.box_formula}>
                <p className={css.title_formula}>For man:</p>
                <div className={css.formula}>V=(M*0,04) + (T*0,6)</div>
              </div>
              <p className={css.description_formula}>
                <span className={css.green}>* </span>V is the volume of the
                water norm in liters per day, M is your body weight, T is the
                time of active sports, or another type of activity commensurate
                in terms of loads (in the absence of these, you must set 0)
              </p>
              <span>
                <span className={css.green}>! </span>Active time in hours
              </span>
            </div>
          </div>
          <div className={css.part_content}>
            <div className={css.input_box}>
              <label for="user-weight" className={css.user_description}>
                Your weight in kilograms
              </label>
              <input
                type="number"
                placeholder="0"
                id="user-weight"
                {...register("weight")}
                className={css.input}
              />
              <label for="time-sport" className={css.user_description}>
                The time of active participation in sports
              </label>
              <input
                type="number"
                placeholder="0"
                id="time-sport"
                {...register("sportTime")}
                className={css.input}
              />

              <span className={css.result_text}>
                The required amount of water in liters per day:{" "}
                <span className={clsx(css.green, css.margin)}>1.8 L</span>
              </span>

              <label for="time-sport" className={css.title_bold}>
                Write down how much water you will drink
              </label>
              <input
                type="text"
                placeholder="1.8"
                id="time-sport"
                className={css.input}
              />
            </div>
          </div>
        </div>
        <SaveButton />
      </form>
    </Modal>
  );
};

export default SettingsForm;
