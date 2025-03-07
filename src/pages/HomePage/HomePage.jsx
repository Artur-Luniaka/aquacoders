import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import s from "./HomePage.module.css";
import Customer1 from "../../assets/Customer1_mob@1x.webp";
import Customer4 from "../../assets/Customer1_mob@2x.webp";
import Customer5 from "../../assets/Customer1_web_tab@1x.webp";
import Customer6 from "../../assets/Customer1_web_tab@2x.webp";
import Customer2 from "../../assets/Customer2_mob@1x.webp";
import Customer7 from "../../assets/Customer2_mob@2x.webp";
import Customer8 from "../../assets/Customer2_web_tab@1x.webp";
import Customer9 from "../../assets/Customer2_web_tab@2x.webp";
import Customer3 from "../../assets/Customer3_mob@1x.webp";
import Customer10 from "../../assets/Customer3_mob@2x.webp";
import Customer11 from "../../assets/Customer3_web_tab@1x.webp";
import Customer12 from "../../assets/Customer3_web_tab@2x.webp";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <h2 className={s.logo}>AquaTrack</h2>
        <div className={s.info_container}>
          <p className={s.paragraph}>Record daily water intake and track</p>
          <h1 className={s.title}>Water consumption tracker</h1>
          <button className={s.btntry}>Try tracker</button>
          <button className={s.btnsign}>Sign in</button>
        </div>
      </GreyBlock>
      <div className={s.image}>
        <ImgBlock>
          <div className={s.customer_info}>
            <div className={s.avatars}>
              <picture>
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${Customer5} 1x, ${Customer6} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${Customer5} 1x, ${Customer6} 2x`}
                  type="image/webp"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${Customer1} 1x, ${Customer4} 2x`}
                  type="image/webp"
                />
                <img
                  src={Customer1}
                  alt="Girl customer"
                  className={s.customer_img}
                />
              </picture>
              <picture>
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${Customer8} 1x, ${Customer9} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${Customer8} 1x, ${Customer9} 2x`}
                  type="image/webp"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${Customer2} 1x, ${Customer7} 2x`}
                  type="image/webp"
                />
                <img
                  src={Customer2}
                  alt="Boy customer"
                  className={s.customer_img}
                />
              </picture>
              <picture>
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${Customer11} 1x, ${Customer12} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${Customer11} 1x, ${Customer12} 2x`}
                  type="image/webp"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${Customer3} 1x, ${Customer10} 2x`}
                  type="image/webp"
                />
                <img
                  src={Customer3}
                  alt="Girl customer"
                  className={s.customer_img}
                />
              </picture>
            </div>
            <p className={s.text_cust}>
              Our <span className={s.text_happy}>happy</span> customers
            </p>
          </div>
          <div className={s.text_container}>
            <p className={s.black_text}>Habit drive</p>
            <p className={s.green_text}>View statistics</p>
            <p className={s.white_text}>Personal rate setting</p>
          </div>
        </ImgBlock>
      </div>
    </>
  );
};

export default HomePage;
