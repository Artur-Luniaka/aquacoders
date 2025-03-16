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

import { useTranslation } from "react-i18next"; //моє

const UserBar = () => {
  const { t } = useTranslation(); //моє

  const [dropStatus, setDropStatus] = useState(false);
  const [showFullName, setShowFullName] = useState(false);

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectEmail);
  const userURL = useSelector(selectAvatarUrl);

  const userAvatar = () => {
    if (userURL === "")
      return "https://cdn-icons-png.flaticon.com/512/12225/12225935.png";
    if (userURL !== "") return userURL;
  };

  const renderedName = userName === "" ? userEmail : userName;

  const shortenRenderedName =
    renderedName !== "" ? `${userEmail?.slice(0, 10)}...` : renderedName;

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
    if (renderedName.length > 10) {
      setShowFullName(true);
    }
  };

  const handleMouseHoverLeave = () => {
    if (renderedName.length > 10) {
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
        {t("home_hello")}
        <span>, {shortenRenderedName}!</span>
      </h2>
      <div onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={s.menu_container}
          onClick={() => setDropStatus((prev) => !prev)}
        >
          {showFullName && (
            <span className={`${s.full_name} ${s.full_name1}`}>
              {renderedName.slice(0, 32)}
            </span>
          )}
          <span>{shortenRenderedName}</span>
          <span className={s.user_avatar_container}>
            <img
              className={s.user_avatar}
              src={userAvatar()}
              alt={renderedName}
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
        <UserBarPopover dropStatus={dropStatus} />
      </div>
    </section>
  );
};

export default UserBar;
