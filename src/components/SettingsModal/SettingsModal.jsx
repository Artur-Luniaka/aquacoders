import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal.jsx";
import SaveButton from "../../components/SaveButton/SaveButton.jsx";
import s from "./SettingsModal.module.css";
import clsx from "clsx";
import { selectAvatarUrl } from "../../redux/auth/selectors.js";
import avatarPlaceholder from "../../assets/avatar.png";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/auth/operations/editUserInfoThunk.js";

const SettingsForm = () => {
  const avatarUrlFromStore = useSelector(selectAvatarUrl);
  const dispatch = useDispatch();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      weight: "",
      sportTime: "",
      gender: "",
      photo: null,
    },
  });

  const weight = watch("weight") || 0;
  const sportTime = watch("sportTime") || 0;
  const gender = watch("gender");

  const [imagePreview, setImagePreview] = useState(
    avatarUrlFromStore || avatarPlaceholder
  );

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const [waterIntake, setWaterIntake] = useState("1.8");

  useEffect(() => {
    const calculateWaterIntake = () => {
      if (!weight && !sportTime) return "1.8";
      if (!gender) return "1.8";
      return gender === "woman"
        ? (weight * 0.03 + sportTime * 0.4).toFixed(1)
        : (weight * 0.04 + sportTime * 0.6).toFixed(1);
    };

    setWaterIntake(calculateWaterIntake());
  }, [weight, sportTime, gender]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("weight", data.weight);
    formData.append("sportTime", data.sportTime);
    formData.append("gender", data.gender);
    console.log("Form Data:", data);

    if (data.photo && data.photo.length > 0) {
      formData.append("photo", data.photo[0]);
    }

    dispatch(updateUser(formData));
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
            <img className={s.avatar} src={imagePreview} alt="Avatar" />

            <label htmlFor="file-upload">
              <span className={s.icon_box}>
                <svg className={s.icon} width="18" height="18">
                  {/* <use href={sprite + "#icon-upload-photo"}></use> */}
                  <use href="/src/assets/sprite.svg#icon-upload-photo"></use>
                </svg>
                <span className={s.upload_text}>Upload a photo</span>
              </span>
            </label>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className={s.input_hide_upload}
              {...register("photo")}
              onChange={handlePhotoChange}
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
                  <div className={s.formulas_box}>
                    <div className={s.box_formula}>
                      <p className={s.title_formula}>For woman:</p>
                      <div className={s.formula}>V=(M*0,03) + (T*0,4)</div>
                    </div>
                    <div className={s.box_formula}>
                      <p className={s.title_formula}>For man:</p>
                      <div className={s.formula}>V=(M*0,04) + (T*0,6)</div>
                    </div>
                  </div>
                  <p className={s.description_formula}>
                    <span className={s.green}>* </span>V is the volume of the
                    water norm in liters per day, M is your body weight, T is
                    the time of active sports, or another type of activity
                    commensurate in terms of loads (in the absence of these, you
                    must set 0)
                  </p>
                  <span className={s.active_time}>
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
                    <label htmlFor="required-water" className={s.title_bold}>
                      The required amount of water in liters per day:
                    </label>
                    <input
                      type="text"
                      id="required-water"
                      className={clsx(s.input, s.green, s.margin)}
                      value={`${waterIntake()}L`}
                      readOnly
                    />
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
            <div style={{ marginBottom: "40px" }}>
              <SaveButton />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SettingsForm;
