/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectEntryId } from "../../redux/water/selectors.js";
import { deleteWaterEntry } from "../../redux/water/operations/waterOperations.js";

import { useTranslation } from "react-i18next"; //моє

const DeleteEntryModal = ({ onCloseModal }) => {
  const { t } = useTranslation(); //моє

  const dispatch = useDispatch();
  const entryId = useSelector(selectEntryId);

  const handleDelete = async () => {
    try {
      await toast.promise(dispatch(deleteWaterEntry(entryId)).unwrap(), {
        loading: <p>{t("others_proc")}</p>,
        success: <p>{t("others_suc")}</p>,
        error: <p>{t("others_fail")}</p>,
      });
      onCloseModal();
    } catch (e) {
      toast.error(e.message || "Something went wrong. Please try again.");
    }
  };

  const handleCancel = () => {
    onCloseModal();
  };
  return (
    <Modal onCloseModal={onCloseModal}>
      <div className={s.container}>
        <h2 className={s.title}>{t("del_title")}</h2>
        <p className={s.text}>{t("del_are")}</p>
        <div className={s.buttons_container}>
          <button className={s.delete} onClick={handleDelete}>
            {t("del_del")}
          </button>
          <button className={s.cancel} onClick={handleCancel}>
            {t("del_can")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEntryModal;
