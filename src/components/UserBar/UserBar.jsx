import UserBarPopover from "../UserBarPopover/UserBarPopover.jsx";

import s from "./UserBar.module.css";
import sprite from "../../assets/sprite.svg";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  selectAvatarUrl,
  selectEmail,
  selectUserName,
} from "../../redux/auth/selectors.js";

const UserBar = () => {
  const [dropStatus, setDropStatus] = useState(false);

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectEmail);
  const userURL = useSelector(selectAvatarUrl);

  const userAvatar = () => {
    if (userURL === "")
      return "https://cdn-icons-png.flaticon.com/512/12225/12225935.png";
    if (userURL !== "") return userURL;
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

  const checkName = () => {
    return userName
      ? userName
      : userEmail?.length > 12
      ? `${userEmail?.slice(0, 12)}...`
      : userEmail;
  };

  return (
    <section className={s.drop_down_container}>
      <h2 className={s.current_name}>
        Hello
        <span>, {checkName() ? checkName() : "User"}!</span>
      </h2>
      <div onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={s.menu_container}
          onClick={() => setDropStatus((prev) => !prev)}
        >
          <span>{checkName() ? checkName() : ""}</span>
          <span className={s.user_avatar_container}>
            <img
              className={s.user_avatar}
              src={userAvatar()}
              alt={checkName() ? checkName() : "User"}
            />
          </span>
          <span
            className={clsx(s.button_down, dropStatus && s.button_down_rotate)}
          >
            <svg className={`${s.icon_arrow}`}>
              <use href={sprite + "#icon-down-arrow"} />
            </svg>
          </span>
        </button>
        <UserBarPopover dropStatus={dropStatus} setDropStatus={setDropStatus} />
      </div>
    </section>
  );
};

export default UserBar;
