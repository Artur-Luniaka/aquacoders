import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../components/Modal/Modal.jsx";
import SaveButton from "../../components/SaveButton/SaveButton.jsx";
import s from "./SettingsModal.module.css";
import clsx from "clsx";
import { updateUser } from "../../redux/auth/operations/editUserInfoThunk.js";
import { settingsSchema } from "../../utils/validationSchema.js";

import SettingsAvatarModal from "../SettingsAvatarModal/SettingsAvatarModal.jsx";

import { useTranslation } from "react-i18next"; //моє

const SettingsModal = () => {
  const { t } = useTranslation(); //моє

  const dispatch = useDispatch();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      weight: "",
      sportTime: "",
      gender: "",
      dailyNorm: "",
    },
    mode: "onChange",
  });

  const weight = watch("weight") || 0;
  const sportTime = watch("sportTime") || 0;
  const gender = watch("gender");
  const [waterIntake, setWaterIntake] = useState(1.5);

  useEffect(() => {
    const calculateWaterIntake = () => {
      if (!weight || !sportTime || !gender) return 1.5;
      return gender === "female"
        ? (weight * 0.03 + sportTime * 0.4).toFixed(1)
        : (weight * 0.04 + sportTime * 0.6).toFixed(1);
    };

    setWaterIntake(calculateWaterIntake());
  }, [weight, sportTime, gender]);

  const onSubmit = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        weight: data.weight,
        sportTime: data.sportTime,
        gender: data.gender,
        dailyNorm: Number(parseFloat(waterIntake) * 1000),
      };
      console.log("🔍 userData перед відправкою:", userData);
      try {
        await settingsSchema.validate(userData, { abortEarly: false });
        console.log("✅ Валідація пройдена:", userData);
      } catch (error) {
        console.error("❌ Помилки валідації:", error.errors);
      }
      dispatch(updateUser(userData));
    } catch (error) {
      console.log("Validation errors:", error.errors);
    }
  };

  return (
    <Modal>
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
                    <label htmlFor="time-sport" className={s.user_description}>
                      {t("sett_time")}
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      id="time-sport"
                      {...register("sportTime")}
                      className={s.input}
                    />
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
