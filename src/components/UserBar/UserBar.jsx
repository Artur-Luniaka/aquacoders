import UserBarPopover from "../UserBarPopover/UserBarPopover.jsx";

import s from "./UserBar.module.css";
import sprite from "../../assets/sprite.svg";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectAvatarURL } from "../../redux/user/selectors.js";

const UserBar = () => {
  const [dropStatus, setDropStatus] = useState(false);
  const [showFullName, setShowFullName] = useState(false);

  const userName = "Александрополиский Величавенко12345";
  const userURL = useSelector(selectAvatarURL);

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

  const handleMouseHoverEnter = () => {
    if (userName.length > 10) {
      setShowFullName(true);
    }
  };

  const handleMouseHoverLeave = () => {
    if (userName.length > 10) {
      setShowFullName(false);
    }
  };

  return (
    <section className={s.drop_down_container}>
      <h2
        className={s.current_name}
        onMouseEnter={handleMouseHoverEnter}
        onMouseLeave={handleMouseHoverLeave}
      >
        Hello
        <span>
          ,{" "}
          {userName.length > 10
            ? `${userName.slice(0, 10)}...`
            : userName.length === 0
            ? "User"
            : userName}
          !
        </span>
      </h2>
      <div onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={s.menu_container}
          onClick={() => setDropStatus((prev) => !prev)}
        >
          {showFullName && (
            <span className={`${s.full_name} ${s.full_name1}`}>
              {userName.slice(0, 32)}
            </span>
          )}
          <span>
            {userName.length > 10
              ? `${userName.slice(0, 10)}...`
              : userName.length === 0
              ? "User"
              : userName}
          </span>
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
