import Modal from "../Modal/Modal.jsx";
import s from "./LogOutModal.module.css";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logOut } from "../../redux/auth/operations/logOutThunk";

import { useTranslation } from "react-i18next"; //моє

const LogOutModal = ({ onClose }) => {
  const { t } = useTranslation(); //моє

  const dispatch = useDispatch();

  const handleLogOut = () => {
    toast.promise(dispatch(logOut()).unwrap(), {
      loading: <p>{t("log_out")}</p>,
      success: <p>{t("log_suc")}</p>,
      error: <p>{t("log_error")}</p>,
    });
  };

  return (
    <Modal onCloseModal={onClose}>
      <div className={s.container}>
        <h2 className={s.title}>{t("log_title")}</h2>
        <p className={s.text}>{t("log_do")}</p>
        <div className={s.buttons_container}>
          <button className={s.logout} onClick={handleLogOut}>
            {t("log_log")}
          </button>
          <button className={s.cancel} onClick={onClose}>
            {t("log_can")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
