import UserBarPopover from "../UserBarPopover/UserBarPopover.jsx";

import s from "./UserBar.module.css";
import sprite from "../../assets/sprite.svg";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectAvatarURL } from "../../redux/user/selectors.js";

const UserBar = () => {
  const [dropStatus, setDropStatus] = useState(false);
  const userName = "Nadia";
  const userURL = useSelector(selectAvatarURL);

  const handleClick = () => {
    setDropStatus((prev) => !prev);
  };

  useEffect(() => {
    const handleBodyClick = (e) => {
      e.stopPropagation();
      setDropStatus(false);
    };

    if (dropStatus) {
      document.body.addEventListener("click", handleBodyClick);
    }

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [dropStatus]);

  return (
    <section className={s.drop_down_container}>
      <h2 className={s.current_name}>
        Hello<span>, {userName.slice(0, 14)}!</span>
      </h2>
      <div onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={s.menu_container}
          onClick={handleClick}
        >
          <span>{userName.slice(0, 14)}</span>
          <span className={s.user_avatar_container}>
            <img className={s.user_avatar} src={userURL} alt={userName} />
          </span>
          <span
            className={clsx(s.button_down, dropStatus && s.button_down_rotate)}
          >
            <svg className={`${s.icon_arrow}`}>
              <use href={sprite + "#icon-down-arrow"} />
            </svg>
          </span>
        </button>
        <UserBarPopover dropStatus={dropStatus} />
      </div>
    </section>
  );
};

export default UserBar;
