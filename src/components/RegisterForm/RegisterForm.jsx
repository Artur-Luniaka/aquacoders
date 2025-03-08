import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from "./RegisterForm.module.css";
import { useState } from "react";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
});

const initialValues = { email: "", password: "", repeatPassword: "" };

export const RegisterForm = () => {
  const [data, setData] = useState(initialValues);
  const navigate = useNavigate();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors, isSubmitting },
  //   } = useForm({
  //     resolver: yupResolver(validationSchema),
  //   });
  function handleChange({ currentTarget: { name, value } }) {
    switch (name) {
      case "email":
        setData((previous) => ({
          ...previous,
          email: value,
        }));
        break;
      case "password":
        setData((previous) => ({
          ...previous,
          password: value,
        }));
        break;
      case "repeatPassword":
        setData((previous) => ({
          ...previous,
          repeatPassword: value,
        }));
        break;
      default:
        setData(initialValues);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(data);
      setData(initialValues);

      //   const response = await;
      //   if (response.token) {
      //     navigate("/tracker");
      //   }
    } catch (error) {
      toast.error(error.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.aqua}>AquaTrack</h2>
      <h2 className={s.title}>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className={s.form}
      >
        <label className={s.label}>
          Email
          <input
            value={data.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            className={s.input}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            value={data.password}
            name="password"
            placeholder="Enter your password"
            type="password"
            className={s.input}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Repeat password
          <input
            value={data.repeatPassword}
            name="repeatPassword"
            placeholder="Repeat password"
            type="password"
            className={s.input}
            onChange={handleChange}
          />
        </label>
        <button
          className={s.button}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className={s.paragraph}>
        <p>
          Already have account?{" "}
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
