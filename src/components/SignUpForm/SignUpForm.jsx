import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from "./SignUpForm.module.css";
import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations/signUpThunk";

import { useTranslation } from "react-i18next"; //моє

const SignUpForm = () => {
  const { t } = useTranslation(); //моє

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(<p>{t("in_val_inv")}</p>)
      .required(<p>{t("in_val_em")}</p>),
    password: Yup.string()
      .min(5, <p>{t("up_val_l")}</p>)
      .max(50, <p>{t("up_val_max")}</p>)
      .required(<p>{t("in_val_pas")}</p>),
    repeatPassword: Yup.string().required(<p>{t("up_val_rep")}</p>),
  });

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((previous) => !previous);
  };

  const onSubmit = async ({ email, password, repeatPassword }) => {
    if (password !== repeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await toast.promise(dispatch(signUp({ email, password })).unwrap(), {
        loading: <p>{t("up_s_up")}</p>,
        success: <p>{t("up_ac_cr")}</p>,
      });
      navigate("/signin");
    } catch (e) {
      toast.error(e.data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>{t("up_title")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.input_group}>
          <label htmlFor="email" className={s.label}>
            {t("up_email")}
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder={t("in_email_enter")}
            className={`${s.input} ${errors.email ? s.error_input : ""}`}
          />
          {errors.email ? (
            <span className={s.error_message}>{errors.email.message}</span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <div className={s.input_group}>
          <label htmlFor="password" className={s.label}>
            {t("up_pass")}
          </label>
          <div className={s.password_wrapper}>
            <input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder={t("in_pass_enter")}
              className={`${s.input} ${errors.password ? s.error_input : ""}`}
            />
            <button
              className={s.icon_btn}
              onClick={togglePasswordVisibility}
              type="button"
            >
              <svg className={s.icon}>
                <use
                  href={`${sprite}#${
                    showPassword ? "icon-eye" : "icon-eye-off"
                  }`}
                />
              </svg>
            </button>
          </div>
          {errors.password ? (
            <span className={s.error_message}>{errors.password.message}</span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <div className={s.input_group}>
          <label htmlFor="repeatPassword" className={s.label}>
            {t("reset_rep")}
          </label>
          <div className={s.password_wrapper}>
            <input
              id="repeatPassword"
              {...register("repeatPassword")}
              type={showPassword ? "text" : "password"}
              placeholder={t("up_repeat")}
              className={`${s.input} ${
                errors.repeatPassword ? s.error_input : ""
              }`}
            />
            <button
              className={s.icon_btn}
              onClick={togglePasswordVisibility}
              type="button"
            >
              <svg className={s.icon}>
                <use
                  href={`${sprite}#${
                    showPassword ? "icon-eye" : "icon-eye-off"
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>
        <button className={s.button} type="submit">
          {t("up_title")}
        </button>
      </form>
      <p className={s.paragraph}>
        {t("up_already")}{" "}
        <Link to="/signin" className={s.link}>
          {t("in_title")}
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
