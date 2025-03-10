import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import s from "./SignInForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import sprite from "../../assets/sprite.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
    console.log(data);
  };

  return (
    <div className={s.signin_container}>
      <h2 className={s.signin_title}>Sign In</h2>
      <form className={s.signin_form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={s.input_group}>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={errors.email ? `${s.input} ${s.inputError}` : s.input}
            {...register("email")}
          />
          {errors.email ? (
            <span className={s.error_text}>{errors.email.message}</span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <div className={s.input_group}>
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <div className={s.password_wrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className={errors.password ? `${s.input} ${s.inputError}` : s.input}
              {...register("password")}
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
            <span className={s.error_text}>{errors.password.message}</span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <button type="submit" className={s.signin_button}>
          Sign In
        </button>
      </form>
      <p className={s.signup_text}>
        Don’t have an account?{" "}
        <a href="/signup" className={s.signup_link}>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default SignInForm;

