import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from "./SignUpForm.module.css";
import { useEffect, useState } from "react";
import sprite from "../../assets/sprite.svg";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      toast.error(error.message || "Registration failed. Try again.");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={s.form}
      >
        <div className={s.input_group}>
          <label
            htmlFor="email"
            className={s.label}
          >
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`${s.input} ${errors.email ? s.error_input : ""}`}
          />
          {errors.email ? (
            <span className={s.error_message}>{errors.email.message}</span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <div className={s.input_group}>
          <label
            htmlFor="password"
            className={s.label}
          >
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
                  href={`${sprite}#${showPassword ? "icon-eye" : "icon-eye-off"}`}
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
          <label
            htmlFor="repeatPassword"
            className={s.label}
          >
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
                  href={`${sprite}#${showPassword ? "icon-eye" : "icon-eye-off"}`}
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
        <button
          className={s.button}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className={s.paragraph}>
        Already have an account?{" "}
        <Link
          to="/signin"
          className={s.link}
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
