import s from "./GreyBlock.module.css";
import SignInForm from "../SigninForm/SignInForm";

const GreyBlock = ({ children }) => {
  return (
    <div className={s.box}>
      {children}
      <SignInForm />
    </div>
  );
};

export default GreyBlock;

