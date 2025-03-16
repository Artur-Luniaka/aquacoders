import s from "./DailyWaterItem.module.css";
import sprite from "../../assets/sprite.svg";
import toast from "react-hot-toast";

import { useTranslation } from "react-i18next"; //моє

const DailyWaterItem = ({
  volume,
  date,
  onEdit,
  onDelete,
  entryId,
  setSelectedId,
}) => {
  const { t } = useTranslation(); //моє

  const handleDelete = async () => {
    try {
      setSelectedId(entryId);
      onDelete(true);
      toast.success(<p>{t("others_ent")}</p>);
    } catch (e) {
      toast.error(<p>{t("others_fail")}</p>);
      e;
    }
  };

  return (
    <div className={s.water_item_container}>
      <svg className={s.icon_cup}>
        <use href={sprite + "#icon-cup"} />
      </svg>
      <div className={s.item_info_block}>
        <p className={s.value}>
          {volume < 1000 ? `${volume}ml` : `${Math.ceil(volume / 1000)}L`}
        </p>
        <p className={s.time}>
          {Number(date?.slice(11, 13)) <= 12
            ? `${date?.slice(11, 16)} AM`
            : `${date?.slice(11, 16)} PM`}
        </p>
      </div>
      <div className={s.edit_btns_container}>
        <button type="button" className={s.edit_btn} onClick={onEdit}>
          <svg className={s.icon_editing}>
            <use href={sprite + "#icon-editing"} />
          </svg>
        </button>
        <button type="button" className={s.edit_btn} onClick={handleDelete}>
          <svg className={s.icon_trash}>
            <use href={sprite + "#icon-trash"} />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default DailyWaterItem;
