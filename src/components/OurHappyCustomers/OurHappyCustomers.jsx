import React, { useEffect, useState } from "react";
import s from "./OurHappyCustomers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLastUsers } from "../../redux/auth/selectors.js";
import { getLastUsers } from "../../redux/auth/operations/getLastUsers.js";
import clsx from "clsx";
import Loader from "../Loader/Loader.jsx";

const OurHappyCustomers = () => {
  const [activeBlock, setActiveBlock] = useState(false);

  const lastUsers = useSelector(selectLastUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastUsers());
  }, [dispatch]);

  return (
    <div
      className={s.happy_customers}
      onMouseEnter={() => setActiveBlock(true)}
      onMouseLeave={() => setActiveBlock(false)}
    >
      <div className={s.avatars}>
        <div className={s.images}>
          {lastUsers?.lastUsersAvatars ? (
            lastUsers?.lastUsersAvatars.map((avatar, idx) => (
              <img
                key={idx}
                className={s.image}
                src={avatar}
                alt={`customer${idx + 1}`}
              />
            ))
          ) : (
            <span className={s.loader}><Loader/></span>
          )}
        </div>
        <p className={s.paragraph}>
          Our <span className={s.highlight}>happy</span> customers
        </p>
      </div>
      <div className={clsx(s.count_customers, activeBlock && s.active)}>
        {lastUsers?.usersCounter ? lastUsers?.usersCounter : <span className={s.loader}><Loader/></span>}
      </div>
    </div>
  );
};

export default OurHappyCustomers;
