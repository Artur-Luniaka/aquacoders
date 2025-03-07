import s from './WaterProgressBar.module.css';

const ProgressBar = () => {

return (
    <div className={s.container}>
      
      <p className={s.title}>Today</p>
      <div className={s.slider}><div className={s.rail}></div></div>
        <div className={s.percentBar}>
            <a>0%</a>
            <a className={s.fifty}>50%</a>
            <a>100%</a>
        </div>
    </div>

  );
}
export default ProgressBar;