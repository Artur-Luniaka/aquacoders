import { useState } from "react";
import s from "./UserBarPopover.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import LogOutModal from "../LogOutModal/LogOutModal";
import SettingsModal from "../SettingsModal/SettingsModal";

const UserBarPopover = ({ dropStatus }) => {
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setShowLogOutModal(true);
  };

  const closeModal = () => {
    setShowLogOutModal(false);
  };

  return (
    <>
      <div className={clsx(s.drop_menu, dropStatus && s.drop_menu_open)}>
        <button
          onClick={() => setIsModalOpen(true)}
          className={s.drop_button}
          type="button"
        >
          <svg className={s.drop_icon}>
            <use href={sprite + "#icon-settings"} />
          </svg>
          <span>Setting</span>
        </button>
        <button
          className={`${s.drop_button} ${s.drop_button_opacity}`}
          type="button"
          onClick={openModal}
        >
          <svg className={s.drop_icon}>
            <use href={sprite + "#icon-log-out"} />
          </svg>
          <span>Log out</span>
        </button>
      </div>
      {showLogOutModal && <LogOutModal onClose={closeModal} />}
      {isModalOpen && <SettingsModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default UserBarPopover;
