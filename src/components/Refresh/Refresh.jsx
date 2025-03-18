import { ClassNames } from "@emotion/react";
import s from "./Refresh.module.css";
const Refresh = () => {
  return (
    <div className={s.preloader}>
      <div className={s.loader}></div>
    </div>
  );
};
export default Refresh;
