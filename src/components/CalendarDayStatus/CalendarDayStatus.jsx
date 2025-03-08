import s from "./CalendarDayStatus.module.css";
import clsx from "clsx";

const CalendarDayStatus = ({
  setCalendarData,
  dayInfo,
  currentDay,
  currentMonth,
  currentYear,
}) => {
  const { day, month, year, stats, isActive, date } = dayInfo;

  const handleClick = (clickedDay) => {
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

      //"Тут по идеи летит запрос на бекенд

      return prevData.map((item) =>
        item.day === clickedDay
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
    });
  };

  return (
    <li className={s.day_item} onClick={() => handleClick(day, date)}>
      <span
        className={clsx(s.number,
          currentDay === day && isActive && s.current_active_day,
          currentDay === day && !isActive && (stats === 100 || stats < 100) && s.current_not_active_day,
          currentDay !== day && isActive && s.not_current_active_day,
          stats < 100 && s.low_percent
        )}
      >
        {day}
      </span>
      <span className={s.percent}>{stats}%</span>
    </li>
  );
};

export default CalendarDayStatus;
