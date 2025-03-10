import s from './WaterProgressBar.module.css';

const WaterProgressBar = () => {

return (
    <div className={s.container}>
      <p className={s.title}>Today</p>
      <div className={s.slider}><div className={s.rail}></div></div>
        <div className={s.percent_bar}>
            <span className={s.percent_bar_item}>0%</span>
            <span className={`${s.percent_bar_item} ${s.fifty}`}>50%</span>
            <span className={s.percent_bar_item}>100%</span>
        </div>
    </div>

  );
}
export default WaterProgressBar;