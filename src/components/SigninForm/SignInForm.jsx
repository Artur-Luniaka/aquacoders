import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import s from "./SignInForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";

const SignInForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className={s.signinContainer}>
      <h2 className={s.signinTitle}>Sign In</h2>
      <form className={s.signinForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputGroup}>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={s.input}
            {...register("email")}
          />
          {errors.email && (
            <p className={s.errorText}>{errors.email.message}</p>
          )}
        </div>
        <div className={s.inputGroup}>
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={s.input}
            {...register("password")}
          />
          {errors.password && (
            <p className={s.errorText}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className={s.signinButton}>
          Sign In
        </button>
      </form>
      <p className={s.signupText}>
        Don’t have an account?{" "}
        <a href="/signup" className={s.signupLink}>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default SignInForm;
