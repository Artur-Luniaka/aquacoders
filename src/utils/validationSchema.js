import * as Yup from "yup";

export const settingsSchema = Yup.object().shape({
  name: Yup.string()
    .required("The name is required")
    .min(3, "Min 3 charecters")
    .max(11, "Max 11 charecters"),
  email: Yup.string().email("  Incorrect email").required("Email is required"),
  weight: Yup.number()
    .positive("Weight should be a positive number")
    .integer("Weight should be an integer number")
    .required("Weight is required"),
  sportTime: Yup.number()
    .min(0, "Work out time cannot be less than 0")
    .max(24, "Work out time cannot be more than 24")
    .required("Specify the time for sports activities"),
  gender: Yup.string()
    .oneOf(["man", "woman"], "Choose gender")
    .required("Gender is required"),
  photo: Yup.mixed().test("fileSize", "File is too large", (value) => {
    return !value || (value.length > 0 && value[0].size <= 2 * 1024 * 1024);
  }),
});
