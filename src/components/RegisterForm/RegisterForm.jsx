import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from "./RegisterForm.module.css";
import { useEffect, useState } from "react";
import sprite from "../../assets/sprite.svg";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
});

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
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
        <label className={s.label}>
          Email
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className={`${s.input} ${errors.email ? s.errorInput : ""}`}
          />
          <span className={s.errorMessage}>{errors.email?.message}</span>
        </label>

        <label className={s.label}>
          Password
          <div className={s.inputContainer}>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className={`${s.input} ${errors.password ? s.errorInput : ""}`}
            />
            <button
              className={s.iconBtn}
              onClick={togglePasswordVisibility}
              type="button"
            >
              {showPassword ? (
                <FaRegEyeSlash className={s.icon} />
              ) : (
                <FaRegEye className={s.icon} />
              )}
            </button>
          </div>
          <span className={s.errorMessage}>{errors.password?.message}</span>
        </label>

        <label className={s.label}>
          Repeat password
          <div className={s.inputContainer}>
            <input
              {...register("repeatPassword")}
              type={showPassword ? "text" : "password"}
              placeholder="Repeat password"
              className={`${s.input} ${errors.repeatPassword ? s.errorInput : ""}`}
            />
            <button
              className={s.iconBtn}
              onClick={togglePasswordVisibility}
              type="button"
            >
              {showPassword ? (
                <FaRegEyeSlash className={s.icon} />
              ) : (
                <FaRegEye className={s.icon} />
              )}
            </button>
          </div>
          <span className={s.errorMessage}>
            {errors.repeatPassword?.message}
          </span>
        </label>

        <button
          className={s.button}
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <div>
        <p className={s.paragraph}>
          Already have an account?{" "}
          <Link
            to="/signIn"
            className={s.link}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
