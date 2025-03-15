import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal/Modal.jsx";
import SaveButton from "../../components/SaveButton/SaveButton.jsx";
import s from "./SettingsAvatarModal.module.css";
import { selectAvatarUrl } from "../../redux/auth/selectors.js";
import avatarPlaceholder from "../../assets/avatar.png";
import sprite from "../../assets/sprite.svg";
import { uploadAvatar } from "../../redux/auth/operations/editAvatar.js";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object({
  avatar: Yup.mixed()
    .test("fileSize", "File is too large", (value) => {
      return !value || (value.length > 0 && value[0].size <= 2 * 1024 * 1024);
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        !value ||
        (value.length > 0 &&
          ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type))
      );
    }),
});

const SettingsAvatarModal = () => {
  const avatarUrlFromStore = useSelector(selectAvatarUrl);
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(
    avatarUrlFromStore || avatarPlaceholder
  );

  const { register, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("avatar", file);
      dispatch(uploadAvatar(formData));

      setValue("avatar", file);
    }
  };

  return (
    <form method="post" encType="multipart/form-data" className={s.form}>
      <div className={s.upload_box}>
        <img className={s.avatar} src={imagePreview} alt="Avatar" />

        <label htmlFor="file-upload">
          <span className={s.icon_box}>
            <svg className={s.icon} width="18" height="18">
              <use href={sprite + "#icon-upload-photo"}></use>
            </svg>
            <span className={s.upload_text}>Upload a photo</span>
          </span>
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          className={s.input_hide_upload}
          {...register("photo")}
          onChange={handlePhotoChange}
        />
      </div>
    </form>
  );
};
export default SettingsAvatarModal;
