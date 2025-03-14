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

  const checkFutureDay = () => {
    if (year > currentYear) return true;
    if (year === currentYear && month > currentMonth) return true;
    if (year === currentYear && month === currentMonth && day > currentDay) return true;
    return false;
  };

  const handleClick = (clickedDay, date) => {
    setClickedDay(clickedDay);
    if (checkFutureDay()) return;

    setCalendarData((prevData) => {
      const isAlreadyActive = prevData.some((item) => item.day === clickedDay && item.isActive);

      if (isAlreadyActive) return prevData;

      dispatch(getDailyInfo(date));

      return prevData.map((item) =>
        item.day === clickedDay ? { ...item, isActive: true } : { ...item, isActive: false }
      );
    });
  };

  const checkButtonState = () => {
    return clsx(s.number, currentDay === day && isActive && currentMonth === month && currentYear === year && s.current_active_day,
      currentDay === day && currentMonth === month && currentYear === year && !isActive && s.current_not_active_day,
      currentDay !== day && isActive && s.not_current_active_day,
      currentMonth !== month && isActive && s.not_current_active_day,
      checkFutureDay() && s.future_days,
      stats < 100 && s.low_percent
    );
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
