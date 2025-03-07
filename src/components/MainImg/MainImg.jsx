import womanMob1x from "../../assets/woman_mob@1x.webp";
import womanMob2x from "../../assets/woman_mob@2x.webp";
import womanTab1x from "../../assets/woman_tab@1x.webp";
import womanTab2x from "../../assets/woman_tab@2x.webp";
import womanWeb1x from "../../assets/woman_web@1x.webp";
import womanWeb2x from "../../assets/woman_web@2x.webp";
import css from "./MainImg.module.css";

const MainImg = () => {
  return (
    <div className={css.img_box}>
      <picture>
        <source
          srcSet={`${womanMob1x} 1x, ${womanMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${womanTab1x} 1x, ${womanTab2x} 2x`}
          media="(min-width: 768px) and (max-width: 1439px)"
        />
        <source
          srcSet={`${womanWeb1x} 1x, ${womanWeb2x} 2x`}
          media="(min-width: 1440px)"
        />
        <img
          className={css.img}
          src={womanMob1x}
          alt="Girl with water"
          width="704"
          height="446"
        />
      </picture>
    </div>
  );
};

export default MainImg;
