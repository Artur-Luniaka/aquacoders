import Modal from "../Modal/Modal.jsx";
import s from "./DeleteEntryModal.module.css";

const DeleteEntryModal = () => {
  return (
    <Modal>
      <div className={s.container}>
        <h2 className={s.title}>Delete entry</h2>
        <p className={s.text}>Are you sure you want to delete the entry?</p>
        <div className={s.buttons_container}>
        <button className={s.delete} onClick={onDelete}>
            Delete
          </button>
          <button className={s.cancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEntryModal;