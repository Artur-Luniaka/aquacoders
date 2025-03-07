import s from "./Calendar.module.css";

import { useState } from "react";
import CalendarDayStatus from "../CalendarDayStatus/CalendarDayStatus.jsx";

const Calendar = () => {
  const dataFromBackend = [
    { date: "2025-03-01", stats: 100 },
    { date: "2025-03-02", stats: 99 },
    { date: "2025-03-03", stats: 100 },
    { date: "2025-03-04", stats: 100 },
    { date: "2025-03-05", stats: 100 },
    { date: "2025-03-06", stats: 100 },
    { date: "2025-03-07", stats: 0 },
    { date: "2025-03-08", stats: 0 },
    { date: "2025-03-09", stats: 0 },
    { date: "2025-03-10", stats: 0 },
    { date: "2025-03-11", stats: 0 },
    { date: "2025-03-12", stats: 0 },
    { date: "2025-03-13", stats: 0 },
    { date: "2025-03-14", stats: 0 },
    { date: "2025-03-15", stats: 0 },
    { date: "2025-03-16", stats: 0 },
    { date: "2025-03-17", stats: 0 },
    { date: "2025-03-18", stats: 0 },
    { date: "2025-03-19", stats: 0 },
    { date: "2025-03-20", stats: 0 },
    { date: "2025-03-21", stats: 0 },
    { date: "2025-03-22", stats: 0 },
    { date: "2025-03-23", stats: 0 },
    { date: "2025-03-24", stats: 0 },
    { date: "2025-03-25", stats: 0 },
    { date: "2025-03-26", stats: 0 },
    { date: "2025-03-27", stats: 0 },
    { date: "2025-03-28", stats: 0 },
    { date: "2025-03-29", stats: 0 },
    { date: "2025-03-30", stats: 0 },
    { date: "2025-03-31", stats: 0 },
  ];

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const newFrontendData = dataFromBackend.map((item) => {
    const parsedDay = Number(item.date.slice(8, 10));
    const parsedMonth = Number(item.date.slice(5, 7));
    const parsedYear = Number(item.date.slice(0, 4));
    return currentDay !== parsedDay
      ? {
          ...item,
          day: parsedDay,
          month: parsedMonth,
          year: parsedYear,
          isActive: false,
        }
      : {
          ...item,
          day: parsedDay,
          month: parsedMonth,
          year: parsedYear,
          isActive: true,
        };
  });

  const [calendarData, setCalendarData] = useState(newFrontendData);
  return (
    <>
      <div className={s.monthContainer}>
        <h2 className={s.monthTitle}>Month</h2>
      </div>
      <ul className={s.calendarList}>
        {calendarData.map((dayInfo) => (
          <CalendarDayStatus
            key={dayInfo.day}
            setCalendarData={setCalendarData}
            dayInfo={dayInfo}
            currentDay={currentDay}
            currentMonth={currentMonth}
            currentYear={currentYear}
          />
        ))}
      </ul>
    </>
  );
};

export default Calendar;
