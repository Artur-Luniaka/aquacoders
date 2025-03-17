import toast from "react-hot-toast";
import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";
import { useDispatch } from "react-redux";

import { deleteWaterEntry } from "../../redux/water/operations/waterOperations.js";
import { changeMonthlyStats } from "../../redux/water/slice.js";

const DeleteEntryModal = ({ onCloseModal, entryId }) => {
  const dispatch = useDispatch();

  const extractDate = (isoString) => {
    return isoString.split("T")[0];
  };

  const handleDelete = async () => {
    try {
      await toast.promise(dispatch(deleteWaterEntry(entryId._id)).unwrap(), {
        loading: "Processing...",
        success: "Successfully deleted entry!",
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
        <h2 className={s.title}>Delete entry</h2>
        <p className={s.text}>Are you sure you want to delete the entry?</p>
        <div className={s.buttons_container}>
          <button className={s.delete} onClick={handleDelete}>
            Delete
          </button>
          <button className={s.cancel} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEntryModal;
