import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Box, Button, TextField, Typography } from "@mui/material";
import s from "./RegisterForm.module.css";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await /* ваш API виклик для реєстрації */;
      if (response.token) {
        navigate("/tracker");
      }
    } catch (error) {
      toast.error(error.message || "Registration failed. Try again.");
    }
  };

  return (
    <Box className={s.container}>
      <Typography
        variant="h5"
        gutterBottom
        className={s.title}
      >
        Sign Up
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={s.form}
      >
        <TextField
          label="Email"
          {...register("email")}
          fullWidth
          variant="outlined"
          className={s.input}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          {...register("password")}
          fullWidth
          variant="outlined"
          className={s.input}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Repeat Password"
          type="password"
          {...register("repeatPassword")}
          fullWidth
          variant="outlined"
          className={s.input}
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword?.message}
        />
        <Button
          className={s.button}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};
