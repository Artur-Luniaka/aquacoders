import s from "./CalendarMonthStatus.module.css";
import sprite from "../../assets/sprite.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMonthlyDate } from "../../redux/water/operations/getMonthlyDate.js";
import { months, monthsUa } from "./month.js";
import clsx from "clsx";

import { useTranslation } from "react-i18next"; //моє

const CalendarMonthStatus = ({
  currentMonth,
  currentYear,
  clickedDay,
  currentDay,
  setCalendarData,
  onToggleChart,
}) => {
  const { t, i18n } = useTranslation(); //моє
  const en = i18n.language === "en";

  const [monthNumber, setMonthNumber] = useState(currentMonth);
  const [yearNumber, setYearNumber] = useState(currentYear);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMonthlyDate(`${yearNumber}-${monthNumber.toString().padStart(2, "0")}`)
    );
  }, [dispatch, yearNumber, monthNumber]);

  const handleClickRight = () => {
    if (yearNumber > currentYear + 10) {
      return;
    }
    if (monthNumber === 12) {
      setMonthNumber(0);
      setYearNumber((prev) => prev + 1);
    }
    setMonthNumber((prev) => prev + 1);
    setCalendarData([]);
  };

  const handleClickLeft = () => {
    if (yearNumber < currentYear - 10) {
      return;
    }
    if (monthNumber === 1) {
      setMonthNumber(13);
      setYearNumber((prev) => prev - 1);
    }
    setMonthNumber((prev) => prev - 1);
    setCalendarData([]);
  };

  const checkCurrentStatus = () => {
    return clickedDay !== currentDay ||
      monthNumber !== currentMonth ||
      yearNumber !== currentYear ? (
      <p>{t("home_month")}</p>
    ) : (
      <p>{t("home_today")}</p>
    );
  };

  const checkMonth = () => {
    return monthNumber === currentMonth && yearNumber === currentYear;
  };

  return (
    <div className={s.month_container}>
      <h2 className={s.month_title}>{checkCurrentStatus()}</h2>
      <div className={s.month_status}>
        <button type="button" onClick={handleClickLeft}>
          <svg className={`${s.icon_arrow_left} ${s.icon_arrow}`}>
            <use href={sprite + "#icon-down-arrow"} />
          </svg>
        </button>
        <p className={s.current_month}>
          {en ? months[monthNumber - 1] : monthsUa[monthNumber - 1]},{" "}
          {yearNumber}
        </p>
        <button
          disabled={checkMonth()}
          className={clsx(checkMonth() && s.disabled)}
          type="button"
          onClick={handleClickRight}
        >
          <svg className={`${s.icon_arrow_right} ${s.icon_arrow}`}>
            <use href={sprite + "#icon-down-arrow"} />
          </svg>
        </button>
        <button type="button" onClick={onToggleChart}>
          <svg className={s.icon_diagram}>
            <use href={sprite + "#icon-diagram"} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarMonthStatus;
