import * as Yup from "yup";

export const settingsSchema = Yup.object().shape({
  name: Yup.string()
    .required("The name is required")
    .min(2, "Min 2 characters")
    .max(12, "Max 12 characters"),
  email: Yup.string().email("Incorrect email").required("Email is required"),
  weight: Yup.number()
    .min(0, "Weight cannot be negative")
    .max(250, "Weight cannot exceed 250 kg")
    .required("Weight is required"),
  sportTime: Yup.number()
    .min(0, "Workout time cannot be less than 0")
    .max(24, "Workout time cannot be more than 24")
    .required("Specify the time for sports activities"),
  gender: Yup.string()
    .oneOf(["male", "female", "none"], "Choose gender")
    .required("Gender is required"),
  dailyNorm: Yup.number()
    .min(500, "Daily norm cannot be less than 500ml")
    .max(15000, "Daily norm cannot be more than 15000ml")
    .required("Daily norm is required"),
});
