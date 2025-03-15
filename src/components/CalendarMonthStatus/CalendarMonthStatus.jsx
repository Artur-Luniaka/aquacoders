import s from "./CalendarMonthStatus.module.css";
import sprite from "../../assets/sprite.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMonthlyDate } from "../../redux/water/operations/getMonthlyDate.js";
import { months } from "./month.js";
import clsx from "clsx";

const CalendarMonthStatus = ({
  currentMonth,
  currentYear,
  clickedDay,
  currentDay,
  setCalendarData
}) => {
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
    setCalendarData([])
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
    setCalendarData([])
  };


  const checkCurrentStatus = () => {
    return  clickedDay !== currentDay ||
    monthNumber !== currentMonth ||
    yearNumber !== currentYear
      ? "Month"
      : "Today"
  }

  const checkMonth = () => {
    return monthNumber === currentMonth && yearNumber === currentYear;
  }

  return (
    <div className={s.month_container}>
      <h2 className={s.month_title}>
        {checkCurrentStatus()}
      </h2>
      <div className={s.month_status}>
        <button type="button" onClick={handleClickLeft}>
          <svg className={`${s.icon_arrow_left} ${s.icon_arrow}`}>
            <use href={sprite + "#icon-down-arrow"} />
          </svg>
        </button>
        <p className={s.current_month}>
          {months[monthNumber - 1]}, {yearNumber}
        </p>
        <button disabled={checkMonth()} className={clsx(checkMonth() && s.disabled)} type="button" onClick={handleClickRight}>
          <svg className={`${s.icon_arrow_right} ${s.icon_arrow}`}>
            <use href={sprite + "#icon-down-arrow"} />
          </svg>
        </button>
        <button type="button">
          <svg className={s.icon_diagram}>
            <use href={sprite + "#icon-diagram"} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarMonthStatus;
