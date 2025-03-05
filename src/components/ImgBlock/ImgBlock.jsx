import s from "./ImgBlock.module.css";

const ImgBlock = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};

export default ImgBlock;
