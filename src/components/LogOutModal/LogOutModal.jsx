import Modal from "../Modal/Modal.jsx";
import s from "./LogOutModal.module.css";

const LogOutModal = () => {
  return (
    <Modal>
      <div className={s.container}>
        <h2 className={s.title}>Log out</h2>
        <p className={s.text}>Do you really want to leave?</p>
        <div className={s.buttons_container}>
        <button className={s.logout}>Log Out</button>
        <button className={s.cancel}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;