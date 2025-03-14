import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from "./ResetPassForm.module.css";
import { useEffect, useState } from "react";
import sprite from "../../assets/sprite.svg";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { useSelector } from "react-redux";
import aqua from "../../redux/aqua.js";

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
  const [showPassword, setShowPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((previous) => !previous);
  };

  const onSubmit = async ({ password }) => {
    try {
      await toast.promise(
        aqua.post("/users/reset-password", { password, token }),
        {
          loading: "Reset password...",
          success: "Password was successfully reset!",
        }
      );
      await aqua.post("/users/logout");
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
      <h2 className={s.title}>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.input_group}>
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <div className={s.password_wrapper}>
            <input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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
            Repeat password
          </label>
          <div className={s.password_wrapper}>
            <input
              id="repeatPassword"
              {...register("repeatPassword")}
              type={showPassword ? "text" : "password"}
              placeholder="Repeat password"
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
          {errors.password ? (
            <span className={s.error_message}>
              {errors.repeatPassword.message}
            </span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <button className={s.button} type="submit">
          Change Password
        </button>
      </form>
      {!isLoggedIn && (
        <p className={s.paragraph}>
          Don't have an account?
          <Link to="/signup" className={s.link}>
            Sign Up
          </Link>
        </p>
      )}
    </div>
  );
};

export default ResetPassForm;
