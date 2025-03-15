/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";
import { useDispatch } from "react-redux";
import { deleteWaterEntry } from "../../redux/water/operations/waterOperations.js";

const DeleteEntryModal = ({ onCloseModal, entryId }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteWaterEntry(entryId)); //
      toast.success("Entry successfully deleted!");
      onCloseModal();
    } catch (error) {
      toast.error("Failed to delete entry. Try again!");
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
          <button
            className={s.delete}
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className={s.cancel}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEntryModal;
