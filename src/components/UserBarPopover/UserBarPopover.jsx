import { useState } from "react";
import s from "./UserBarPopover.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import LogOutModal from "../LogOutModal/LogOutModal";
import SettingsModal from "../SettingsModal/SettingsModal";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next"; //моє

const UserBarPopover = ({ dropStatus }) => {
  const { t } = useTranslation(); //моє

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
          <span>{t("sett_title")}</span>
        </button>
        <button className={s.drop_button} type="button">
          <svg className={s.drop_icon}>
            <use href={sprite + "#icon-reload-alt"} />
          </svg>
          <span className={s.drop_span}>
            <Link to="/reset-password">{t("others_set")}</Link>
          </span>
        </button>
        <button
          className={`${s.drop_button} ${s.drop_button_opacity}`}
          type="button"
          onClick={openModal}
        >
          <svg className={s.drop_icon}>
            <use href={sprite + "#icon-log-out"} />
          </svg>
          <span>{t("home_log")}</span>
        </button>
      </div>
      {showLogOutModal && <LogOutModal onClose={closeModal} />}
      {isModalOpen && <SettingsModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default UserBarPopover;
