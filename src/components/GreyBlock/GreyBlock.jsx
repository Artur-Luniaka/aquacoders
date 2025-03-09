import s from "./GreyBlock.module.css";

const GreyBlock = ({ children }) => {
  return (
    <div className={s.box}>
      {children}
      
    </div>
  );
};

export default GreyBlock;

