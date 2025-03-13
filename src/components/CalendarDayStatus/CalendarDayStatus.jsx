import { useDispatch } from "react-redux";
import s from "./CalendarDayStatus.module.css";
import clsx from "clsx";
import { getDailyInfo } from "../../redux/water/operations/getDailyInfo.js";

const CalendarDayStatus = ({
  dayInfo,
  currentDay,
  currentMonth,
  currentYear,
  setClickedDay,
  setCalendarData,
}) => {
  const { day, month, year, stats, isActive, date } = dayInfo;

  const dispatch = useDispatch();

  const handleClick = (clickedDay, date) => {
    setClickedDay(clickedDay);
    if (
      year > currentYear ||
      (year === currentYear && month > currentMonth) ||
      (year === currentYear && month === currentMonth && day > currentDay)
    ) {
      return;
    }

    setCalendarData((prevData) => {
      const isAlreadyActive = prevData.find(
        (item) => item.day === clickedDay
      )?.isActive;

      if (isAlreadyActive) {
        return prevData;
      }

      dispatch(getDailyInfo(date));

      return prevData.map((item) =>
        item.day === clickedDay
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
    });
  };

  const checkButtonState = () => {
    return clsx(
      s.number,
      currentDay === day &&
        isActive &&
        currentMonth === month &&
        currentYear === year &&
        s.current_active_day,
      currentDay === day &&
        currentMonth === month &&
        currentYear === year &&
        !isActive &&
        (stats === 100 || stats < 100) &&
        s.current_not_active_day,
      currentDay !== day && isActive && s.not_current_active_day,
      currentMonth <= month &&
        day > currentDay &&
        currentYear <= year &&
        s.future_days,
      stats < 100 && s.low_percent
    );
  };

  const checkFutureDay = () => {
    return currentMonth <= month && day > currentDay && currentYear <= year;
  };
  
  return (
    <button
      disabled={checkFutureDay()}
      type="button"
      className={s.day_item}
      onClick={() => handleClick(day, date)}
    >
      <span className={checkButtonState()}>{day}</span>
      <span className={s.percent}>{stats}%</span>
    </button>
  );
};

export default CalendarDayStatus;
