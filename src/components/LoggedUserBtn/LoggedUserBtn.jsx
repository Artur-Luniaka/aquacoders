import { Link } from "react-router-dom";
import s from "./LoggedUserBtn.module.css";

const LoggedUserBtn = () => {
  return (
    <button className={s.btn}>
      <Link className={s.link} to="/user">
        Go Back to Account
      </Link>
    </button>
  );
};

export default LoggedUserBtn;
