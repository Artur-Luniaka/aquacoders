import s from "./Calendar.module.css";
import { useEffect, useState } from "react";
import CalendarDayStatus from "../CalendarDayStatus/CalendarDayStatus.jsx";
import CalendarMonthStatus from "../CalendarMonthStatus/CalendarMonthStatus.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyDate } from "../../redux/water/operations/getMonthlyDate.js";
import { selectMonthData } from "../../redux/water/selectors.js";
import { selectDailyNorm } from "../../redux/auth/selectors.js";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const Calendar = () => {
  const [clickedDay, setClickedDay] = useState(currentDay);
  const [chart, setChart] = useState(false);
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
          isActive: false,
        };
      });
      setCalendarData(newMonthData);
    }
  }, [monthData, dailyNorm]);

  const handleToggleChart = () => {
    setChart((prev) => !prev);
  };

  const transformData = (monthData) => {
    return monthData
      .filter((item) => {
        const day = new Date(item.date).getDate();
        return day > currentDay - 4 && day < currentDay + 4;
      })
      .map((item) => ({
        name: new Date(item.date).getDate(),
        stats: item.stats / 1000,
      }));
  };

  return (
    <section className={s.calendar_section}>
      <CalendarMonthStatus
        currentMonth={currentMonth}
        currentYear={currentYear}
        clickedDay={clickedDay}
        currentDay={currentDay}
        setCalendarData={setCalendarData}
        onToggleChart={handleToggleChart}
      />
      {!chart ? (
        <>
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
        </>
      ) : (
        <div className={s.chart_wrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={transformData(monthData)}>
              <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#333", fontSize: 12 }}
                axisLine={{ stroke: "#555" }}
              />
              <YAxis
                tick={{ fill: "#333", fontSize: 12 }}
                axisLine={{ stroke: "#555" }}
                tickFormatter={(value) => `${value}L`}
                domain={[0, 2.5]}
                ticks={[0, 0.5, 1, 1.5, 2, 2.5]}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="stats"
                stroke="none"
                fill="#87D28D"
                fillOpacity={0.3}
              />
              <Line
                type="monotone"
                dataKey="stats"
                stroke="#87D28D"
                strokeWidth={2}
                dot={{ r: 5, fill: "white" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
};

export default Calendar;
