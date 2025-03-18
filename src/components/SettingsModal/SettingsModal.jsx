import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal.jsx";
import SaveButton from "../../components/SaveButton/SaveButton.jsx";
import s from "./SettingsModal.module.css";
import clsx from "clsx";
import { updateUser } from "../../redux/auth/operations/editUserInfoThunk.js";
import { settingsSchema } from "../../utils/validationSchema.js";

import SettingsAvatarModal from "../SettingsAvatarModal/SettingsAvatarModal.jsx";
import { selectUser } from "../../redux/auth/selectors.js";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next"; //моє

const SettingsModal = ({ onClose }) => {
  const [nameError, setNameError] = useState({ error1: false, error2: false });
  const [emailError, setEmailError] = useState(false);
  const [weightError, setWeightError] = useState({
    error1: false,
    error2: false,
  });
  const [sportTimeError, setSportTimeError] = useState({
    error1: false,
    error2: false,
  });
  const [genderError, setGenderError] = useState(false);
  const [dailyNormError, setDailyNormError] = useState({
    error1: false,
    error2: false,
  });

  const [waterIntake, setWaterIntake] = useState(1.5);

  const {
    name,
    email,
    gender: genderSelector,
    weight: weightSelector,
    dailySportTime,
    dailyNorm,
  } = useSelector(selectUser);

  const { t } = useTranslation(); //моє
  const dispatch = useDispatch();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: name,
      email: email,
      weight: weightSelector,
      dailySportTime: dailySportTime,
      gender: genderSelector,
      dailyNorm: dailyNorm,
    },
    mode: "onChange",
  });

  const weight = watch("weight") || 0;
  const sportTime = watch("dailySportTime") || 0;
  const gender = watch("gender");

  useEffect(() => {
    const calculateWaterIntake = () => {
      if (!Number(weight) || !Number(sportTime) || !gender) return 1.5;
      return gender === "female"
        ? (weight * 0.03 + sportTime * 0.4).toFixed(1)
        : (weight * 0.04 + sportTime * 0.6).toFixed(1);
    };
    setWaterIntake(calculateWaterIntake());
  }, [weight, sportTime, gender]);

  const onSubmit = async (data) => {
    setNameError({ error1: false, error2: false });
    setEmailError(false);
    setWeightError({ error1: false, error2: false });
    setSportTimeError({ error1: false, error2: false });
    setGenderError(false);
    setDailyNormError({ error1: false, error2: false });

    const userData = {
      name: data.name,
      email: data.email,
      weight: data.weight,
      dailySportTime: data.dailySportTime,
      gender: data.gender,
      dailyNorm: Number(parseFloat(waterIntake) * 1000),
    };

    const filteredUserData = {};
    if (data.name !== name) filteredUserData.name = data.name;
    if (data.email !== email) filteredUserData.email = data.email;
    if (data.gender !== genderSelector) filteredUserData.gender = data.gender;
    if (data.weight !== weightSelector) filteredUserData.weight = data.weight;
    if (data.dailySportTime !== dailySportTime)
      filteredUserData.dailySportTime = data.dailySportTime;
    if (dailyNorm !== Number(parseFloat(waterIntake) * 1000))
      filteredUserData.dailyNorm = Number(parseFloat(waterIntake) * 1000);

    if (Object.keys(filteredUserData).length === 0) {
      toast.error("Please change the data!");
      return;
    }

    try {
      await settingsSchema.validate(userData, { abortEarly: false });
      await toast.promise(dispatch(updateUser(filteredUserData)).unwrap(), {
        loading: "Updating...",
        success: "Updated profile successfully!",
      });
      onClose(false);
    } catch (error) {
      error.errors.forEach((item) => {
        if (item === "Choose gender") {
          setGenderError(true);
          return;
        }
        if (item === "Min 2 characters") {
          setNameError({ error1: true, error2: false });
          return;
        }
        if (item === "Max 12 characters") {
          setNameError({ error1: false, error2: true });
          return;
        }
        if (item === "Incorrect email") {
          setEmailError(true);
          return;
        }
        if (item === "Weight cannot be negative") {
          setWeightError({ error1: true, error2: false });
          return;
        }
        if (item === "Weight cannot exceed 250 kg") {
          setWeightError({ error1: false, error2: true });
          return;
        }
        if (item === "Workout time cannot be less than 0") {
          setSportTimeError({ error1: true, error2: false });
          return;
        }
        if (item === "Workout time cannot be more than 24") {
          setSportTimeError({ error1: false, error2: true });
          return;
        }
        if (item === "Daily norm cannot be less than 500ml") {
          setDailyNormError({ error1: true, error2: false });
          return;
        }
        if (item === "Daily norm cannot be more than 15000ml") {
          setDailyNormError({ error1: false, error2: true });
          return;
        }
      });
    }
  };

  return (
    <Modal onCloseModal={onClose}>
      <div className={s.modal_settings}>
        <h2 className={s.title_modal}>Setting</h2>
        <SettingsAvatarModal />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.content_box}>
            <div className={s.box}>
              <div className={s.part_content}>
                <div className={s.radio_gender}>
                  <span className={s.radio_title}>{t("sett_your")}</span>
                  <div className={s.radio_group}>
                    <label htmlFor="weight-woman" className={s.radio_label}>
                      <input
                        defaultChecked
                        type="radio"
                        value="female"
                        id="weight-woman"
                        {...register("gender")}
                        className={s.radio_input}
                      />
                      <span className={s.custom_radio}></span> {t("sett_woman")}
                    </label>
                    <label htmlFor="weight-man" className={s.radio_label}>
                      <input
                        type="radio"
                        value="male"
                        id="weight-man"
                        {...register("gender")}
                        className={s.radio_input}
                      />
                      <span className={s.custom_radio}></span> {t("sett_man")}
                    </label>
                  </div>
                </div>
                {genderError && (
                  <span className={s.errors}>{t("sett_gen")}</span>
                )}
                <div className={s.input_box}>
                  <label htmlFor="name" className={s.radio_title}>
                    {t("sett_your_n")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("sett_nadia")}
                    id="name"
                    {...register("name")}
                    className={s.input}
                  />
                  {nameError.error1 && (
                    <span className={s.errors}>{t("sett_min")}</span>
                  )}
                  {nameError.error2 && (
                    <span className={s.errors}>{t("sett_max")}</span>
                  )}
                  <label htmlFor="email" className={s.radio_title}>
                    {t("sett_email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("sett_com")}
                    id="email"
                    {...register("email")}
                    className={s.input}
                  />
                  {emailError && (
                    <span className={s.errors}>{t("sett_inc")}</span>
                  )}
                </div>
                <div className={s.daily_box}>
                  <div className={s.radio_title}>{t("sett_my")}</div>
                  <div className={s.formulas_box}>
                    <div className={s.box_formula}>
                      <p className={s.title_formula}>{t("sett_for_woman")}</p>
                      <div className={s.formula}>V=(M*0,03) + (T*0,4)</div>
                    </div>
                    <div className={s.box_formula}>
                      <p className={s.title_formula}>{t("sett_for_man")}</p>
                      <div className={s.formula}>V=(M*0,04) + (T*0,6)</div>
                    </div>
                  </div>
                  <p className={s.description_formula}>
                    <span className={s.green}>* </span>
                    {t("sett_v")}
                  </p>
                  <span className={s.active_time}>
                    <span className={s.green}>! </span>
                    {t("sett_act")}
                  </span>
                </div>
              </div>
              <div className={s.part_content}>
                <div className={s.user_data}>
                  <div className={s.input_box}>
                    <label htmlFor="user-weight" className={s.user_description}>
                      {t("sett_kilo")}
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      id="user-weight"
                      {...register("weight")}
                      className={s.input}
                    />
                    {weightError.error1 && (
                      <span className={s.errors}>{t("sett_w_neg")}</span>
                    )}
                    {weightError.error2 && (
                      <span className={s.errors}>{t("sett_w_kg")}</span>
                    )}
                    <label htmlFor="time-sport" className={s.user_description}>
                      {t("sett_time")}
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      id="time-sport"
                      {...register("dailySportTime")}
                      className={s.input}
                    />
                    {sportTimeError.error1 && (
                      <span className={s.errors}>{t("sett_w_less")}</span>
                    )}
                    {sportTimeError.error2 && (
                      <span className={s.errors}>{t("sett_w_more")}</span>
                    )}
                  </div>
                  {/* //required water */}
                  <div className={s.result_text}>
                    <label htmlFor="required-water" className={s.title_bold}>
                      {t("sett_req")}
                    </label>
                    <input
                      type="text"
                      id="required-water"
                      className={clsx(s.input, s.green, s.margin)}
                      value={`${waterIntake}`}
                      readOnly
                    />
                    {dailyNormError.error1 && (
                      <span className={s.errors}>{t("sett_d_less")}</span>
                    )}
                    {dailyNormError.error2 && (
                      <span className={s.errors}>{t("sett_d_more")}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={s.bottom_submit} style={{ marginBottom: "40px" }}>
              <SaveButton />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SettingsModal;
