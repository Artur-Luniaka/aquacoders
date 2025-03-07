import s from "./UserGreyBlock.module.css";

const UserGreyBlock = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};

export default UserGreyBlock;
