import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from "./SendEmailReset.module.css";
import { useEffect } from "react";

import { selectEmail, selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { useSelector } from "react-redux";
import aqua from "../../redux/aqua.js";

import { useTranslation } from "react-i18next"; //моє

const SendEmailReset = () => {
  const { t } = useTranslation(); //моє

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(
      Yup.object({
        email: Yup.string().email(t("reset_in")).required(t("reset_em")),
      })
    ),
    defaultValues: { email: email || "" },
  });
  useEffect(() => {
    if (email) {
      reset({ email });
    }
  }, [email, reset]);
  const onSubmit = async (data) => {
    try {
      await toast.promise(aqua.post("/users/send-reset-email", data), {
        loading: <p>{t("others_sen")}</p>,
        success: <p>{t("others_suc_sen")}</p>,
      });

      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.data?.message || "Sending failed. Try again.";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>{t("reset_title")}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.input_group}>
          <label htmlFor="email" className={s.label}>
            {t("reset_enter")}
          </label>
          <input
            {...register("email")}
            id="email"
            type="text"
            disabled={email}
            placeholder={t("reset_enter")}
            className={`${s.input} ${errors.email ? s.error_input : ""}`}
          />
          {errors.email ? (
            <span className={s.error_message}>{errors.email.message}</span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <button className={s.button} type="submit">
          {t("reset_send")}
        </button>
      </form>
      {!isLoggedIn && (
        <p className={s.paragraph}>
          {t("reset_don")}{" "}
          <Link to="/signup" className={s.link}>
            {t("reset_up")}
          </Link>
        </p>
      )}
    </div>
  );
};

export default SendEmailReset;
