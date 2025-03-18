import toast from "react-hot-toast";
import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";
import { useDispatch } from "react-redux";

import { deleteWaterEntry } from "../../redux/water/operations/waterOperations.js";
import { changeMonthlyStats } from "../../redux/water/slice.js";

import { useTranslation } from "react-i18next"; //моє

const DeleteEntryModal = ({ onCloseModal, entryId }) => {
  const { t } = useTranslation(); //моє

  const dispatch = useDispatch();

  const extractDate = (isoString) => {
    return isoString.split("T")[0];
  };

  const handleDelete = async () => {
    try {
      await toast.promise(dispatch(deleteWaterEntry(entryId._id)).unwrap(), {
        loading: <p>{t("others_proc")}</p>,
        success: <p>{t("others_suc")}</p>,
      });
      onCloseModal();
      dispatch(
        changeMonthlyStats({
          date: extractDate(entryId.date),
          stats: -entryId.volume,
        })
      );
    } catch (e) {
      toast.error(e.data.message || "Something went wrong. Please try again.");
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
