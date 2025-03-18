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
import GoogleAuthButton from "../GoogleAuthButton/GoogleAuthButton.jsx";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignInForm = () => {
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
        loading: "Signing in...",
        success: "Successfully signed in!",
      });
    } catch (e) {
      toast.error(e.data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={s.signin_container}>
      <h2 className={s.signin_title}>Sign In</h2>
      <form
        className={s.signin_form}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={s.input_group}>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={errors.email ? `${s.input} ${s.input_error}` : s.input}
            {...register("email")}
          />
          {errors.email && (
            <span className={s.error_text}>{errors.email.message}</span>
          )}
        </div>
        <div className={s.input_group}>
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
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
          Sign In
        </button>
      </form>
      <div className={s.signup_box}>
        <p className={s.signup_text}>Don’t have an account?</p>
        <Link to="/signup" className={s.signup_link}>
          Sign Up
        </Link>
      </div>
      <GoogleAuthButton />
      <Link to="/reset-password" className={s.signup_link}>
        Reset Password
      </Link>
    </div>
  );
};

export default SignInForm;
