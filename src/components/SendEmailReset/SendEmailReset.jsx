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

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const SendEmailReset = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(validationSchema),
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
        loading: "Sending email...",
        success: "Successfully sent reset email!",
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
      <h2 className={s.title}>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.input_group}>
          <label htmlFor="email" className={s.label}>
            Enter Your Account Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="text"
            disabled={email}
            placeholder="Enter your email"
            className={`${s.input} ${errors.email ? s.error_input : ""}`}
          />
          {errors.email ? (
            <span className={s.error_message}>{errors.email.message}</span>
          ) : (
            <span className={s.error_placeholder}></span>
          )}
        </div>
        <button className={s.button} type="submit">
          Send reset Email
        </button>
      </form>
      {!isLoggedIn && (
        <p className={s.paragraph}>
          Don't have an account?{" "}
          <Link to="/signup" className={s.link}>
            Sign Up
          </Link>
        </p>
      )}
    </div>
  );
};

export default SendEmailReset;
