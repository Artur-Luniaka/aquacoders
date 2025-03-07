import React from "react";
import s from "./OurHappyCustomers.module.css";
import Customer1 from "../../assets/Customer1_mob@1x.webp";
import Customer2 from "../../assets/Customer2_mob@1x.webp";
import Customer3 from "../../assets/Customer3_mob@1x.webp";

const OurHappyCustomers = () => {
  return (
    <div className={s.happy_customers}>
      <div className={s.avatars}>
        <div className={s.image}>
          <img src={Customer1} alt="Customer 1" />
          <img src={Customer2} alt="Customer 2" />
          <img src={Customer3} alt="Customer 3" />
        </div>
      </div>
      <p className={s.text}>
        Our <span className={s.highlight}>happy</span> customers
      </p>
    </div>
  );
};

export default OurHappyCustomers;
