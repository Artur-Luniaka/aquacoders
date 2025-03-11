import { useForm } from "react-hook-form";
// import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal.jsx";
import SaveButton from "../../components/SaveButton/SaveButton.jsx";
import s from "./SettingsModal.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

const SettingsForm = () => {
  const avatarURL = useSelector((state) => state.user.avatarURL);
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
      <div className={s.modal_settings}>
        <h2 className={s.title_modal}>Setting</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          encType="multipart/form-data"
          className={s.form}
        >
          <div className={s.upload_box}>
            <img src={avatarURL} alt="Avatar" className={s.avatar} />
            <label htmlFor="file-upload" className={s.uploadLabel}>
              <span className={s.icon_box}>
                <svg
                  className={s.icon}
                  width="18"
                  height="18"
                  stroke="black"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                >
                  <use href={sprite + "#icon-upload-photo"}></use>
                  {/* <use href="/src/assets/sprite.svg#icon-upload-photo"></use> */}
                </svg>
                <span className={s.upload_text}>Upload a photo</span>
              </span>
            </label>
            <input
              type="file"
              id="file-upload"
              name="photo"
              accept="image/*"
              className={s.input_hide_upload}
            />
          </div>
          <div className={s.content_box}>
            <div className={s.box}>
              <div className={s.part_content}>
                <div className={s.radio_gender}>
                  <span className={s.radio_title}>Your gender identify</span>
                  <div className={s.radio_group}>
                    <label htmlFor="weight-woman" className={s.radio_label}>
                      <input
                        type="radio"
                        value="woman"
                        id="weight-woman"
                        {...register("gender")}
                        className={s.radio_input}
                      />
                      <span className={s.custom_radio}></span> Woman
                    </label>
                    <label htmlFor="weight-man" className={s.radio_label}>
                      <input
                        type="radio"
                        value="man"
                        id="weight-man"
                        {...register("gender")}
                        className={s.radio_input}
                      />
                      <span className={s.custom_radio}></span> Man
                    </label>
                  </div>
                </div>
                <div className={s.input_box}>
                  <label htmlFor="name" className={s.radio_title}>
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    {...register("name")}
                    className={s.input}
                  />
                  <label htmlFor="email" className={s.radio_title}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    {...register("email")}
                    className={s.input}
                  />
                </div>
                <div className={s.daily_box}>
                  <div className={s.radio_title}>My daily norma</div>
                  <div className={s.box_formula}>
                    <p className={s.title_formula}>For woman:</p>
                    <div className={s.formula}>V=(M*0,03) + (T*0,4)</div>
                  </div>
                  <div className={s.box_formula}>
                    <p className={s.title_formula}>For man:</p>
                    <div className={s.formula}>V=(M*0,04) + (T*0,6)</div>
                  </div>
                  <p className={s.description_formula}>
                    <span className={s.green}>* </span>V is the volume of the
                    water norm in liters per day, M is your body weight, T is
                    the time of active sports, or another type of activity
                    commensurate in terms of loads (in the absence of these, you
                    must set 0)
                  </p>
                  <span>
                    <span className={s.green}>! </span>Active time in hours
                  </span>
                </div>
              </div>
              <div className={s.part_content}>
                <div className={s.user_data}>
                  <div className={s.input_box}>
                    <label htmlFor="user-weight" className={s.user_description}>
                      Your weight in kilograms
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      id="user-weight"
                      {...register("weight")}
                      className={s.input}
                    />
                    <label htmlFor="time-sport" className={s.user_description}>
                      The time of active participation in sports
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      id="time-sport"
                      {...register("sportTime")}
                      className={s.input}
                    />
                  </div>
                  <div className={s.result_text}>
                    The required amount of water in liters per day:
                    <div className={clsx(s.green, s.margin)}>1.8 L</div>
                  </div>
                  <div className={s.water_intake}>
                    <label htmlFor="water-intake" className={s.title_bold}>
                      Write down how much water you will drink:
                    </label>
                    <input
                      type="text"
                      placeholder="1.8"
                      id="water-intake"
                      className={s.input}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SaveButton />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SettingsForm;
