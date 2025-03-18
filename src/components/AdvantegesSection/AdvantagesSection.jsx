import s from "./AdvantagesSection.module.css";

import { useTranslation } from "react-i18next"; //моє

const AdvantagesSection = () => {
  const { t } = useTranslation(); //моє

  return (
    <div className={s.info_container}>
      <ul className={s.info_list}>
        <li className={s.info_item}>
          <p className={`${s.label} ${s.dark}`}>{t("main_habit")}</p>
        </li>
        <li className={s.info_item}>
          <p className={`${s.label} ${s.green}`}>{t("main_view")}</p>
        </li>
        <li className={s.info_item}>
          <p className={`${s.label} ${s.white}`}>{t("main_personal")}</p>
        </li>
      </ul>
    </div>
  );
};
export default AdvantagesSection;
