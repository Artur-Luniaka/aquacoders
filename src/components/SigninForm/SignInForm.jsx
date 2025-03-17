import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/auth/operations/signInThunk";
import toast from "react-hot-toast";
import s from "./SignInForm.module.css";
import sprite from "../../assets/sprite.svg";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next"; //моє

const SignInForm = () => {
  const { t } = useTranslation(); //моє

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(<p>{t("in_val_inv")}</p>)
      .required(<p>{t("in_val_em")}</p>),
    password: Yup.string().required(<p>{t("in_val_pas")}</p>),
  });

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    try {
      await toast.promise(dispatch(signIn(data)).unwrap(), {
        loading: <p>{t("in_sig_in")}</p>,
        success: <p>{t("in_suc_sig")}</p>,
      });
    } catch (e) {
      toast.error(e.data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={s.signin_container}>
      <h2 className={s.signin_title}>{t("in_title")}</h2>
      <form
        className={s.signin_form}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={s.input_group}>
          <label htmlFor="email" className={s.label}>
            {t("in_email")}
          </label>
          <input
            type="email"
            id="email"
            placeholder={t("in_email_enter")}
            className={errors.email ? `${s.input} ${s.input_error}` : s.input}
            {...register("email")}
          />
          {errors.email && (
            <span className={s.error_text}>{errors.email.message}</span>
          )}
        </div>
        <div className={s.input_group}>
          <label htmlFor="password" className={s.label}>
            {t("in_pass")}
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder={t("in_pass_enter")}
            className={errors.email ? `${s.input} ${s.input_error}` : s.input}
            {...register("password")}
          />
          <button
            className={s.icon_btn}
            onClick={togglePasswordVisibility}
            type="button"
          >
            <svg className={s.icon}>
              <use
                href={`${sprite}#${showPassword ? "icon-eye" : "icon-eye-off"}`}
              />
            </svg>
          </button>
          {errors.password && (
            <span className={s.error_text}>{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className={s.signin_button}>
          {t("in_title")}
        </button>
      </form>
      <div className={s.signup_box}>
        <p className={s.signup_text}>{t("reset_don")}</p>
        <Link to="/signup" className={s.signup_link}>
          {t("up_title")}
        </Link>
      </div>
      <Link to="/reset-password" className={s.signup_link}>
        {t("reset_title")}
      </Link>
    </div>
  );
};

export default SignInForm;
