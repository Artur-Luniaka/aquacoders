import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from "./ResetPassForm.module.css";
import { useEffect, useState } from "react";
import sprite from "../../assets/sprite.svg";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import aqua from "../../redux/aqua.js";
import { logOut } from "../../redux/auth/operations/logOutThunk.js";

import { useTranslation } from "react-i18next"; //моє

const validationSchema = Yup.object({
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be maximum 50 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
});

const ResetPassForm = ({ token }) => {
  const { t } = useTranslation(); //моє

  const [showPassword, setShowPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: { password: "", repeatPassword: "" },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((previous) => !previous);
  };

  const onSubmit = async ({ password }) => {
    try {
      await toast.promise(
        aqua.post("/users/reset-password", { password, token }),
        {
          loading: <p>{t("others_res")}</p>,
          success: <p>{t("others_pas")}</p>,
        }
      );
      await toast.promise(dispatch(logOut()).unwrap(), {
        loading: <p>{t("others_logo")}</p>,
        success: <p>{t("others_succ")}</p>,
      });
      navigate("/signin");
    } catch (error) {
      toast.error(
        error.response?.data?.data?.message || "Reset failed. Try again."
      );
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
          <label htmlFor="password" className={s.label}>
            {t("reset_pas")}
          </label>
          <div className={s.password_wrapper}>
            <input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder={t("reset_ent")}
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
              placeholder={t("reset_rep_two")}
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
          {errors.repeatPassword ? (
            <span className={s.error_message}>
              {errors.repeatPassword.message}
            </span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <button className={s.button} type="submit">
          {t("reset_chan")}
        </button>
      </form>
      {!isLoggedIn && (
        <p className={s.paragraph}>
          {t("reset_don")}
          <Link to="/signup" className={s.link}>
            {t("reset_up")}
          </Link>
        </p>
      )}
    </div>
  );
};

export default ResetPassForm;
