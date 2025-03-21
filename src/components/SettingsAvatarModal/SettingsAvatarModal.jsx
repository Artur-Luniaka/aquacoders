import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAvatarUrl } from "../../redux/auth/selectors.js";
import { uploadAvatar } from "../../redux/auth/operations/editAvatar.js";
import avatarPlaceholder from "../../assets/avatar.png";
import sprite from "../../assets/sprite.svg";
import { useTranslation } from "react-i18next"; //моє
import s from "./SettingsAvatarModal.module.css";
import toast from "react-hot-toast";

const SettingsAvatarModal = () => {
  const { t } = useTranslation(); //моє

  const avatarUrlFromStore = useSelector(selectAvatarUrl);
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(
    avatarUrlFromStore || avatarPlaceholder
  );

  const { register, setValue } = useForm();

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Something went wrong!");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      await toast.promise(dispatch(uploadAvatar(formData)).unwrap(), {
        loading: t("sett_pending"),
        success: t("sett_success"),
      });
    } catch (error) {
      toast.error(error?.message || "Failed to upload avatar");
    }

    setValue("avatar", file);

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  };

  return (
    <form method="post" encType="multipart/form-data" className={s.form}>
      <div className={s.upload_box}>
        <img className={s.avatar} src={imagePreview} alt="Avatar" />
        <label htmlFor="file-upload" className={s.label}>
          <span className={s.icon_box}>
            <svg className={s.icon} width="18" height="18">
              <use href={`${sprite}#icon-upload-photo`}></use>
            </svg>
            <span className={s.upload_text}>{t("sett_upload")}</span>
          </span>
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          className={s.input_hide_upload}
          {...register("avatar")}
          onChange={handlePhotoChange}
        />
      </div>
    </form>
  );
};

export default SettingsAvatarModal;
