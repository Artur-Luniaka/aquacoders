import s from "./SaveButton.module.css";

const SaveButton = () => {
  return (
    <button className={s.btn} type="submit">
      Save
    </button>
  );
};

export default SaveButton;
