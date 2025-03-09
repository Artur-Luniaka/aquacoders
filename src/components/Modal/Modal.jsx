import { useEffect } from "react";
import s from "./Modal.module.css";
import sprite from "../../assets/sprite.svg";

const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onCloseModal]);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div onClick={onBackdropClick} className={s.backdrop}>
      <div className={s.modal}>
        <button onClick={onCloseModal} className={s.close_btn} type="button">
          <svg className={s.icon}>
            <use href={sprite + "#icon-closed"}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
