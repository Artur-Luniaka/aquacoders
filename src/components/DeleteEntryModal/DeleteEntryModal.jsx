import toast from "react-hot-toast";
import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";

const DeleteEntryModal = ({ onCloseModal }) => {
  const handleDelete = () => {
    try {
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
