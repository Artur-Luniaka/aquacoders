import s from "./GreenBlock.module.css";

const GreenBlock = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};

export default GreenBlock;
