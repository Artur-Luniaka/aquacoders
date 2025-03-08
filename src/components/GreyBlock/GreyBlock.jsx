import s from "./GreyBlock.module.css";
import Signin from "../Signin/Signin";

const GreyBlock = ({ children }) => {
  return (
    <div className={s.box}>
      {children}
      <Signin />
    </div>
  );
};

export default GreyBlock;

