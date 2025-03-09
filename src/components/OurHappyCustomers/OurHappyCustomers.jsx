import React from "react";
import s from "./OurHappyCustomers.module.css";
import Customer1 from "../../assets/Customer1_mob@1x.webp";
import Customer2 from "../../assets/Customer1_mob@2x.webp";
import Customer3 from "../../assets/Customer1_web_tab@1x.webp";
import Customer4 from "../../assets/Customer1_web_tab@2x.webp";
import Customer5 from "../../assets/Customer2_mob@1x.webp";
import Customer6 from "../../assets/Customer2_mob@2x.webp";
import Customer7 from "../../assets/Customer2_web_tab@1x.webp";
import Customer8 from "../../assets/Customer2_web_tab@2x.webp";
import Customer9 from "../../assets/Customer3_mob@1x.webp";
import Customer10 from "../../assets/Customer3_mob@2x.webp";
import Customer11 from "../../assets/Customer3_web_tab@1x.webp";
import Customer12 from "../../assets/Customer3_web_tab@2x.webp";

const OurHappyCustomers = () => {
  return (
    <div className={s.happy_customers}>
      <div className={s.avatars}>
        <div className={s.image}>
          <picture>
            <source
              srcSet={`${Customer3} 1x, ${Customer4} 2x`}
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              srcSet={`${Customer3} 1x, ${Customer4} 2x`}
              media="(min-width: 1440px)"
            />
            <img
              className={s.images_girl}
              src={Customer1}
              srcSet={`${Customer2} 2x`}
              alt="Girl customer"
            />
          </picture>
          <picture>
            <source
              srcSet={`${Customer7} 1x, ${Customer8} 2x`}
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              srcSet={`${Customer7} 1x, ${Customer8} 2x`}
              media="(min-width: 1440px)"
            />
            <img
              className={s.images_boy}
              src={Customer5}
              alt="Boy customer"
              srcSet={`${Customer6} 2x`}
            />
          </picture>
          <picture>
            <source
              srcSet={`${Customer11} 1x, ${Customer12} 2x`}
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              srcSet={`${Customer11} 1x, ${Customer12} 2x`}
              media="(min-width: 1440px)"
            />
            <img
              className={s.images_girl_ano}
              src={Customer9}
              alt="Girl customer"
              srcSet={`${Customer10} 2x`}
            />
          </picture>
        </div>
        <p className={s.paragraph}>
          Our <span className={s.highlight}>happy</span> customers
        </p>
      </div>
    </div>
  );
};

export default OurHappyCustomers;
