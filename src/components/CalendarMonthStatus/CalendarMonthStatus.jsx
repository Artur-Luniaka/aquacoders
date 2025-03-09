import s from "./CalendarMonthStatus.module.css";
import sprite from "../../assets/sprite.svg";

const CalendarMonthStatus = () => {
  return (
    <div className={s.month_container}>
      <h2 className={s.month_title}>Month</h2>
      <div className={s.month_status}>
        <button type="button" onClick={() => ""}>
          <svg className={`${s.icon_arrow_left} ${s.icon_arrow}`}>
            <use href={sprite + "#icon-down-arrow"} />
          </svg>
        </button>
        <p className={s.current_month}>March, 2024</p>
        <button type="button" onClick={() => ""}>
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
