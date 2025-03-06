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

  const handleClick = (clickedDay, date) => {
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

      console.log("То что по идеи летит на бекенд:", date);

      return prevData.map((item) =>
        item.day === clickedDay
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
    });

  };

  return (
    <li className={s.dayItem} onClick={() => handleClick(day, date)}>
      <span
        className={clsx(
          s.number,
          currentDay === day && isActive && s.currentActiveDay,
          currentDay === day &&
            !isActive &&
            stats === 100 &&
            s.currentNotActiveDayHigh,
          currentDay === day &&
            !isActive &&
            stats < 100 &&
            s.currentNotActiveDayLow,
          currentDay !== day && isActive && s.notCurrentActiveDay,
          stats < 100 && s.lowPercent
        )}
      >
        {day}
      </span>
      <span className={s.percent}>{stats}%</span>
    </li>
  );
};

export default CalendarDayStatus;
