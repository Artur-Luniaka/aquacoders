import s from "./Calendar.module.css";
import { useEffect, useState } from "react";
import CalendarDayStatus from "../CalendarDayStatus/CalendarDayStatus.jsx";
import CalendarMonthStatus from "../CalendarMonthStatus/CalendarMonthStatus.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyDate } from "../../redux/water/operations/getMonthlyDate.js";
import { selectMonthData } from "../../redux/water/selectors.js";
import { selectDailyNorm } from "../../redux/auth/selectors.js";

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const Calendar = () => {
  const [clickedDay, setClickedDay] = useState(currentDay);
  const [calendarData, setCalendarData] = useState([]);

  const monthData = useSelector(selectMonthData);
  const dailyNorm = useSelector(selectDailyNorm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMonthlyDate(
        `${currentYear}-${currentMonth.toString().padStart(2, "0")}`
      )
    );
  }, [dispatch]);

  useEffect(() => {
    if (monthData.length > 0) {
      const newMonthData = monthData.map((items) => {
        const parsedDay = Number(items.date.slice(8, 10));
        const parsedMonth = Number(items.date.slice(5, 7));
        const parsedYear = Number(items.date.slice(0, 4));
        return {
          ...items,
          stats: Math.ceil((items.stats * 100) / dailyNorm),
          day: parsedDay,
          month: parsedMonth,
          year: parsedYear,
          isActive: parsedDay === currentDay,
        };
      });
      setCalendarData(newMonthData);
    }
  }, [monthData, dailyNorm]);

  return (
    <section className={s.calendar_section}>
      <CalendarMonthStatus
        currentMonth={currentMonth}
        currentYear={currentYear}
        clickedDay={clickedDay}
        currentDay={currentDay}
        setCalendarData={setCalendarData}
      />
      {calendarData.length > 0 ? (
        <div className={s.calendar_list}>
          {calendarData.map((dayInfo) => (
            <CalendarDayStatus
              key={dayInfo.date}
              dayInfo={dayInfo}
              currentDay={currentDay}
              currentMonth={currentMonth}
              currentYear={currentYear}
              setClickedDay={setClickedDay}
              setCalendarData={setCalendarData}
            />
          ))}
        </div>
      ) : (
        <div className={s.empty_calendar_list}>...Loading</div>
      )}
    </section>
  );
};

export default Calendar;
