import s from "./AdvantagesSection.module.css";


const InfoLabels = () => {
  return (
    <div className={s.infoContainer}>
      <ul className={s.infoList}>
        <li className={s.infoItem}>
          <p className={`${s.label} ${s.dark}`}>Habit drive</p>
        </li>
        <li className={s.infoItem}>
          <p className={`${s.label} ${s.green}`}>View statistics</p>
      </li>
      <li className={s.infoItem}>
          <p className={`${s.label} ${s.white}`}>Personal rate setting</p>
      </li>
      </ul>
    </div>
  );
};
export default InfoLabels;