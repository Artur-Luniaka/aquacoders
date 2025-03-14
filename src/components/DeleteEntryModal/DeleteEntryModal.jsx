/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectEntryId } from "../../redux/water/selectors.js";

const DeleteEntryModal = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const entryId = useSelector(selectEntryId);

  const handleDelete = async () => {
    try {
      await toast.promise(dispatch(deleteWater({ id: entryId })).unwrap(), {
        loading: "Processing...",
        success: "Successfully deleted entry!",
        error: "Failed to delete entry. Try again!",
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
