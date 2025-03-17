import { useState, useEffect } from "react";
import { selectDailyNorm } from "../../redux/auth/selectors";
import { selectClickedDay, selectWaterList } from "../../redux/water/selectors";
import s from "./WaterProgressBar.module.css";
import { useSelector } from "react-redux";

import { months, monthsUa } from "../CalendarMonthStatus/month.js";
import { useTranslation } from "react-i18next";

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const WaterProgressBar = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language === "en";

  const waterList = useSelector(selectWaterList);
  const dailyNorm = useSelector(selectDailyNorm);
  const clickedDay = useSelector(selectClickedDay);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const totalVolume = waterList?.reduce((sum, { volume }) => sum + volume, 0);
    setValue(totalVolume);
  }, [waterList]);

  const createPercent = () => {
    if (waterList?.length === 0) return 0;
    if (waterList?.length !== 0) return Math.ceil((value * 100) / dailyNorm);
  };

  const checkDay = () => {
    const checkDayInner =
      Number(clickedDay?.slice(8, 10)) === currentDay &&
      Number(clickedDay?.slice(5, 7)) === currentMonth &&
      Number(clickedDay?.slice(0, 4)) === currentYear
        ? t("home_today")
        : `${Number(clickedDay?.slice(8, 10))}, ${
            en
              ? months[Number(clickedDay?.slice(5, 7)) - 1]
              : monthsUa[Number(clickedDay?.slice(5, 7)) - 1]
          }`;
    return !Number(clickedDay?.slice(8, 10)) ? t("home_today") : checkDayInner;
  };

  return (
    <div className={s.container}>
      <p className={s.title}>{checkDay()}</p>
      <div className={s.slider}>
        <div
          className={s.progress}
          style={
            createPercent() > 100
              ? { width: "102%" }
              : { width: `${createPercent()}%` }
          }
        >
          <div
            className={s.thumb}
            style={
              createPercent() <= 2
                ? { marginRight: "-10px" }
                : { marginRight: "0" }
            }
          >
            <span className={s.percent_value}>{createPercent()}%</span>
          </div>
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
