import { useState, useEffect } from "react";
import { selectDailyNorm } from "../../redux/auth/selectors";
import { selectWaterList } from "../../redux/water/selectors";
import s from "./WaterProgressBar.module.css";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next"; //моє

const WaterProgressBar = () => {
  const { t } = useTranslation(); //моє

  const waterList = useSelector(selectWaterList);
  const dailyNorm = useSelector(selectDailyNorm);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const totalVolume = waterList?.reduce((sum, { volume }) => sum + volume, 0);
    setValue(totalVolume);
  }, [waterList]);

  const createPercent = () => {
    if (waterList?.length === 0) return 0;
    if (waterList?.length !== 0) return Math.ceil((value * 100) / dailyNorm);
  };

  return (
    <div className={s.container}>
      <p className={s.title}>{t("home_today")}</p>
      <div className={s.slider}>
        <div
          className={s.progress}
          style={
            createPercent() > 100
              ? { width: "100" }
              : { width: `${createPercent()}%` }
          }
        ></div>
        <div
          className={s.thumb}
          style={
            createPercent() > 100
              ? { left: "100" }
              : { left: `${createPercent()}%` }
          }
        >
          <span
            className={s.percent_value}
            style={
              createPercent() > 100
                ? { left: "100" }
                : { left: `${createPercent()}%` }
            }
          >
            {createPercent()}%
          </span>
        </div>
      </div>
      <div className={s.percent_bar}>
        <span className={s.percent_bar_item}>0%</span>
        <span className={s.percent_bar_item}>50%</span>
        <span className={s.percent_bar_item}>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;
