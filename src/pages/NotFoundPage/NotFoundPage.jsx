import GreenBlock from "../../components/GreenBlock/GreenBlock";
import s from "./NotFoundPage.module.css";
import nonExist from "../../assets/non-exist.svg";

import LanguageSwitcher from "../../components/Language/LanguageSwitcher.jsx"; //моє
import { useTranslation } from "react-i18next"; //моє

const NotFoundPage = () => {
  const { t } = useTranslation(); //моє

  return (
    <GreenBlock>
      <LanguageSwitcher />
      <div className={s.box}>
        <img className={s.svg} src={nonExist} alt="non exist route" />
        <h2 className={s.title}>{t("not_f")}</h2>
      </div>
    </GreenBlock>
  );
};

export default NotFoundPage;
