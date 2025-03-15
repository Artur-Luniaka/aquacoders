import { useEffect, useRef, useState } from "react";
import s from "./DailyWaterList.module.css";
import sprite from "../../assets/sprite.svg";
import DailyWaterItem from "../DailyWaterItem/DailyWaterItem.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import EditWater from "../EditWater/EditWater.jsx";
import DeleteEntryModal from "../DeleteEntryModal/DeleteEntryModal.jsx";
import AddWaterForm from "../AddWaterForm/AddWaterForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectClickedDay, selectWaterList } from "../../redux/water/selectors.js";
import { getDailyInfo } from "../../redux/water/operations/getDailyInfo.js";
import { months } from "../CalendarMonthStatus/month.js";

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const DailyWaterList = () => {
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const waterList = useSelector(selectWaterList);
  const clickedDay = useSelector(selectClickedDay);

  // clickedDay.slice(8, 10)
  // clickedDay.slice(5, 7)
  // clickedDay.slice(0, 4)

  console.log(clickedDay.slice(8, 10));
  

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const onOpenModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyInfo(`${currentYear}-${currentMonth.toString().padStart(2, "0")}-${currentDay.toString().padStart(2, "0")}`))
  }, [dispatch])

  // Додаємо обробник `wheel`, щоб Swiper працював із прокруткою миші
  useEffect(() => {
    const handleWheel = (event) => {
      if (swiperRef.current) {
        event.preventDefault();
        const swiper = swiperRef.current.swiper;
        swiper.slideTo(swiper.activeIndex + (event.deltaY > 0 ? 1 : -1));
      }
    };

    const swiperEl = swiperRef.current?.el;
    if (swiperEl) {
      swiperEl.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (swiperEl) {
        swiperEl.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <section>
      <div className={s.day_top_info}>
        <h2 className={s.current_day_title}>{Number (clickedDay.slice(8, 10)) === currentDay && Number(clickedDay.slice(5, 7)) === currentMonth && Number (clickedDay.slice(0, 4)) === currentYear ? "Today": `${clickedDay.String().padStart(2, "0")}
        <button onClick={onOpenModal} type="button" className={s.add_water_btn}>
          <span className={s.icon_plus_container}>
            <svg className={s.icon_plus}>
              <use href={sprite + "#icon-plus"} />
            </svg>
          </span>
          Add water
        </button>
        {isModalOpen && <AddWaterForm onCloseModal={closeModal} />}
      </div>

      {/* Якщо масив пустий, показуємо повідомлення */}
      {waterList.length === 0 ? (
        <div className={s.empty_state}>
          <p className={s.empty_text}>
            No water records yet. Add your first entry!
          </p>
        </div>
      ) : (
        <div className={s.swiper_container}>
          <Swiper
            ref={swiperRef}
            freeMode={true}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            keyboard={{ enabled: true }}
            pagination={{
              el: paginationRef.current,
              type: "progressbar",
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            modules={[Mousewheel, Keyboard, Pagination]}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 8 },
              768: { slidesPerView: 3, spaceBetween: 32 },
              1440: { slidesPerView: 3, spaceBetween: 16 },
            }}
            className={s.swiper}
          >
            {waterList.map(({ _id, volume, date }) => (
              <SwiperSlide className={s.water_list} key={_id}>
                <DailyWaterItem
                  volume={volume}
                  date={date}
                  onEdit={() => {
                    console.log("Редагується запис:", { _id, volume, date });
                    setSelectedRecord({ _id, volume, date });
                    setEditModalOpen(true);
                  }}
                  onDelete={() => setDeleteModalOpen(true)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationRef}
            className={`${s.custom_pagination} swiper-pagination`}
          ></div>
        </div>
      )}
      {editModalOpen && (
        <EditWater
          onCloseModal={() => setEditModalOpen(false)}
          record={selectedRecord}
        />
      )}
      {deleteModalOpen && (
        <DeleteEntryModal onCloseModal={() => setDeleteModalOpen(false)} />
      )}
    </section>
  );
};

export default DailyWaterList;
