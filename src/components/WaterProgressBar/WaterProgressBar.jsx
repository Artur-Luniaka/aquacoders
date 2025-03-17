import { useState, useEffect } from "react";
import { selectDailyNorm } from "../../redux/auth/selectors";
import { selectClickedDay, selectWaterList } from "../../redux/water/selectors";
import s from "./WaterProgressBar.module.css";
import { useSelector } from "react-redux";
import {months} from '../CalendarMonthStatus/month.js';

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

import { useTranslation } from "react-i18next"; //моє

const WaterProgressBar = () => {
  const { t } = useTranslation(); //моє

  const waterList = useSelector(selectWaterList);
  const dailyNorm = useSelector(selectDailyNorm);
  const clickedDay = useSelector(selectClickedDay)
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
          ? "Today"
          : `${Number(clickedDay?.slice(8, 10))}, ${
              months[Number(clickedDay?.slice(5, 7)) - 1]
            }`;
      return !Number(clickedDay?.slice(8, 10)) ? "Today" : checkDayInner;
    };

  return (
    <div className={s.container}>
<<<<<<< HEAD
      <p className={s.title}>{t("home_today")}</p>
=======
      <p className={s.title}>{checkDay()}</p>
>>>>>>> main
      <div className={s.slider}>
        <div
          className={s.progress}
          style={
            createPercent() > 100
              ? { width: "102%" }
              : { width: `${createPercent()}%` }
          }
        >
        <div className={s.thumb} style={createPercent() <= 2 ? {marginRight: "-10px"} : {marginRight: "0"}}>
          <span className={s.percent_value} >
            {createPercent()}%
          </span>
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
