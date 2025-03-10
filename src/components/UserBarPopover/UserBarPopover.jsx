import s from "./UserBarPopover.module.css";
import sprite from "../../assets/sprite.svg";

import clsx from "clsx";

const UserBarPopover = ({ dropStatus }) => {
  return (
    <div className={clsx(s.drop_menu, dropStatus && s.drop_menu_open)}>
      <button className={s.drop_button} type="button">
        <svg className={`${s.drop_icon}`}>
          <use href={sprite + "#icon-settings"} />
        </svg>
        <span>Setting</span>
      </button>
      <button
        className={`${s.drop_button} ${s.drop_button_opacity}`}
        type="button"
      >
        <svg className={`${s.drop_icon}`}>
          <use href={sprite + "#icon-log-out"} />
        </svg>
        <span>Log out</span>
      </button>
    </div>
  );
};

export default UserBarPopover;
