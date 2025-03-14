import GreenBlock from "../../components/GreenBlock/GreenBlock";
import s from "./NotFoundPage.module.css";
import nonExist from "../../assets/non-exist.svg";

const NotFoundPage = () => {
  return (
    <GreenBlock>
      <div className={s.box}>
        <img className={s.svg} src={nonExist} alt="non exist route" />
        <h2 className={s.title}>
          Ooopppsss...It looks like you have navigated to a non-existent route
        </h2>
      </div>
    </GreenBlock>
  );
};

export default NotFoundPage;
