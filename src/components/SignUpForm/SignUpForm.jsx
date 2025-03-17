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

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be maximum 50 characters")
    .required("Password is required"),
  repeatPassword: Yup.string().required("Repeat Password is required"),
});

const SignUpForm = () => {
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
        loading: "Signing up...",
        success: "Account created successfully!",
      });
      navigate("/signin");
    } catch (e) {
      toast.error(e.data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.input_group}>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`${s.input} ${errors.email ? s.error_input : ""}`}
          />
          <span className={s.error_message}>{errors.password?.message}</span>
        </div>
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
          <span className={s.error_message}>{errors.password?.message}</span>
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
          <span className={s.error_message}>{errors.password?.message}</span>
        </div>
        <button className={s.button} type="submit">
          Sign Up
        </button>
      </form>
      <p className={s.paragraph}>
        Already have an account?{" "}
        <Link to="/signin" className={s.link}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
