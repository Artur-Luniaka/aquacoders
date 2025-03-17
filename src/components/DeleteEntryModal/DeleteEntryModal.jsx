import toast from "react-hot-toast";
import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";
import { useDispatch } from "react-redux";

import { deleteWaterEntry } from "../../redux/water/operations/waterOperations.js";

<<<<<<< HEAD
import { useTranslation } from "react-i18next"; //моє

const DeleteEntryModal = ({ onCloseModal }) => {
  const { t } = useTranslation(); //моє

=======
const DeleteEntryModal = ({ onCloseModal, entryId }) => {
>>>>>>> main
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      await toast.promise(dispatch(deleteWaterEntry(entryId)).unwrap(), {
<<<<<<< HEAD
        loading: <p>{t("others_proc")}</p>,
        success: <p>{t("others_suc")}</p>,
        error: <p>{t("others_fail")}</p>,
=======
        loading: "Processing...",
        success: "Successfully deleted entry!",
>>>>>>> main
      });
      onCloseModal();
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
<<<<<<< HEAD
            {t("del_del")}
          </button>
          <button className={s.cancel} onClick={handleCancel}>
            {t("del_can")}
=======
            Delete
          </button>
          <button className={s.cancel} onClick={handleCancel}>
            Cancel
>>>>>>> main
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEntryModal;
